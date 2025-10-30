import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const myAccountLinks = [
    { name: "My Account", href: "/" },
    { name: "Order History", href: "/" },
    { name: "Shopping Cart", href: "/" },
    { name: "Wishlist", href: "/" },
  ];
  const help = [
    { name: "Contact", href: "/" },
    { name: "Faqs", href: "/" },
    { name: "Terms & Condition", href: "/" },
    { name: "Privacy Policy", href: "/" },
  ];
  const proxy = [
    { name: "About", href: "/" },
    { name: "Shop", href: "/" },
    { name: "Product", href: "/" },
    { name: "Track Order", href: "/" },
  ];
  const categories = [
    { name: "Fruit & Vegetables", href: "/" },
    { name: "Meat & Fish", href: "/" },
    { name: "Bread & Bakery", href: "/" },
    { name: "Beauty & Health", href: "/" },
  ];

  return (
    <>
      {/* Top Newsletter Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-[30px] lg:px-[100px] py-[30px] lg:py-[40px] bg-[#F7F7F7] gap-6 mt-1">
        <div className="text-center lg:text-left max-w-[448px] space-y-2">
          <p className="font-bold text-[24px]">Subscribe to our Newsletter</p>
          <p className="text-sm text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Email + Button */}
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="flex w-full lg:w-auto">
            <input
              className="w-full lg:w-[350px] h-[46px] lg:h-[52px] border border-[#808080] rounded-l-[46px] focus:outline-none px-3 text-sm"
              placeholder="Your email address"
            />
            <button className="bg-[#00B207] cursor-pointer text-white font-medium rounded-r-[46px] h-[46px] lg:h-[52px] px-6 transition hover:bg-[#029d06]">
              Subscribe
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center mt-4 lg:mt-0 justify-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="group flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-[#00B207] hover:bg-[#00B207] transition cursor-pointer"
              >
                <Icon
                  size={18}
                  className="text-[#00B207] group-hover:text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 px-[30px] lg:px-[100px] py-[50px] bg-[#1A1A1A] gap-10">
        <div className="lg:col-span-4 flex flex-col text-center lg:text-left space-y-5">
          <img
            src={assets.FooterLogo}
            className="w-[150px] mx-auto lg:mx-0 cursor-pointer"
            alt="Logo"
          />
          <p className="text-[#808080] text-sm">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <p className="text-[#FFFFFF] border-b-2 border-[#00B207] pb-1">
              (219) 555-0114
            </p>
            <p className="text-[#808080] text-sm">or</p>
            <p className="text-[#FFFFFF] border-b-2 border-[#00B207] pb-1">
              Proxy@gmail.com
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-8 lg:col-span-8 gap-8">
          {[myAccountLinks, help, proxy, categories].map((section, index) => (
            <div key={index} className="lg:col-span-2">
              <p className="text-white text-[18px] pb-[20px]">
                {["My Account", "Helps", "Proxy", "Categories"][index]}
              </p>
              <div className="flex flex-col text-sm text-[#999999] space-y-[14px] text-cente">
                {section.map((link, index) => (
                  <Link to={link.href} key={index}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="col-span-full border-t border-[#2E2E2E]" />

        {/* Bottom */}
        <div className="col-span-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#808080] text-center">
            Ecobazar eCommerce {new Date().getFullYear()}
          </p>
          <img src={assets.Payments} className="w-[200px]" alt="Payments" />
        </div>
      </div>
    </>
  );
};

export default Footer;
