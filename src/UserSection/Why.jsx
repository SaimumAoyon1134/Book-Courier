import React from "react";
import { FaShippingFast, FaBookOpen, FaHeadset } from "react-icons/fa";

const Why = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-[#74bb29]" />,
      title: "Fast Delivery",
      description:
        "Get your favorite books delivered quickly and safely to your doorstep.",
      animation: "animate-slide",
    },
    {
      icon: <FaBookOpen className="text-4xl text-[#f75408]" />,
      title: "Wide Selection",
      description:
        "Thousands of books from all genres and authors in one place.",
      animation: "animate-pulse-custom",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#2b6cb0]" />,
      title: "24/7 Support",
      description:
        "Our support team is always ready to help you with any queries.",
      animation: "animate-bounce-small",
    },
  ];

  return (
    <div className="py-12 px-3 md:px-15">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-bold py-3 flex items-center justify-center gap-2">
          <span className="text-[#f75408] font-bold">Why Choose</span>
          <span className="text-[#74bb29] font-bold">Book Courier?</span>
        </h1>

        <p className="font-light mb-10  text-sm md:text-base">
          Discover why Book Courier is the best place to buy books online.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md shadow-green-500/40 hover:shadow-lg transition duration-300"
          >
            <div className={`mb-4 mx-auto w-fit ${feature.animation}`}>
              {feature.icon}
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-2 ">
              {feature.title}
            </h3>

            <p className=" text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes slide {
          0% { transform: translateX(0); }
          50% { transform: translateX(50px); }
          100% { transform: translateX(0); }
        }
        .animate-slide { animation: slide 3s ease-in-out infinite; }

        @keyframes pulse-custom {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .animate-pulse-custom { animation: pulse-custom 3s ease-in-out infinite; }

        @keyframes bounce-small {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-small { animation: bounce-small 2.5s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default Why;
