import React from "react";
import { Link } from "react-router-dom";


const Cancel = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-6">
      
     
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center animate__animated animate__fadeInDown animate__faster">
        
        
        <div className="flex justify-center mb-6">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/463/463612.png" 
            alt="Failed"
            className="w-28 h-28 animate-bounce"
          />
        </div>

       
        <h1 className="text-3xl font-bold text-red-600 mb-3">
          Payment Canceled
        </h1>

       
        <p className="text-gray-600 mb-6">
          Your payment was not completed. If this was a mistake, you can try again anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>

          <Link
            to="/myorders"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;