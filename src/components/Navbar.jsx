import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  LucideShoppingBag,
  MenuIcon,
  PhoneCallIcon,
  SearchIcon,
  User2Icon,
  XIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ShowCategoriesContext } from "../context/showCategories/ShowCategories";

// Firebase imports
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const { showCategories, setShowCategories } = useContext(
    ShowCategoriesContext
  );

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between px-[30px] lg:px-[100px] py-[15px] border-b border-b-[#E5E5E5]">
        <img
          src={assets.Logo}
          className="w-[100px] h-[24px] lg:w-[163px] lg:h-[38px] cursor-pointer"
          onClick={() => navigate("/")}
          alt=""
          srcset=""
        />

        {/* Searchbar */}
        <div className="hidden lg:flex items-center border border-[#E5E5E5]">
          <SearchIcon className="text-[#00000066] w-5 h-5 ml-4" />
          <input
            className="bg-transparent w-[400px] h-[45px] placeholder:font-satoshi px-2 focus:outline-none text-sm"
            placeholder="Search"
          />
          <button className="bg-[#00B207] cursor-pointer text-white font-medium h-[45px] w-[98px] border border-[#00B207]">
            Search
          </button>
        </div>

        <div className="flex items-center gap-[12px]">
          <PhoneCallIcon className="text-[#1A1A1A]" size={23} />
          <div className="flex flex-col space-y-[2px]">
            <p className="text-sm text-[#999999]">Customer Services</p>
            <p className="font-medium">(219) 555-0114</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between px-[30px] lg:px-[100px] bg-[#1A1A1A] h-[60px]">
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center">
            {/* {showCategories ? (
              <XIcon
                onClick={() => setShowCategories(false)}
                className="text-white cursor-pointer h-[60px] px-[6px] hover:bg-[#00B207] transition duration-200"
                size={40}
              />
            ) : (
              <MenuIcon
                onClick={() => setShowCategories(true)}
                className="cursor-pointer h-[60px] px-[6px] text-white hover:bg-[#00B207] transition duration-200"
                size={40}
              />
            )} */}

            {/* Accordion
            <div
              className="flex items-center text-white bg-[#333333] w-fit h-[60px] px-1.5 gap-1 cursor-pointer justify-between"
              onClick={() => setShowCategories(!showCategories)}
            >
              <p className="text-sm">All Categories</p>
              {showCategories ? <ChevronUp /> : <ChevronDown />}
            </div> */}
          </div>
          <ul className="hidden lg:flex items-center list-none text-sm text-[#808080] gap-[32px] justify-center ">
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/"}>Pages</Link>
            </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/"}>Blog</Link>
            </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/"}>About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-white duration-200">
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Wishlist & Cart */}
        <div className="flex items-center gap-[24px]">
          <Heart color="white" className="cursor-pointer" size={20} />
          <LucideShoppingBag
            color="white"
            className="cursor-pointer"
            size={20}
          />
          {auth.currentUser ? (
            // <img
            //   src={auth?.currentUser?.photoURL}
            //   alt="User"
            //   className="w-8 h-8 rounded-full object-cover cursor-pointer"
            // />
            <div className="w-5 h-5 p-4 cursor-pointer flex items-center justify-center bg-white rounded-full">
              <p className="text-[#00B207] font-bold">
                {auth?.currentUser?.email.charAt(0).toUpperCase()}
              </p>
            </div>
          ) : (
            <User2Icon color="white" className="cursor-pointer" size={20} />
          )}
        </div>
      </div>

      {/* Breadcrumb */}
      {/* <div
        className="h-[80px]"
        style={{
          backgroundImage: `url(${assets.VegetableHeader})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
    </div>
  );
};

export default Navbar;
