import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi"; 
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="w-full bg-[#f0f2f3] py-4 shadow-md flex items-center justify-between px-6">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Image
          src="/Logo.svg" 
          alt="Logo"
          className="w-32"
          width="32"
          height="32"
          priority
        />
      </div>

    {/* Right Section: Cart */}
<div className="flex items-center justify-center bg-white w-[150px] h-11 rounded-md space-x-2">
  <BiCart className="text-2xl text-[#272343]" /> {/* Cart Icon */}
  <Link href="/cart"><span className="text-lg nav__link font-medium text-[#272343]">Cart</span></Link>
  <div
    className="w-6 h-6 flex items-center justify-center text-white text-xs font-bold rounded-full"
    style={{ backgroundColor: "#007580" }}
  >
    2
  </div>
</div>

    </div>
  );
};

export default MainHeader;
