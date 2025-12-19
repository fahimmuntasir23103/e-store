import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[400px]">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-black">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">Join us to manage your orders and profile</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">First Name</label>
              <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
              <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
            <input type="email" className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none text-sm" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Min. 8 characters" 
                className="w-full bg-[#f5f5f5] p-4 pr-12 rounded-xl outline-none text-sm border border-transparent focus:border-gray-200 transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm mt-2 hover:bg-neutral-800 transition-all active:scale-[0.98]">
            Create Account
          </button>
        </form>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">OR</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all mb-8">
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-500">
          Already a member? <Link to="/login" className="font-bold text-black underline underline-offset-4">Login</Link>
        </p>
      </div>
    </div>
  );
}