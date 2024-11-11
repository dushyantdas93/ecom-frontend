import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const menubar = [{ titel: "About",link:"/about" }, { titel: "contact",link:"/contact" }, { titel: "privacy",link:"/" }];
  return (
    <div className="border text-center h-20 flex items-center justify-center text-2xl font-semibold bg-gray-700 text-gray-200 flex-col">
      <h1>All Rights Reserved 2024</h1>
      <ol className="flex gap-3 text-lg capitalize ">
        {menubar.map((item, idx) => {
          return (
            <Link key={idx} to={item.link}>
              <li className="hover:underline">{item.titel}</li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
}

export default Footer