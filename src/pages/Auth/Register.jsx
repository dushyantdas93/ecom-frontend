import React, { useState } from 'react'
import Layout from '../../conponents/layout/Layout'
import { toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const initial = { name: "", email: "", password: "", phone: "", address: "" };
const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(initial)
    const handleChange = function (e) {
        setUser({ ...user, [e.target.name]: e.target.value })
     
    }
    
    const handleSubmit = async function (e) {
        e.preventDefault()
        setUser(initial)
        try {
            const res = await axios.post(
              `http://localhost:8080/api/v1/auth/register`,
              user
            );
            if (res.data.success) {
                toast.success(res.data.message);
              setTimeout(() => {
                  navigate("/login");
              }, 1000);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("something went wrong")
        }
        
    }
    // console.log(process.env.REACT_APP_API);
    return (
      <Layout title="Registe ecomm-2024">
        <h2 className="text-center text-2xl py-2">Register form</h2>
        <div className="w-full h-full flex items-center justify-center ">
          <form onSubmit={handleSubmit} action="" className="flex flex-col w-[40%] gap-10">
            <input
              className="border text-center"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="enter your name "
              required
            />
            <input
              className="border text-center"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="enter your email "
              required
            />
            <input
              className="border text-center"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="enter your password "
              required
            />
            <input
              className="border text-center"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="enter your phone "
              required
            />
            <input
              className="border text-center"
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="enter your address "
              required
            />
            <input className="border text-center" type="submit" />
          </form>
        </div>
      </Layout>
    );
}

export default Register