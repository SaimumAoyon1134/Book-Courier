import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  CalendarCheck,
  Users,
  Star,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Service Discovery",
    desc: "Browse and search for a wide range of home and outdoor services.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Booking Management",
    desc: "Book services easily and track all your bookings in one place.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Provider Dashboard",
    desc: "Service providers can add, update, and manage their services.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Reviews & Ratings",
    desc: "Users can leave reviews to help others make informed decisions.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Design",
    desc: "Fully responsive and mobile-friendly interface.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure Authentication",
    desc: "Secure sign up, login, and account management.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Updates",
    desc: "Live updates on service availability and booking status.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen  px-3 md:px-15 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className=" text-lg max-w-3xl mx-auto">
          We connect users with trusted service providers through a fast,
          secure, and easy-to-use booking platform.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto  rounded-2xl shadow p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className=" leading-relaxed">
          Our mission is to simplify everyday life by making service discovery,
          booking, and management seamless for users and service providers.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="rounded-2xl shadow-md shadow-green-500/40 p-6"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <p className=" max-w-2xl mx-auto">
          We focus on trust, convenience, and technology to deliver the best
          service experience for everyone.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
