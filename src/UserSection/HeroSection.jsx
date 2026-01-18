import { motion } from "framer-motion";
import { FaArrowRight, FaBook, FaShoppingCart, FaStar } from "react-icons/fa";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("features-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#75B06F_2px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container relative z-10 px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Discover Your Next{" "}
              <span className="text-accent-300">Favorite Book</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-primary-100 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore thousands of books with fast delivery and exceptional
              service. Your literary journey starts here.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => (window.location.href = "/allbooks")}
                className="btn  bg-[#68ba11]  hover:bg-accent-600  text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Books <FaArrowRight />
              </motion.button>

              <motion.button
                onClick={() => (window.location.href = "/aboutus")}
                className="btn hover:bg-[#68ba11]  hover:text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-primary-100">Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-primary-100">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-primary-100">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Book Display */}
              <motion.div
                className="relative w-64 h-80 md:w-80 md:h-96  rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ y: -10, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0  from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="text-center p-6">
                    <FaBook className="text-6xl  mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold  mb-2">
                      Featured Book
                    </h3>
                    <p className="text-primary-100">Bestseller Collection</p>
                    <div className="flex justify-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mx-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-28 bg-accent-500 rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaBook className="text-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-24 bg-secondary-500 rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <FaShoppingCart className=" text-xl" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaStar className="text-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="mb-2 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3  rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
