import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Header = () => {
  return (
    <div className="w-full  bg-[#EEEEEE] flex justify-between px-24 p-1 text-[12px]">
      <ul className="flex gap-4">
        <li className="font-semibold">Offers</li>
        <li className="font-semibold">Fanbook</li>
        <li className="">
          <PhoneAndroidIcon style={{ fontSize: "13px" }} />
          <span className="font-semibold">Download App</span>
        </li>
        <li className="font-semibold">TriBe Membership</li>
      </ul>
      <ul className="flex gap-4 ">
        <li className="font-semibold">Contact Us</li>
        <li className="font-semibold">Track Order</li>
      </ul>
    </div>
  );
};

export default Header;
