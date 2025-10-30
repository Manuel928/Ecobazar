import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Apple, ArrowRight, XIcon } from "lucide-react";
import { ShowCategoriesContext } from "../../context/showCategories/ShowCategories";
import HeroCard from "../HeroCard";
import { Link } from "react-router-dom";

const Hero = () => {
  const { showCategories, setShowCategories } = useContext(
    ShowCategoriesContext
  );

  // Hero Cards
  const heroCardDetails = [
    {
      image:
        "https://res.cloudinary.com/dbkpmabfq/image/upload/v1761837485/delivery-truck_1_jmqbfa.svg",
      heading: "Free Shipping",
      text: "Free shipping with discount",
    },
    {
      image:
        "https://res.cloudinary.com/dbkpmabfq/image/upload/v1761837486/headphones_1_mligrl.svg",
      heading: "Great Support 24/7",
      text: "Instant access to Contact",
    },
    {
      image:
        "https://res.cloudinary.com/dbkpmabfq/image/upload/v1761837486/shopping-bag_qyizgx.svg",
      heading: "100% Secure Payment",
      text: "We ensure your money is safe",
    },
    {
      image:
        "https://res.cloudinary.com/dbkpmabfq/image/upload/v1761837486/package_isz4yx.svg",
      heading: "Money-Back Guarantee",
      text: "30 days money-back",
    },
  ];

  return (
    <>
      <div className="flex flex-col pb-[24px] lg:flex-row items-center gap-[24px]">
        {/* Categories */}
        {/* {showCategories && (
          <div className="hidden lg:flex flex-col justify-between ml-[30px] w-[30%] h-[560px] bg-white border border-[#E5E5E5]">
            {productCategories?.map((category, index) => (
              <Link
                to={`/category/${category.title}`}
                key={index}
                className="flex items-center w-full px-4 transition duration-200 group gap-[12px] h-[46px] hover:bg-[#00B207]"
              >
                <img src={category.image} className="" alt="" srcset="" />
                <p className="  group-hover:text-white cursor-pointer">
                  {category.title}
                </p>
              </Link>
            ))}
            <div className="border-t group hover:bg-[#00B207] transition duration-200 h-[46px] gap-[12px] px-4 flex items-center border-[#E5E5E5]">
              <img
                src="https://res.cloudinary.com/dbkpmabfq/image/upload/v1761813324/plusSolid_xbkkem.png"
                alt=""
                srcset=""
              />
              <p className=" group-hover:text-white cursor-pointer">
                View all category
              </p>
            </div>
          </div>
        )} */}
        <div
          className="lg:w-[70%] lg:h-[600px] h-[450px] rounded-[18px] lg:rounded-none flex items-center"
          style={{
            backgroundImage: `url(${assets.BannerBig})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/*  */}
          <div className="max-w-[596px] flex flex-col items-start space-y-[10px] lg:space-y-[20px] pl-[48px]">
            <p className="text-white font-[600] leading-[55px] lg:tracking-wider text-[28px] lg:text-[47px]">
              Fresh & Healthy Organic Food
            </p>
            <div className="flex items-center gap-[12px] text-white">
              <div className="border h-[65px] text-[#84D187]"></div>
              <div className="text-[14px] flex flex-col lg:text-[18px] tracking-wider leading-[24px] space-y-[8px] font-normal text-white">
                <div className="flex items-center gap-[8px]">
                  Sale up to <br />{" "}
                  <span className="bg-[#FF8A00] flex items-center justify-center w-[108px] h-[38px] rounded-[5px] text-white">
                    30% OFF
                  </span>
                </div>
                <p className="text-sm text-[#E5E5E5]">
                  Free shipping on all your order.
                </p>
              </div>
            </div>
            <button className="bg-white flex justify-center items-center gap-1 mt-[12px] cursor-pointer font-normal text-[#00B207] h-[51px] w-[191px] rounded-[43px] text-sm">
              Shop now
              <ArrowRight color="#00B207" />
            </button>
          </div>
        </div>

        {/* Boxes */}
        <div className="hidden md:flex flex-col gap-[24px]">
          <div
            style={{
              backgroundImage: `url(${assets.FruitBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[423px] h-[288px]"
          ></div>
          <div
            style={{
              backgroundImage: `url(${assets.FlowerBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[423px] h-[288px]"
          ></div>
        </div>
      </div>

      <div className="bg-white px-[40px] shadow-xl rounded-[8px] grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        {heroCardDetails.map((card, index) => (
          <HeroCard
            key={index}
            heading={card.heading}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>
      <div className="border border-[#E5E5E5]"></div>

      {/* Mobile Category */}
      {showCategories && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="bg-black opacity-50 w-full h-full"
            onClick={() => setShowCategories(false)}
          ></div>
          <div className="absolute top-0 left-0 bg-white w-full h-screen p-4">
            <XIcon
              onClick={() => setShowCategories(false)}
              className="self-end cursor-pointer hover:bg-[#00B207] p-2 transition duration-200"
              size={45}
            />
            <div className="flex flex-col py-12 px-4 justify-between space-y-[12px]">
              {productCategories?.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center w-full px-4 transition duration-200 group gap-[12px] h-[46px] hover:bg-[#00B207]"
                >
                  <img src={category.image} className="" alt="" srcset="" />
                  <p className="  group-hover:text-white cursor-pointer">
                    {category.title}
                  </p>
                </div>
              ))}
              <div className="border group hover:bg-[#00B207] transition duration-200 h-[46px] gap-[12px] px-4 flex items-center border-[#E5E5E5]">
                <img
                  src="https://res.cloudinary.com/dbkpmabfq/image/upload/v1761813324/plusSolid_xbkkem.png"
                  alt=""
                  srcset=""
                />
                <p className=" group-hover:text-white cursor-pointer">
                  View all category
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
