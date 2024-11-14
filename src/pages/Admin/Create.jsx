import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Initial = {
  name: "",
  description: "",
  category: "",
  price: "",
  quantity: "",
  shipping: true,
  photo: "",
};
const Create = ({ open, setOpen }) => {
  const [createProduct, setCreateProduct] = useState(Initial);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setCreateProduct({ ...createProduct, [e.target.name]: e.target.value });
    console.log(createProduct);
  };
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      console.log(data);
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
  return (
    <div
      className={`${
        open ? "absolute" : "hidden"
      }  h-[700px] w-[800px] absolute top-40  border  p-10`}
    >
      <button
        className="text-2xl absolute  top-2 right-5"
        onClick={() => setOpen(false)}
      >
        x
      </button>
      <form action="" className="flex flex-col ">
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
          placeholder="enter product name"
        />
        <input
          type="text"
          name="description"
          value={createProduct.description}
          onChange={handleChange}
          placeholder="enter product description"
        />
        <select name="category" id="">
          <option value="">select category </option>
          {categories?.map((item, idx) => {
            return <option value={createProduct.category}>{item.name}</option>;
          })}
        </select>
        <input
          type="number"
          name="price"
          value={createProduct.price}
          onChange={handleChange}
          placeholder="enter product price"
        />
        <input
          type="text"
          name="quntity"
          value={createProduct.quantity}
          onChange={handleChange}
          placeholder="enter product quantity"
        />
        <select name="shipping" id="" onChange={handleChange}>
          <option value="">select shiping</option>
          <option value={createProduct.shipping}>yes</option>
          <option value={createProduct.shipping}>no</option>
        </select>
        <input type="submit" value="create product " className="border" />
      </form>
    </div>
  );
};

export default Create;
