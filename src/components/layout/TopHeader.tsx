import Link from "next/link";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai"; // Tick icon
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Help icon

const TopHeader = () => {
  return (
    <div className="border-[#272343] bg-[#272343] hidden sm:flex items-center justify-between px-6 py-2">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <AiOutlineCheck className="text-[#ffffff]" /> {/* Tick Icon */}
        <span className="font-normal text-[13px] leading-[14px] w-[231px] h-[14px] text-[#FFFFFF]">
          Free shipping on all orders over $50
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Language Dropdown */}
        <select
          className="font-normal text-sm leading-[21px] bg-[#272343] text-[#FAFAFA] border-none outline-none cursor-pointer"
          name="language"
          id="language"
          title="Language"
        >
          <option value="English">Eng</option>
          <option value="French">Fren</option>
        </select>

        {/* FAQs and Need Help */}
        <div className="flex items-center space-x-4 text-[#FAFAFA]">
          {/* FAQs */}
         <Link href="/faq"> <span className="text-sm leading-[21px] cursor-pointer hover:underline">
            FAQs
          </span></Link>

          {/* Need Help */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineQuestionCircle className="text-lg" /> {/* Help Icon */}
            <span className="text-sm leading-[21px]">Need Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
