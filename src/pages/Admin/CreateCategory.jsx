import React, { useEffect, useState } from "react";
import Layout from "../../conponents/layout/Layout";
import AdminMenu from "../../conponents/layout/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const [name, setName] = useState({ name: "" });
  const [edit,setEdit] = useState(null)
console.log(edit)
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      if (edit) {
        const { data } = await axios.put(
        `http://localhost:8080/api/v1/category/update-category/${edit}`,
       {name,}
        );
        if (data?.success) {
          toast.success(`${name} is created`);
          getAllCategory();
          setName({ name: "" });
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          "http://localhost:8080/api/v1/category/create-category",
          {
            name,
          }
        );
        if (data?.success) {
          toast.success(`${name} is created`);
          getAllCategory();
          setName({ name: "" });
        } else {
          toast.error(data.message);
        }
      }

      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
        setName({ name: "" });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  const [categories, setCategories] = useState([]);
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

  // console.log(categories)
  //update category
  const handleUpdate = async (cid,cat) => {
    setName({...name,name:cat})
  
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);
        setName({ name: '' })
        setEdit(null)
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
    <Layout>
      <div className="flex h-full w-full ">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <div className="4/5">
          <div className="">
            <h1>manage category</h1>
            <form action="" onSubmit={handleCreate}>
              <input
                type="text"
                name="name"
                placeholder="enter category name"
                value={name.name}
                onChange={(e) => setName(e.target.value)}
              />
              <input type="submit" value={`${edit !== null ? "update category" : "create category"}`} />
            </form>

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      category name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((item, idx) => {
                    return (
                      <tr
                        key={idx + item._id}
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.name}
                        </th>
                        <td class="px-6 py-4">
                          <button onClick={() => {
                            handleUpdate(item._id, item.name)
                            setEdit(item._id)
                          }}>
                            edit
                          </button>{" "}
                          <button
                            className=""
                            onClick={() => handleDelete(item._id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
