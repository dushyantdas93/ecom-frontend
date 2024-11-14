import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()
  const [open , setOpen] = useState(false)
 
  const menubar = [
    { titel: "Home", link: "/" },
    { titel: "category", link: "/category" }
  ];

  const handleLogout = function () {
    setAuth({ ...auth, user: null, token: "" })
    localStorage.removeItem("auth")
    navigate("/login")
  }
  // console.log(auth.user.role)
  return (
    <div className="flex justify-between bg-gray-700 text-white px-6 shadow-lg py-6">
      <h1 className="text-2xl capitalize flex items-center gap-2 font-bold ">
        <HiMiniShoppingCart /> ecommerce - 2024{" "}
      </h1>

      <ol className="flex gap-10 text-xl capitalize ">
        {menubar.map((item, idx) => {
          return (
            <Link key={idx} to={item.link}>
              <li className="hover:underline">{item.titel}</li>
            </Link>
          );
        })}

        {auth.user == null ? (
          <>
            <Link to="/login">
              <li className="hover:underline">login</li>
            </Link>
            <Link to="/register">
              <li className="hover:underline">register</li>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => setOpen(!open)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {auth.user.name}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {open && (
              <div
                id="dropdown"
                className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-20 top-20"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to={`/dashboard${
                        auth?.user.role === 1 ? "/admin" : " "
                      }`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <navigate
                      to="/login"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </navigate>
                  </li>
                </ul>
              </div>
            )}
          </>
          // <li className="hover:underline">{auth?.user.name}</li>
        )}

        <Link to="/cart">
          <li className="hover:underline">cart (0)</li>
        </Link>
      </ol>
    </div>
  );
}

export default Header