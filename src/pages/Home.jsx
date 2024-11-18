import React, { useEffect, useState } from "react";
import Layout from "../conponents/layout/Layout";
import { useAuth } from "../context/auth.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import Checkbox from "./Checkbox.jsx";
import { price } from "../conponents/Price.js";
import Radio from "./Radio.jsx";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
 
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
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      // console.log(data);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

 

  useEffect(() => {
    getAllProducts();
     getAllCategory();
  }, []);
  const handleFilter = (id) => {
    let all = [...checked];

    // Toggle the presence of id in the array
    if (all.includes(id)) {
      all = all.filter((c) => c !== id); // Remove id if it's already in the array
    } else {
      all.push(id); // Add id if it's not in the array
    }

    setChecked(all);
    console.log(all);
  };

  const handleRadio = (item) => {
    console.log(item)
  }

  return (
    <Layout>
      <h1>hwklj</h1>
      <pre>{JSON.stringify(checked, null, 4)}</pre>
      <div className="flex">
        <div className="w-1/5">
          <h6>filter by category</h6>
          {categories?.map((item, idx) => (
            <Checkbox key={item._id} item={item} handleFilter={handleFilter} />
          ))}
          <Radio handleRadio={handleRadio} />
        </div>
        <div className="w-4/5">
          <h1>all products</h1>
          {products?.map((item) => {
            return (
              <div className="h-32 w-72 border">
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                <h1>{item.description}</h1>
                <button className="bg-blue-50 p-1 border">mor details</button>
                <button className="bg-blue-50 p-1 border">add to cart </button>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
