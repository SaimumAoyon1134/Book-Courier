import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import instance from "../Axios/instance";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import WishlistHeart from "./WishListHeart";
import Loading from "../Shared/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

 
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [canReview, setCanReview] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

 
  useEffect(() => {
    instance
      .get(`/book/${id}`)
      .then((res) => {
        setBookDetails(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);


  useEffect(() => {
    instance.get(`/reviews/${id}`).then((res) => {
      setReviews(res.data);
    });

    instance.get(`/reviews/average/${id}`).then((res) => {
      setAvgRating(res.data.averageRating || 0);
    });
  }, [id]);

  
  useEffect(() => {
    if (!user?.email) return;

    instance.get(`/myorders?email=${user.email}`).then((res) => {
      const delivered = res.data.find(
        (o) => o.bookId === id && o.orderStatus === "delivered"
      );
      setCanReview(!!delivered);
    });
  }, [user, id]);


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

    instance.post("/orders", orderData).then(() => {
      Swal.fire("Success", "Order placed successfully!", "success");
      setShowModal(false);
      setPhone("");
      setAddress("");
    });
  };

 
  const handleReviewSubmit = async () => {
    if (!reviewText) {
      toast.error("Review cannot be empty");
      return;
    }

    try {
      await instance.post("/reviews", {
        bookId: id,
        rating,
        review: reviewText,
        userEmail: user.email,
        userName: user.displayName,
      });

      toast.success("Review submitted!");

      setReviewText("");
      setRating(5);

      const res = await instance.get(`/reviews/${id}`);
      setReviews(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Review failed");
    }
  };

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!bookDetails) {
    return <div className="text-center py-20">Book not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
    
      <div className="grid md:grid-cols-2 gap-8 shadow-lg rounded-xl p-6">
        <img
          src={bookDetails.image}
          alt={bookDetails.name}
          className="w-72 h-[400px] object-cover rounded"
        />

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{bookDetails.name}</h1>
          <p>
            <strong>Author:</strong> {bookDetails.author}
          </p>
          <p>{bookDetails.description}</p>

          <p className="text-xl font-bold text-[#f75408]">
            ৳ {bookDetails.price}
          </p>

          <p className="text-yellow-500 font-bold">
            ⭐ {avgRating.toFixed(1)} / 5 ({reviews.length} reviews)
          </p>

         <div> <WishlistHeart book={bookDetails} user={user} /></div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 px-6 py-3 bg-[#a2b527] text-white rounded"
          >
            Order Now
          </button>
        </div>
      </div>

    
      {canReview ? (
        <div className="mt-10 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>

          <select
            className="rounded-2xl shadow p-2 mb-3 bg-amber-300"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} Star{n > 1 && "s"}
              </option>
            ))}
          </select>

          <textarea
            className="w-full border p-3 rounded mb-3"
            placeholder="Share your experience..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <div className="flex justify-center">
            <button
            onClick={handleReviewSubmit}
            className="bg-[#a2b527] text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
          </div>
        </div>
      ):(<p className="text-white m-2 py-1 px-5 rounded-2xl bg-[#ec6b69]">Warnings: You can review only after the book is delivered!</p>)}

   
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4 px-5">Customer Reviews</h3>

        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {reviews.map((r) => (
          <div key={r._id} className="shadow-lg py-4 px-5">
            <p className="font-bold">{r.userName}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(r.rating)}
            </p>
            <p>{r.review}</p>
          </div>
        ))}
      </div>

    
      {showModal && (
        <div className="fixed inset-0   flex justify-center items-center">
          <div className=" p-6 rounded bg-gray-100 text-black w-96">
            <h2 className="text-xl font-bold mb-4 text-black">Place Order</h2>

            <input
              readOnly
              value={user?.displayName}
              className="w-full border p-2 mb-2 "
            />
            <input
              readOnly
              value={user?.email}
              className="w-full border p-2 mb-2 "
            />

            <input
              placeholder="Phone"
              className="w-full border p-2 mb-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Address"
              className="w-full border p-2 mb-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={handleOrder}
                className="bg-[#a2b527] text-white px-4 py-2 rounded"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;