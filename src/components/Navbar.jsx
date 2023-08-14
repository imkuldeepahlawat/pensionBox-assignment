import React from "react";
import logo from "../assets/logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productActions";
const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);
  return (
    <div className="">
      <div className="flex justify-between my-1">
        <div className="flex gap-6 p-2  md:p-0  md:ml-[250px]">
          <img src={logo} alt="logo" className="h-[40px] w-[150px]" />
          <ul className="flex gap-4 uppercase  items-center">
            <li className="font-semibold hover:text-lg cursor-pointer">Men</li>
            <li className="font-semibold hover:text-lg cursor-pointer">Women</li>
            <li className="font-semibold hover:text-lg cursor-pointer">Mobile Covers</li>
          </ul>
        </div>
        <div className="hidden md:block md:flex mr-[250px] items-center gap-4">
          <div className="flex items-center border rounded p-2 bg-[#EEEEEE] w-[300px]">
            <SearchIcon className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by Product, category or collection"
              className="bg-transparent focus:outline-none w-full"
              value={searchQuery}
              onChange={(e) => {
                dispatch(setSearchQuery(e.target.value));
                
              }}
            />
          </div>
          {/* pipe */}
          <div className="h-[30px] border-r-2  border-black"></div>
          <button className="font-semibold">Login</button>
          <FavoriteBorderIcon />
          <LocalMallIcon />
          <img
            src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
            alt="countryFlag"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>
      </div>
      <hr />
      <div className="uppercase p-2">
        <ul className=" mx-auto flex flex-col md:flex-row justify-between w-[80%]">
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">Made in India</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">Men</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">Women</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">accessories</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">bewkoof air</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">official merch</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">plus size</li>
          <li className="font-lightbold text-[20px] cursor-pointer hover:text-2xl ">teens</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
