import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [products, setproducts] = useState(null);

  const { id } = useParams();
  const getSigleProducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSigleProducts();
  }, []);

  return products ? (
    <div className="w-[70%] flex items-center justify-center  h-full m-auto p-[10%]">
      <img
        className="h-[80%] w-[40%] mr-[10%] object-contain"
        src={products.image}
        alt=""
      />
      <div className="content w-[80%]">
        <h1 className="text-5xl">
          {products.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{products.category}</h3>
        <h2 className="text-red-400">$ {products.price}</h2>
        <p className="mb-[5%]">
         {products.description}
        </p>
        <Link className="py-2 px-5 border mr-5 border-blue-200 rounded text-blue-300 ">
          Edit
        </Link>
        <Link className="py-2 px-5 border border-red-200 rounded text-red-300 ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
