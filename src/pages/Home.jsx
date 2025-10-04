import React from "react";
import HeroSlide from "../components/HeroSlider";
import CallAction from "../components/CallAction";
import AboutUs from "../components/AboutUs";
import States from "../components/State";
import Departments from "../components/Departments";
import Doctors from "../components/Doctors";

function Home() {
  return (
    <div>
      <HeroSlide />
      <CallAction />
      <AboutUs />
      <States />
      <Departments />
      <Doctors/>
    </div>
  );
}

export default Home;
