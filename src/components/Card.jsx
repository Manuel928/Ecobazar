import { Link } from "react-router-dom";

const Card = ({ width, height, borderRadius, heading, btnText }) => {
  const inputs = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" },
  ];

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      }}
      className="flex flex-col items-center justify-center bg-white shadow-md p-6 space-y-4"
    >
      <p className="font-bold text-[24px]">{heading}</p>

      <div className="w-full max-w-[472px] space-y-[12px]">
        {inputs.map((input, index) => (
          <input
            required
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            className="w-full h-[49px] rounded-[6px] px-3 text-sm border border-[#E5E5E5] focus:outline-none"
          />
        ))}
      </div>

      <label
        htmlFor="terms"
        className="flex gap-2 self-start text-sm text-gray-700 cursor-pointer"
      >
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="w-4 h-4 accent-[#00B207]"
        />
        {heading === "Create Account"
          ? "Accept all Terms & Conditions"
          : "Remember me"}
      </label>

      <button className="bg-[#00B207] cursor-pointer font-semibold text-white h-[45px] w-full max-w-[472px] rounded-[43px] text-sm">
        {btnText}
      </button>

      <div className="flex items-center gap-1 text-sm">
        <p>
          {heading === "Create Account"
            ? "Already have account"
            : "Don't have an Account"}
        </p>
        <Link
          className="font-semibold hover:text-[#00B207] transition duration-200"
          to={heading === "Create Account" ? "login" : "/"}
        >
          {heading === "Create Account" ? "Login" : "Register"}
        </Link>
      </div>
    </div>
  );
};

export default Card;
