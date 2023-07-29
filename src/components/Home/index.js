import React from "react";
import Navbar from "../Header";
import HomeSlider from "../HomeSlider";
import OurStory from "../Story";
import Product from "../Product";

const HomeComp = () => {
  return (
    <div className="my-3 md:my-10 md:mx-[80px] mx-5 flex flex-col">
      <Navbar/>
      {/* <HomeSlider /> */}
      <OurStory />
      <Product />
    </div>
  );
};

export default HomeComp;
