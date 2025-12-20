import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import instance from "../Axios/instance";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      instance
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log("Payment Updated:", res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-4">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center"
      >
       
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <CheckCircleIcon style={{ fontSize: "80px" }} className="text-green-500" />
        </motion.div>

  
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mt-4 text-green-700"
        >
          Payment Successful!
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-3 text-gray-600"
        >
          Thank you for your purchase.  
          <br />
          Your payment has been processed successfully.
        </motion.p>

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-3 text-sm text-gray-500"
        >
      
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/user-dashboard/myorders"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            View My Orders
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Success;