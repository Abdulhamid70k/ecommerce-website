import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filterdProducts, setfilterdProducts] = useState([])

  const getProductsByCategory = async () => {
    try {
      if (category && category !== 'undefined') {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setfilterdProducts(data);
      } else {
        setfilterdProducts(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  }, [category,products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] flex flex-wrap mr-3 mb-3 overflow-x-hidden overflow-y-auto p-10 pt-[5%]">
        {filterdProducts && filterdProducts.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="CARD my-1 mx-1 w-[18%] h-[30vh] p-3 border shadow rounded flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${p.image}) `,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
