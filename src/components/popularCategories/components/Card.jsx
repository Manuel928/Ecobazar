import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, category, slug }) => {
  return (
    <div className="border rounded-[5px] border-light-gray cursor-pointer group hover:border-primary-green transition-colors duration-200 hover:shadow-2xl py-[16px] px-[4px] gap-[16px] justify-center items-center flex flex-col">
      <Link to={`/category/${slug}`}>
        <img src={image} className="w-[190px]" alt="" srcset="" />
        <p className="text-primary-black text-center font-semibold text-[16px] group-hover:text-primary-green">
          {category}
        </p>
      </Link>
    </div>
  );
};

export default Card;
