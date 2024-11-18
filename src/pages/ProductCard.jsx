import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const ProductCard = ({item,handleUpdate}) => {
  const handleDelete = async (id)=>{

    try {
      const { data } = await axios.delete(`http://localhost:8080/api/v1/product/delete-product/${id}`);
      
      if (data?.success) {
        // Display success toast notification
        toast.success(data?.message || "Product deleted successfully.");
        // Optionally log or update the UI state
        // setProducts(prevState => prevState.filter(product => product.id !== id));
      } else {
        // Handle the case where deletion didn't succeed, though success is generally defined by the 'success' field.
        toast.error("Failed to delete the product. Please try again.");
      }
    } catch (error) {
      // Log the error in a production-safe manner
      console.error("Error deleting product:", error);
      toast.error("Something went wrong while deleting the product. Please try again later.");
    }
    
  }
  return (
    <div className="size-80 border">
      <img src={item.photo} alt="" />
      name: <h1 key={item._id}>{item.name}</h1>
      
      {/* {item._id} */}
      <img
        src={`http://localhost:8080/api/v1/product/product-photo/${item._id}`}
        alt=""
        className="size-20"
      />
      <button onClick={() => handleUpdate(item)}>update</button>
      <button onClick={() => handleDelete(item._id)}>delete</button>
    </div>
  );
}

export default ProductCard