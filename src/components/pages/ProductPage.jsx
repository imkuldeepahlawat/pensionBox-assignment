import axios from "axios";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const pageNo = useSelector((state) => state.pageNo);
  const [prod, setProd] = useState({});
  const notprice = Math.floor(Math.random() * 1000);

  useEffect(() => {
    const onLoad = async () => {
      console.log(pageNo);
      if (pageNo !== null) {
        try {
          const respo = await axios.get(
            `https://fakestoreapi.com/products/${pageNo}`
          );
          setProd(respo.data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    };
    onLoad();
  }, [pageNo]); // Add pageNo to the dependency array

  return (
    <>
      {Object.keys(prod).length === 0 ? (
        <div className="m-4">Select Any Item To view Page... <Link to="/" className="bg-[#9ca3af] p-4 text-lg font-bold rounded-lg m-4">Home</Link></div>
      ) : (
        <div className="w-full h-screen flex flex-col gap-4 md:flex-row md:justify-between p-4 overflow-hidden">
          <div className="md:w-[50%]">
            <h2 className="text-2xl md:h-[10%] font-semibold  md:text-4xl md:font-bold">
              {prod.title}
            </h2>

            <img
              src={prod.image}
              alt={prod.title}
              className=" m-4  md:w-[80%] md:h-[90%] mix-blend-multiply"
            />
          </div>
          <div className="p-2 flex md:w-[50%] flex-col justify-center">
            <h3 className="text-2xl font-semibold ">{prod.title}</h3>
            <p className="text-xl">{prod.description}</p>
            <Rating
              name="read-only"
              size="large"
              className=""
              value={prod.rating.rate}
              readOnly
            />
            <div className="">
              <div className="">
                <p className="text-lg font-semibold">
                  Price{" "}
                  <span className="line-through">{prod.price + notprice}</span>{" "}
                  <span>{prod.price}</span>{" "}
                </p>
              </div>
              <Link to="/">
                <button className="bg-[#9ca3af] px-4 py-2 rounded-lg font-semibold text-3xl">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
