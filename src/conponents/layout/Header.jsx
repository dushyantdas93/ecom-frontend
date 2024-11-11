import React from 'react'
import { Link } from 'react-router-dom';
import { HiMiniShoppingCart } from "react-icons/hi2";

const Header = () => {

  const menubar = [
    { titel: "Home", link: "/" },
    { titel: "category", link: "/category" },
    { titel: "login", link: "/login" },
    { titel: "register", link: "/register" },
  ];
  return (
    <div className="flex justify-between bg-gray-700 text-white px-6 shadow-lg py-6">
      <h1 className="text-2xl capitalize flex items-center gap-2 font-bold "><HiMiniShoppingCart/> ecommerce - 2024 </h1>

      <ol className="flex gap-10 text-xl capitalize ">
        {menubar.map((item, idx) => {
          return (
            <Link key={idx} to={item.link}>
              <li className="hover:underline">{item.titel}</li>
            </Link>
          );
        })}

        <Link to="/cart">
          <li className="hover:underline">cart (0)</li>
        </Link>
      </ol>
    </div>
  );
}

export default Header