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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isLoading} = useContext(AuthContext)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await instance.get("/allbooks")
        setServices(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (isLoading) return <Loading/>;

  return (
    <div className="my-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        freeMode={true}
        allowTouchMove={false}
        breakpoints={{
          250: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
          1250: { slidesPerView: 5 },
        }}
      >
        {services.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              className="flex flex-col items-center justify-center rounded-xl p-4 h-[300px] cursor-pointer"
              onClick={() => navigate(`/service/${item._id}`)}
            >
              <img
                src={
                  item.image ||
                  "https://cdn-icons-png.flaticon.com/512/5474/5474438.png"
                }
                alt={item.name}
                className="w-full h-50 object-cover rounded-lg mb-2"
              />
              <p className="text-center  font-extrabold">{item.name}</p>
              <p className="text-center  text-[#f75408]">{item.author}</p>
              <p className="text-center font-bold">TK.{item.price} </p>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContinuousSwiper;
