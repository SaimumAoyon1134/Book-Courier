import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaShippingFast, FaHeadset, FaStar } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl text-primary-500" />,
      title: "Extensive Collection",
      description:
        "Browse through thousands of books across all genres and categories.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-primary-500" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep within days.",
    },
    {
      icon: <FaHeadset className="text-4xl text-primary-500" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help.",
    },
    {
      icon: <FaStar className="text-4xl text-primary-500" />,
      title: "Quality Assurance",
      description:
        "All books are carefully curated for quality and authenticity.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "10K+", label: "Books Available" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BookCourier
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              Your trusted partner for book delivery services across Bangladesh.
              We connect readers with their favorite books through fast,
              reliable, and affordable delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                Founded in 2020, BookCourier began with a simple mission: to
                make books accessible to everyone across Bangladesh. What
                started as a small local delivery service has grown into a
                nationwide platform connecting readers with their favorite
                books.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                Today, we serve thousands of customers daily, offering an
                extensive collection of books from various genres and
                categories. Our commitment to quality, affordability, and fast
                delivery has made us the preferred choice for book lovers across
                the country.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="badge badge-primary text-white">
                  Fast Delivery
                </span>
                <span className="badge badge-secondary text-white">
                  Quality Books
                </span>
                <span className="badge badge-accent text-white">
                  Nationwide
                </span>
                <span className="badge badge-info text-white">
                  24/7 Support
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Story"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
              Why Choose BookCourier
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We offer the best experience for book lovers with our
              comprehensive features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card card-compact bg-base-100 shadow-xl hover-enhanced"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-body items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="card-title text-xl font-semibold text-neutral-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing books to readers
              everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "Passionate about literature and innovation.",
              },
              {
                name: "Michael Chen",
                role: "Operations Director",
                bio: "Ensures smooth logistics and delivery.",
              },
              {
                name: "Emma Rodriguez",
                role: "Customer Experience Lead",
                bio: "Dedicated to customer satisfaction.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="card bg-white dark:bg-neutral-800 shadow-xl hover-enhanced"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <figure className="px-10 pt-10">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl font-bold text-neutral-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Reading?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of readers who have discovered their next favorite
              book with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-accent bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Browse Books
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
