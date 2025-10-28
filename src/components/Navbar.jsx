import React from "react";
import { assets } from "../assets/assets";
import { Heart, LucideShoppingBag, SearchIcon, User2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between px-[100px] py-[15px] border-b border-b-[#E5E5E5]">
        <img
          src={assets.Logo}
          className="w-[163px] h-[38px] cursor-pointer"
          onClick={() => navigate("/")}
          alt=""
          srcset=""
        />

        {/* Searchbar */}
        <div className="flex items-center border border-[#E5E5E5]">
          <SearchIcon className="text-[#00000066] w-5 h-5 ml-4" />
          <input
            className="bg-transparent w-[400px] h-[45px] placeholder:font-satoshi px-2 focus:outline-none text-sm"
            placeholder="Search"
          />
          <button className="bg-[#00B207] cursor-pointer text-white font-medium h-[45px] w-[98px] border border-[#00B207]">
            Search
          </button>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between px-[100px] bg-white gap-[40px] h-[60px]">
        <ul className="flex items-center list-none text-sm text-[#808080] gap-[32px] justify-center ">
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/"}>Pages</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/"}>Blog</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/"}>About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            <Link to={"/"}>Contact Us</Link>
          </li>
        </ul>
        {/* Wishlist & Cart */}
        <div className="flex items-center gap-[24px]">
          <Heart color="white" />
          <LucideShoppingBag color="white" />
          <User2Icon color="white" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        className="h-[80px]"
        style={{
          backgroundImage: `url(${assets.VegetableHeader})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        
      </div>
    </div>
  );
};

export default Navbar;
