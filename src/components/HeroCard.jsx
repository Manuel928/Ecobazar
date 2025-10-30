const HeroCard = ({ heading, text, image }) => {
  return (
    <div className="h-[132px] my-4 lg:my-0 cursor-pointer group hover:border-b-2 hover:border-b-[#00B207] transition duration-100 gap-[12px] flex flex-col lg:flex-row items-center">
      <div className="flex items-center justify-center bg-[#EDF2EE] w-[50px] h-[50px] rounded-full">
        <img className="w-[30px]" src={image} alt="" srcset="" />
      </div>
      <div className="flex flex-col items-center lg:items-start space-y-[3px]">
        <p className="font-medium">{heading}</p>
        <p className="text-sm text-[#999999]">{text}</p>
      </div>
    </div>
  );
};

export default HeroCard;
