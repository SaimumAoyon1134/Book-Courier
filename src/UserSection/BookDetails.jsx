import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import instance from "../Axios/instance";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import WishlistHeart from "./WishListHeart";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    instance
      .get(`/book/${id}`)
      .then((response) => {
        setBookDetails(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-semibold animate-pulse">
          Loading book details...
        </p>
      </div>
    );
  }

  if (!bookDetails) {
    return (
      <div className="text-center py-20 text-red-500">Book not found!</div>
    );
  }

  const handleOrder = () => {
    if (!phone || !address) {
      Swal.fire("Error", "Phone and Address are required!", "error");
      return;
    }

    const orderData = {
      bookId: bookDetails._id,
      bookName: bookDetails.name,
      price: bookDetails.price,
      userName: user?.displayName,
      userEmail: user?.email,
      phone,
      address,
      orderStatus: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date(),
    };
    instance
      .post("/orders", orderData)
      .then(() => {
        Swal.fire("Success", "Order placed successfully!", "success");
        setShowModal(false);
        setPhone("");
        setAddress("");
      })
      .catch(() => {
        Swal.fire("Error", "Failed to place order!", "error");
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 shadow-lg rounded-xl p-6">
        <div className="flex justify-center">
          <img
            src={bookDetails.image}
            alt={bookDetails.name}
            className="w-72 h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-extrabold ">{bookDetails.name}</h1>

          <p className="text-lg ">
            <span className="font-semibold text-[#a2b527]">Author:</span>{" "}
            {bookDetails.author}
          </p>

          <p className="leading-relaxed">{bookDetails.description}</p>

          <p className="text-xl font-semibold text-[#f75408]">
            ৳ {bookDetails.price}
          </p>

          <p className="text-sm">
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`px-2 py-1 text-white font-bold rounded  
                ${
                  bookDetails.status === "published"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
            >
              {bookDetails.status.charAt(0).toUpperCase() +
                bookDetails.status.slice(1)}
            </span>
          </p>
          <div>
            <WishlistHeart book={bookDetails} user={user} />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-10 px-6 py-3 bg-[#a2b527] hover:bg-[#829709] rounded-lg transition text-white"
          >
            Order Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/5 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              Place Your Order
            </h2>

            <div className="space-y-3">
              <div>
                <label className="font-semibold">Name:</label>
                <input
                  type="text"
                  readOnly
                  value={user?.displayName}
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  readOnly
                  value={user?.email}
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold">Phone Number:</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="font-semibold">Address:</label>
                <textarea
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleOrder}
                className="px-4 py-2 bg-[#a2b527] text-white rounded hover:bg-[#829709]"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
