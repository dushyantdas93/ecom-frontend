import React, { useState } from "react";
import Layout from "../../conponents/layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";


const initial = { email: "", password: "" };
const Login = () => {
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
  const [user, setUser] = useState(initial);
  const handleChange = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
        const res = await axios.post(
            `http://localhost:8080/api/v1/auth/login`,
            user
        );
        if (res && res.data.success) {
            toast.success(res.data.message);
            setAuth({...auth,user:res.data.user,token:res.data.token})
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            toast.error(res.data.message);
        }
    } catch (error) {
        toast.error("something went wrong")
    }
    setUser(initial);
  };
  return (
    <Layout title="Login ecomm-2024">
      <h2 className="text-center text-2xl py-2">Login form</h2>
      <div className="w-full h-full flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col w-[40%] gap-10"
        >
          
          <input
            className="border text-center"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="enter your email "
          />
          <input
            className="border text-center"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="enter your password "
          />
         
          <input className="border text-center" type="submit" value="Login" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
