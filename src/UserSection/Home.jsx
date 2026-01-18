import React from "react";
import ContinuousSwiper from "../Shared/Swiper";
import Latest from "./Latest";
import Coverage from "./Coverage";
import Why from "./Why";
import More from "./More";
import TrustSection from "./TrustSection";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContinuousSwiper />
      <Latest />
      <Coverage />

      <Why />

      <TrustSection />
      <More />

      {/* Special Offers Section */}
      <section className="py-4 px-3 md:px-15">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Exclusive discounts and deals just for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((offer, index) => (
              <motion.div
                key={index}
                className="card shadow-md shadow-green-500/40 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover-enhanced"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold mb-4">
                  {60 - index * 10}%
                </div>
                <h3 className="text-2xl font-bold mb-2">Seasonal Sale</h3>
                <p className="mb-4 text-accent-100">
                  Get massive discounts on selected books.
                </p>
                <div className="badge badge-outline ">Limited Time</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-10 px-3 md:px-15">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mx-auto">
              Connect with fellow book lovers and share your passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 ">Book Clubs & Events</h3>
              <p className=" mb-6">
                Participate in our monthly book clubs, author meetups, and
                literary events. Connect with fellow readers and discover new
                perspectives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Monthly book discussions</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Author meet and greets</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Literary workshops</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Reading challenges</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://www.middleweb.com/wp-content/uploads/2022/12/Kruger-book-club-720-copy-716x340.jpg"
                  alt="Book Club"
                  className=" object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8">
                <img
                  src="https://static2.boernestar.com/data/articles/xga-16x9-calendar-of-events-1712781630.webp"
                  alt="Events"
                  className=" object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden -mt-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ry1qiCTuUwG_IGoVQLOqSHL9yCfWsHoF6A&s"
                  alt="Workshops"
                  className=" object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="data:image/png;base64,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"
                  alt="Community"
                  className=" object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
