import React, { useEffect, useState } from 'react'
import Layout from '../../conponents/layout/Layout'
import AdminMenu from '../../conponents/layout/AdminMenu'
import axios from 'axios'
import { HiBattery100 } from 'react-icons/hi2'
import ProductCard from '../ProductCard.jsx'
import Create from './Create.jsx'
import { toast } from 'react-toastify'


const CreateProducts = () => {
  const [product, setProduct] = useState([]) 
  const [open, setOpen] = useState(false);
  const [editItem,setEditItem] = useState(null)
  const [productValue,setProductValue] = useState({})
  const createCategory = async (productData) => {
    // Destructure the required fields from the product data
    const { name, category, description, price, quantity, shipping, photo } = productData;
  setProductValue(productData)
    try {
      // Create FormData object if you have file uploads (e.g., photo)
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('shipping', shipping);
  
      // Check if there's a photo and append it to FormData
      if (photo) {
        formData.append('photo', photo); // Assuming 'photo' is a file input
      }
  
      // Send POST request with the FormData (ensure your backend can handle multipart/form-data)
      const { data } = await axios.post("http://localhost:8080/api/v1/product/create-product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct content type
        },
      });
  
      // Handle the success response
      if (data?.success) {
        // You can update the UI here if needed (e.g., setProduct)
        console.log(data);
        toast.success("Product created successfully!");
      }
    } catch (error) {
      // Improved error handling
      console.error(error);
      toast.error("Something went wrong while creating the product.");
    }
  };
  

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      if (data?.success) {
        setProduct(data?.products);
        // console.log(data)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleUpdate = async (item)=>{
setOpen(true)
setEditItem(item)
console.log(item)

  }
  
  return (
    <Layout>
      <div className="flex h-full w-full ">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <div className="4/5">
          <div className="">
            <h1>Products</h1> 
            <h1 onClick={()=>setOpen(true)}>creat products</h1>

            <Create editItem={editItem}  open={open} setOpen={setOpen} createCategory={createCategory}/>

            {product?.map((item, idx) => (
             <div key={item._id}>
             
                <ProductCard handleUpdate={handleUpdate}  item={item} />
             </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProducts