import React, { useEffect, useState } from 'react'
import Layout from '../../conponents/layout/Layout'
import AdminMenu from '../../conponents/layout/AdminMenu'
import axios from 'axios'
import { HiBattery100 } from 'react-icons/hi2'
import ProductCard from '../ProductCard.jsx'
import Create from './Create.jsx'


const CreateProducts = () => {
  const [product, setProduct] = useState([]) 
  const [open, setOpen] = useState(true);
  

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

            <Create open={open} setOpen={setOpen} />

            {/* {product?.map((item, idx) => (
             <>
             
                <ProductCard item={item} />
             </>
            ))} */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProducts