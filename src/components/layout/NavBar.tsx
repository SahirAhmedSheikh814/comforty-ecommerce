
import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b-2 bg-white shadow-md">
      {/* Left Section: Navigation Links */}
      <ul className="hidden md:flex gap-6 text-xs items-center">
        <Link href="/"> <li className="nav__link cursor-pointer">Home</li></Link>
        <li className="nav__link cursor-pointer">Shop</li>
        <Link href="/allproducts"> <li className="nav__link cursor-pointer">Product</li></Link>
        <Link href="/sproduct"> <li className="nav__link cursor-pointer">Pages</li></Link>
        <Link href="/about"> <li className="nav__link cursor-pointer">About</li></Link>
        <Link href="/contact"> <li className="nav__link cursor-pointer">Contact</li></Link>
      </ul>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="left-0 md:left-auto"> {/* Adjust to open from the left */}
          <SheetTitle className="hidden">Navigation Menu</SheetTitle>
          <SheetDescription className="hidden">Mobile navigation options</SheetDescription>
          <ul className="flex flex-col gap-5">
            <Link href="/"> <li className="nav__link cursor-pointer">Home</li></Link>
            <li className="nav__link cursor-pointer">Shop</li>
            <Link href="/allproducts"> <li className="nav__link cursor-pointer">Product</li></Link>
            <Link href="/sproduct">  <li className="nav__link cursor-pointer">Pages</li></Link>
            <Link href="/about"> <li className="nav__link cursor-pointer">About</li></Link>
            <Link href="/contact"> <li className="nav__link cursor-pointer">Contact</li></Link>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Right Section: Contact */}
      <div className="md:flex text-[13px] items-center gap-6">
        <div className="text-sm text-gray-600 font-medium">
          <span>Contact: </span>
          <a href="tel:08005550111" className="text-black hover:text-[#007580]">
            (808) 555-0111
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
