import React, { useEffect, useState } from "react";
import Layout from "../../conponents/layout/Layout";
import AdminMenu from "../../conponents/layout/AdminMenu";
import axios from "axios";
import { HiBattery100 } from "react-icons/hi2";
import ProductCard from "../ProductCard.jsx";
import Create from "./Create.jsx";
import { toast } from "react-toastify";

const CreateProducts = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [productValue, setProductValue] = useState({});

  // Function to create or update a product
  const createCategory = async (productData) => {
    const { name, category, description, price, quantity, shipping, photo } =
      productData;
    setProductValue(productData);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category?._id || category); // Ensure category is an ID
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("shipping", shipping);
      if (photo) {
        formData.append("photo", photo); // Assuming 'photo' is a file input
      }

      if (editItem) {
        // Update product
        const { data } = await axios.put(
          `http://localhost:8080/api/v1/product/update-product/${editItem._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (data?.success) {
          toast.success("Product updated successfully!");
          getAllProducts(); // Refresh products list
          setEditItem(null);
          setOpen(false);
        }
      } else {
        // Create new product
        const { data } = await axios.post(
          "http://localhost:8080/api/v1/product/create-product",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (data?.success) {
          toast.success("Product created successfully!");
          getAllProducts(); // Refresh products list
          setOpen(false);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while saving the product.");
    }
  };

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      if (data?.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while fetching products.");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Handle product update initiation
  const handleUpdate = (item) => {
    setOpen(true);
    setEditItem({ ...item, category: item.category._id }); // Ensure category is an ID
  };

  return (
    <Layout>
      <div className="flex h-full w-full">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <div className="w-4/5">
          <div className="">
            <h1>Products</h1>
            <button onClick={() => setOpen(true)}>Create Product</button>

            <Create
              editItem={editItem}
              open={open}
              setOpen={setOpen}
              createCategory={createCategory}
            />

            {products?.map((item) => (
              <div key={item._id}>
                <ProductCard handleUpdate={handleUpdate} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProducts;
