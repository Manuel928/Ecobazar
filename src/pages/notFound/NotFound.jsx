import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-[30px] lg:px-[100px] justify-center space-y-[32px]">
      <img src={assets.notFound} className="w-[250px] h-[150px]  lg:w-[582px] lg:h-[354px]" alt="" srcset="" />
      <div className="flex flex-col items-center justify-center max-w-[612px] space-y-[20px]">
        <p className="text-[#1A1A1A] text-[32px] font-bold">
          Oops! page not found!
        </p>
        <p className="text-[#808080] text-center">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#00B207] cursor-pointer font-semibold text-white h-[45px] w-full max-w-[472px] rounded-[43px] text-sm"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
