import React, { useState } from "react";
import Layout from "../../conponents/layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const initial = { email: "",answer:'', newPassword: "" };
const forgotepassword = () => {
 
  const navigate = useNavigate();

  const [user, setUser] = useState(initial);
  const handleChange = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
   try {
     const res = await axios.post(
       `http://localhost:8080/api/v1/auth/forgot-password`,
       user
     );
     if (res && res.data.success) {
       toast.success(res.data.message);
       setTimeout(() => {
         navigate("/login");
       }, 1000);
     } else {
       toast.error(res.data.message);
     }
   } catch (error) {
      toast.error("something went wrong");
   }
   setUser(initial);  
  };
  return (
    <Layout title="Login ecomm-2024">
      <h2 className="text-center text-2xl py-2">forgate password </h2>
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
            type="text"
            name="answer"
            value={user.answer}
            onChange={handleChange}
            placeholder="what is your birth date like 10-04-2002 "
            required
          />
          <input
            className="border text-center"
            type="password"
            name="newPassword"
            value={user.newPassword}
            onChange={handleChange}
            placeholder="enter your password "
          />

          <input className="border text-center" type="submit" value="forgotepasword" />
        </form>
      </div>
    </Layout>
  );
};

export default forgotepassword;
