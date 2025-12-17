import React, { useEffect, useState, useContext } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import {
  FaBook,
  FaShoppingCart,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={`rounded-xl p-6 shadow-lg text-white ${color}`}
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>
      <div className="text-4xl opacity-90">{icon}</div>
    </div>
  </motion.div>
);

const LibrarianHome = () => {
  const { user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    instance.get("/books").then(res => setBooks(res.data));
    instance.get("/orders").then(res => setOrders(res.data));
  }, []);

  const pendingOrders = orders.filter(o => o.orderStatus === "pending").length;
  const shippedOrders = orders.filter(o => o.orderStatus === "shipped").length;
  const deliveredOrders = orders.filter(o => o.orderStatus === "delivered").length;

  return (
    <div className="p-6 min-h-screen">
 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-extrabold">
          Welcome, {user?.displayName || "Librarian"} 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your books & orders efficiently
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <StatCard
          title="Total Books"
          value={books.length}
          icon={<FaBook />}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />

        <StatCard
          title="Total Orders"
          value={orders.length}
          icon={<FaShoppingCart />}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />

        <StatCard
          title="Pending Orders"
          value={pendingOrders}
          icon={<FaTruck />}
          color="bg-gradient-to-r from-yellow-500 to-yellow-600"
        />

        <StatCard
          title="Delivered Orders"
          value={deliveredOrders}
          icon={<FaCheckCircle />}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
      </div>
       <div className="w-full mt-10 bg-[#f3f4f6] rounded-xl p-6 shadow-inner flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-700">Current Session</h2>
          <p className="text-gray-500 mt-1">
            All your books and orders are synced in real-time.
          </p>
        </div>
      
      </div>

   
     
    </div>
  );
};

export default LibrarianHome;