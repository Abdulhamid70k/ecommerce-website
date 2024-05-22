import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  const distinctCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  const {search, pathname} = useLocation()
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">

      
      <a
        className="py-2 px-5 border border-blue-200 rounded text-blue-300 "
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>

      <div className=" w-[80%]">
        {distinctCategories.map((category, index) => (
          <Link
            key={index}
            to={`/?category=${category}`}
            className=" flex items-center mb-3"
          >
            <span
              style={{ backgroundColor: color() }}
              className="bg-blue-100 rounded-full mr-2 w-[15px] h-[15px]"
            ></span>{" "}
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
