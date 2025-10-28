import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[100px] bg-white border-b border-b-[#E5E5E5] h-[42px] w-full">
      <div className="flex items-center gap-[8px]">
        <MapPin size={16} className="text-[#B3B3B3]" />
        <p className="text-[#B3B3B3] text-center text-sm leading-[42px]">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>

      {/*  */}
      <div className="flex items-center gap-[20px]">
        <select
          name=""
          id=""
          className="text-[#B3B3B3] text-sm focus:outline-0"
        >
          <option value="eng">Eng</option>
          <option value="fr">Fr</option>
          <option value="du">Du</option>
        </select>

        <select
          name=""
          id=""
          className="text-[#B3B3B3] text-sm focus:outline-0"
        >
          <option value="usd">USD</option>
          <option value="ngr">NGR</option>
          <option value="xof">XOF</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
