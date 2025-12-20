import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const UserHome = ({ user }) => {
    const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#68ba11] ">
      <div className="text-center px-6">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Welcome{user?.displayName ? `, ${user.displayName}` : ""} 📚
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Discover your next favorite book, order easily.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button 
          onClick={()=>{
            navigate('/allbooks')

          }}
          className="px-6 py-3 bg-white text-[#f75408] font-semibold rounded-lg hover:scale-105 transition">
            Explore Books
          </button>

          <button 
           onClick={()=>{
            navigate('/user-dashboard/myorders')

          }}
          className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-[#f75408] transition">
            My Orders
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UserHome;