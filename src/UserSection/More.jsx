import React from "react";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router";

const More= () => {
  const navigate = useNavigate();

  return (
    <section className="relative  h-[300px] flex items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-xl  font-bold mb-4 animate-pulse text-[#f75408] ">
          BookCourier

        </h1>
        <p className="text-xl font-extralight mb-6">
          Your favorite books, delivered fast and safe!
        </p>
        <button 
        onClick={()=>{
            navigate('/allbooks');
        }}
        className="px-6 py-3 rounded-lg font-semibold  bg-[#68ba11] hover:scale-105 transition-transform">
          Browse Books
        </button>
      </div>
      {/* Animated book icons floating */}
      <FaBook className="absolute top-10 left-5 text-6xl animate-spin-slow opacity-40" />
      <FaBook className="absolute bottom-20 right-10 text-5xl animate-spin-slow opacity-40" />
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        
      `}</style>
    </section>
  );
};

export default More;