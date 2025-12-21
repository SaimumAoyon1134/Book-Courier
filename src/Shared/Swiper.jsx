import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";

const ContinuousSwiper = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    instance
      .get("/books")
      .then((res) => {
        const publishedBooks = res.data.filter(
          (book) => book.status === "published"
        );
        setBooks(publishedBooks);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading || loading) return <Loading />;

  // Duplicate slides if less than 6 for smoother loop
  const loopedBooks = books.length < 6 ? [...books, ...books] : books;

  // Function to calculate slidesPerView dynamically
  const getSlidesPerView = (width) => {
    if (width < 500) return Math.min(1, books.length);
    if (width < 750) return Math.min(2, books.length);
    if (width < 1000) return Math.min(3, books.length);
    if (width < 1250) return Math.min(4, books.length);
    return Math.min(5, books.length);
  };

  return (
    <div className="my-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={books.length > 1} // Enable loop only if more than 1 book
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        freeMode={true}
        allowTouchMove={false}
        breakpoints={{
          250: { slidesPerView: getSlidesPerView(250) },
          500: { slidesPerView: getSlidesPerView(500) },
          750: { slidesPerView: getSlidesPerView(750) },
          1000: { slidesPerView: getSlidesPerView(1000) },
          1250: { slidesPerView: getSlidesPerView(1250) },
        }}
      >
        {loopedBooks.map((item, index) => (
          <SwiperSlide key={`${item._id}-${index}`}>
            <div
              className="flex flex-col items-center justify-center rounded-xl p-4 h-[300px] cursor-pointer"
              onClick={() => navigate(`/book-details/${item._id}`)}
            >
              <img
                src={
                  item.image ||
                  "https://cdn-icons-png.flaticon.com/512/5474/5474438.png"
                }
                alt={item.name}
                className="w-full h-50 object-cover rounded-lg mb-2"
              />
              <p className="text-center font-extrabold">{item.name}</p>
              <p className="text-center text-[#f75408]">{item.author}</p>
              <p className="text-center font-bold">TK.{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContinuousSwiper;