import axios from "axios";
import React, { useDebugValue, useEffect, useState } from "react";
import { toast } from "react-toastify";
const Initial = {
  name: "",
  description: "",
  category: "",
  price: "",
  quantity: "",
  shipping: "",
  photo: "",
};
const Create = ({ open, setOpen,createCategory,editItem }) => {
  const [createProduct, setCreateProduct] = useState(Initial);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setCreateProduct({ ...createProduct, [e.target.name]: e.target.value });
    // console.log(createProduct);
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
   
    getAllCategory();
  }, []);
  useEffect(()=>{ 
    if(editItem){
      setCreateProduct({
        name:editItem.name ,
        description:editItem.description,
        category: editItem.category,
        price: editItem.price,
        quantity:editItem.quantity,
        shipping: editItem.shipping,
        photo: editItem.photo,
    })
    }},[editItem])
  return (
    <div
      className={`${
        open ? "absolute" : "hidden"
      }  h-[700px] w-[800px] absolute top-40  border  p-10 bg-gray-300`}
    >
      <button
        className="text-2xl absolute  top-2 right-5"
        onClick={() => setOpen(false)}
      >
        x
      </button>
{/* {createProduct.photo &&  <img src={URL.createObjectURL(createProduct)} alt="" />} */}
      <form action="" className="flex flex-col " onSubmit={(e)=>{
        e.preventDefault()
        if(createCategory(createProduct)){
setCreateProduct(Initial)
setOpen(false)
        }
      }}>
        <input
          type="file"
          name="photo"
          placeholder="upload photos"
          onChange={handleChange}
          value={createProduct.photo}

          className="size-80 border rounded-sm flex items-center justify-center"
        />
        <input
          type="text"
          name="name"
          value={createProduct.name}
          onChange={handleChange}
          required
          placeholder="enter product name"
        />
        <input
          type="text"
          name="description"
          value={createProduct.description}
          onChange={handleChange}
          required
          placeholder="enter product description"
        />
        <select name="category" id="" value={createProduct.category._id} onChange={handleChange} required>
          <option value="">select category </option>
          {categories?.map((item, idx) => {
            return <option value={item._id}>{item.name}</option>;
          })}
        </select>
        <input
          type="number"
          name="price"
          value={createProduct.price}
          onChange={handleChange}
          required
          placeholder="enter product price"
        />
        <input
          type="number"
          name="quantity"
          value={createProduct.quantity}
          onChange={handleChange}
          required
          placeholder="enter product quantity"
        />
        <select name="shipping" id="" value={createProduct.shipping} onChange={handleChange} required>
          <option >select shiping</option>
          <option value='true'>yes</option>
          <option value='false'>no</option>
        </select>
        <input type="submit" value="create product " className="border" />
      </form>
    </div>
  );
};

export default Create;
