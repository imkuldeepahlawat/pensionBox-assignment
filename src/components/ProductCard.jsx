import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageNo } from "../redux/productActions";
const ProductCard = ({ card }) => {
  const dispatch = useDispatch();

  const handleOnCardClick=()=>{
    console.log("happen",card.id);
    
    dispatch(setPageNo(card.id))
  }
  return (
    <Link to="/pages" onClick={handleOnCardClick}>
      <div className="w-[250px] h-[370px]  p-4 border rounded-md bg-[#EEEEEE] justify-between">
        <img
          className="w-[200px] h-[200px] rounded-md bg-transparent mix-blend-multiply"
          src={card["image"]}
          alt={card["image"]}
        />
        <div className="flex flex-col ">
          <h1 className="">{card.title}</h1>
          <p>price {card.price}</p>

          <div className="flex ">
            <p>Rating</p>{" "}
            <Rating name="read-only" value={card.rating.rate} readOnly />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
