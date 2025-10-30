import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Firebase imports
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("An error occurred while creating the account.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-xl border border-[#E5E5E5] rounded-[8px] p-6 space-y-4 w-[520px] h-[432px]">
      <p className="font-bold text-[24px]">Create Account</p>

      <div className="w-full max-w-[472px] space-y-[12px]">
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Email"
          className="w-full h-[49px] rounded-[6px] px-3 text-sm border border-[#E5E5E5] focus:outline-none"
        />
        <div className="relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-[49px] rounded-[6px] px-3 text-sm border border-[#E5E5E5] focus:outline-none"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        <div className="relative">
          <input
            style={{
              borderColor:
                password && confirmPassword && password !== confirmPassword
                  ? "#950606"
                  : "#E5E5E5",
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full h-[49px] rounded-[6px] px-3 text-sm border border-[#E5E5E5] focus:outline-none"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {!showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
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
        Accept all Terms & Conditions
      </label>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleCreateAccount}
        className="bg-[#00B207] cursor-pointer font-semibold text-white h-[45px] w-full max-w-[472px] rounded-[43px] text-sm"
      >
        Create Account
      </button>

      <div className="flex items-center gap-1 text-sm">
        <p>Already have account</p>
        <Link
          className="font-semibold hover:text-[#00B207] transition duration-200"
          to={"login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
