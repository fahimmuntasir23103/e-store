import React, { useState } from "react";
import { FiMapPin, FiTruck, FiCreditCard, FiPlus, FiEdit2, FiX } from "react-icons/fi";

const Checkout = () => {
  const [step, setStep] = useState(1);

  // --- Step Content Mapping (Replaces the switch) ---
  const StepContent = {
    1: <AddressStep />,
    2: <ShippingStep />,
    3: <PaymentStep />,
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-[1120px] mx-auto px-4 py-10">
        
        {/* --- 1. Stepper Header --- */}
        <div className="flex justify-between items-center max-w-[800px] mx-auto mb-16 relative">
          <StepHeader active={step >= 1} icon={<FiMapPin />} label="Address" num="1" />
          <div className={`flex-1 h-[2px] mx-4 ${step > 1 ? "bg-black" : "bg-gray-100"}`} />
          <StepHeader active={step >= 2} icon={<FiTruck />} label="Shipping" num="2" />
          <div className={`flex-1 h-[2px] mx-4 ${step > 2 ? "bg-black" : "bg-gray-100"}`} />
          <StepHeader active={step >= 3} icon={<FiCreditCard />} label="Payment" num="3" />
        </div>

        {/* --- 2. Dynamic Form Area --- */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {StepContent[step]}
        </div>

        {/* --- 3. Persistent Navigation Buttons --- */}
        <div className="max-w-[600px] ml-auto mt-12 flex gap-4">
          <button 
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className="flex-1 py-4 border border-black rounded-xl font-bold text-sm transition-all active:scale-95"
          >
            Back
          </button>
          <button 
            onClick={() => setStep(prev => Math.min(prev + 1, 3))}
            className="flex-1 py-4 bg-black text-white rounded-xl font-bold text-sm transition-all active:scale-95"
          >
            {step === 3 ? "Pay" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Step Header ---
const StepHeader = ({ active, icon, label, num }) => (
  <div className="flex items-center gap-3">
    <div className={active ? "text-black" : "text-gray-300"}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Step {num}</span>
      <span className={`text-sm font-bold ${active ? "text-black" : "text-gray-300"}`}>{label}</span>
    </div>
  </div>
);

// --- Content for Step 1 ---
const AddressStep = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold">Select Address</h2>
    <div className="p-6 bg-[#f9f9f9] border-2 border-black rounded-2xl relative">
      <div className="flex items-center gap-3 mb-2">
        <input type="radio" checked readOnly className="accent-black w-4 h-4" />
        <span className="font-bold">2118 Thornridge</span>
        <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">Home</span>
      </div>
      <p className="text-sm text-gray-500 ml-7">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4 text-gray-400">
        <FiEdit2 className="cursor-pointer hover:text-black" />
        <FiX className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
    <div className="border-t border-dashed border-gray-200 py-8 flex flex-col items-center mt-10">
      <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-black">
        <div className="p-2 border border-gray-200 rounded-full"><FiPlus /></div>
        <span className="text-xs font-bold uppercase tracking-widest">Add New Address</span>
      </button>
    </div>
  </div>
);

// --- Content for Step 2 ---
const ShippingStep = () => (
  <div className="space-y-8">
    <h2 className="text-xl font-bold">Shipment Method</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-6 border-2 border-black rounded-2xl">
        <div className="flex items-center gap-4">
          <input type="radio" checked readOnly className="accent-black w-5 h-5" />
          <span className="font-bold">Free</span>
          <span className="text-gray-400">Regular shipment</span>
        </div>
        <span className="text-sm font-bold">17 Oct, 2023</span>
      </div>
      <div className="flex justify-between items-center p-6 border border-gray-100 rounded-2xl text-gray-300">
        <div className="flex items-center gap-4">
          <input type="radio" disabled className="w-5 h-5" />
          <span className="font-bold">$8.50</span>
          <span>Get your delivery as soon as possible</span>
        </div>
        <span className="text-sm font-bold">1 Oct, 2023</span>
      </div>
    </div>
  </div>
);

// --- Content for Step 3 ---
const PaymentStep = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div className="bg-[#f9f9f9] p-8 rounded-3xl">
      <h3 className="font-bold mb-6">Summary</h3>
      <div className="flex justify-between text-lg font-black pt-4 border-t border-gray-200">
        <span>Total</span>
        <span>$2426</span>
      </div>
    </div>
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Payment</h2>
      <div className="w-full h-48 bg-black rounded-2xl p-8 text-white flex flex-col justify-between">
        <div className="text-right text-xs uppercase tracking-widest">Cardholder</div>
        <div className="text-xl tracking-[0.2em] font-mono">4085 9536 8475 9530</div>
        <div className="flex justify-between items-end">
          <div className="bg-yellow-500 w-10 h-7 rounded opacity-50" />
          <div className="flex gap-2"><div className="w-6 h-6 rounded-full bg-red-500 opacity-80" /><div className="w-6 h-6 rounded-full bg-orange-400 opacity-80 -ml-4" /></div>
        </div>
      </div>
      <div className="space-y-4">
        <input className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none" placeholder="Cardholder Name" />
        <input className="w-full bg-[#f5f5f5] p-4 rounded-xl outline-none" placeholder="Card Number" />
      </div>
    </div>
  </div>
);

export default Checkout;