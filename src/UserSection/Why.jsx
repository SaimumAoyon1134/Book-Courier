import React from "react";
import { FaShippingFast, FaBookOpen, FaHeadset } from "react-icons/fa";

const Why = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-[#74bb29]" />,
      title: "Fast Delivery",
      description: "Get your favorite books delivered quickly and safely to your doorstep.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-[#f75408]" />,
      title: "Wide Selection",
      description: "Thousands of books from all genres and authors in one place.",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#2b6cb0]" />,
      title: "24/7 Support",
      description: "Our support team is always ready to help you with any queries.",
    },
  ];

  return (
    <section className="py-12 px-1 md:px-10 ">
      <div className="mx-auto text-center">
        <h1 className="text-center font-bold text-xl py-3 flex items-center justify-center gap-2">
            <span className="text-[#f75408] font-bold">Why Choose</span> <span className="font-bold text-[#74bb29]">Book Courier?</span>
        </h1>
        <p className="font-light mb-10">
          Discover why Book Courier is the best place to buy books online.
        </p>
      
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;