import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Header = () => {
  return (
    <div className="w-full  bg-[#EEEEEE] flex justify-between px-24 p-1 text-[12px]">
      <ul className="flex flex-col md:flex-row gap-4">
        <li className="font-semibold cursor-pointer">Offers</li>
        <li className="font-semibold cursor-pointer">Fanbook</li>
        <li className="cursor-pointer">
          <PhoneAndroidIcon style={{ fontSize: "13px" }} />
          <span className="font-semibold">Download App</span>
        </li>
        <li className="font-semibold cursor-pointer">TriBe Membership</li>
      </ul>
      <ul className="flex gap-4 ">
        <li className="font-semibold cursor-pointer">Contact Us</li>
        <li className="font-semibold cursor-pointer">Track Order</li>
      </ul>
    </div>
  );
};

export default Header;
