import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Matches your header icon set
import { Link, useNavigate } from "react-router";
import { authContext } from "../../Context/Context";

const LoginPage = () => {
  const { loginUser, setUser, handleGoogleSignIn } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password).then((res) => {
      setUser(res.user);
      alert("User Logged in successfully");
      navigate("/");
    });
  };

  const signUpUsingGoogle = () => {
    handleGoogleSignIn()
      .then((res) => {
        setUser(res.user);
        navigate("/");
        console.log(res);
      })
      .catch((err) => err.message);
  };

  return (
    <div className="h-screen flex justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[400px]">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email and password to login
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@example.com"
              className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none text-sm border border-transparent focus:border-gray-200 transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Password
              </label>
            </div>
            {/* Password Input Container */}
            <div className="relative">
              <input
                required
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-[#f5f5f5] p-4 pr-12 rounded-xl outline-none text-sm border border-transparent focus:border-gray-200 transition-all"
              />
              <Link
                to="/forgot"
                className="text-xs font-medium text-gray-400 hover:text-black ml-1 "
              >
                Forgot password?
              </Link>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-1/2 text-gray-400 cursor-pointer hover:text-black transition-colors"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-black text-white cursor-pointer py-4 rounded-xl font-bold text-sm mt-2 hover:bg-neutral-800 transition-all active:scale-[0.98]">
            Login
          </button>
        </form>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            OR
          </span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button
          onClick={signUpUsingGoogle}
          className="w-full flex items-center justify-center gap-3 py-3.5 cursor-pointer border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all mb-8"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-black underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
