import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [productList, setProductList] = useState([{}]);
  useEffect(() => {
    const onLoad = async () => {
      try {
        const respo = await axios.get(`https://fakestoreapi.com/products`);
        console.log(respo.data);
        setProductList(respo.data);
      } catch (error) {
        console.log(error);
      }
    };
    onLoad();
  }, []);
  return (
    <div className="flex">
      <div className="w-[15%]">
        <h4>Filters</h4>
      </div>
      <div className="w-[85%] flex flex-wrap gap-2">
        {productList.map((item) => {
          return <ProductCard key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
};

export default Product;
