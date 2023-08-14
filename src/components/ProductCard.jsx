import React from "react";
import Rating from "@mui/material/Rating";

const ProductCard = ({ card }) => {
  return (
    <div className="w-[250px] h-[350px]  p-4 border rounded-md bg-[#EEEEEE]">
      <img
        className="w-[200px] h-[200px] rounded-md bg-transparent mix-blend-multiply"
        src={card["image"]}
        alt={card["image"]}
      />
      <div className="flex flex-col gap-2">
        <h1 className="">{card.title}</h1>
        <p>price {card.price}</p>

        <div className="flex ">
          <p>Rating</p>{" "}
          <Rating name="read-only" value={card.rating.rate} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
