import React from "react";
import ContinuousSwiper from "../Shared/Swiper";
import Latest from "./Latest";
import Coverage from "./Coverage";
import Why from "./Why";
import More from "./More";
import TrustSection from "./TrustSection";


const Home = () => {
  return (
    <div>
       
      <ContinuousSwiper />
      <Latest />
      <Coverage />

      <Why />

      <TrustSection />
      <More />
    </div>
  );
};

export default Home;
