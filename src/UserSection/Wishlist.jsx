import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user?.email) {
      instance
        .get(`/wishlist?email=${user.email}`)
        .then((res) => setWishlist(res.data));
    }
  }, [user]);

  const removeItem = (id) => {
    instance.delete(`/wishlist/${id}`).then((res) => {

      if(res.data.deletedCount =='1'){
        toast.success("Removed Successfilly.")
        setWishlist((prev) => prev.filter((item) => item._id !== id));
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Page Title */}
      <h2 className="text-xl font-extrabold mb-10 text-center">
        ❤️ My Wishlist
      </h2>

      {/* Empty State */}
      {wishlist.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <p className="text-6xl mb-4">🤍</p>
          <p className="text-lg font-medium">
            Your wishlist is empty
          </p>
          <p className="text-sm">
            Add books you love and find them here
          </p>
        </div>
      )}

      {/* Wishlist Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.bookName}
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Price Badge */}
              <span className="absolute top-3 right-3 bg-[#f75408] text-white text-sm px-3 py-1 rounded-full font-semibold shadow">
                ৳ {item.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg line-clamp-2">
                {item.bookName}
              </h3>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item._id)}
                className="mt-3  mx-auto flex items-center gap-2 text-sm text-red-500 hover:text-white hover:bg-red-500 px-3 py-1.5 rounded-full transition"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;