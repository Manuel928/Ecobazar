import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Firebase imports
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Email or Password Incorrect");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-xl border border-[#E5E5E5] rounded-[8px] p-6 space-y-4 w-[520px] h-[432px]">
      <p className="font-bold text-[24px]">Sign In</p>

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
            type="password"
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
      </div>

      <label
        htmlFor="terms"
        className="flex gap-2 self-start text-sm text-gray-700 cursor-pointer"
      >
        <input
          type="checkbox"
          name="remember-me"
          id="remember-me"
          className="w-4 h-4 accent-[#00B207]"
        />
        Remember me
      </label>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleSignIn}
        className="bg-[#00B207] cursor-pointer font-semibold text-white h-[45px] w-full max-w-[472px] rounded-[43px] text-sm"
      >
        Login
      </button>

      <div className="flex items-center gap-1 text-sm">
        <p>Don't have an account</p>
        <Link
          className="font-semibold hover:text-[#00B207] transition duration-200"
          to={"/"}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
