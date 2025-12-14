import { FaHeart, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import instance from "../Axios/instance";
import { useEffect, useState } from "react";

const WishlistHeart = ({ book, user }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user?.email) {
      instance
        .get(`/wishlist/check?email=${user.email}&bookId=${book._id}`)
        .then(res => setLiked(res.data.exists));
    }
  }, [book._id, user]);

  const toggleWishlist = () => {
    if (!user) {
      return Swal.fire("Login required", "Please login first", "info");
    }

    if (liked) return;

    instance
      .post("/wishlist", {
        userEmail: user.email,
        bookId: book._id,
        bookName: book.name,
        image: book.image,
        price: book.price,
      })
      .then(() => {
        setLiked(true);
        Swal.fire("Added!", "Book added to wishlist", "success");
      })
      .catch(err => {
        if (err.response?.status === 409) {
          Swal.fire("Already Added", "This book is in your wishlist", "info");
        }
      });
  };

  return (
    <button onClick={toggleWishlist} className="text-2xl text-red-500">
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default WishlistHeart;