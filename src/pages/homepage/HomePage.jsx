import React, { useRef } from "react";
import "./style.css";
import HeroBanner from "./heroBanner/HeroBanner";
import Section from "./section/Section";

const HomePage = () => {
  
  return (
    <>
      <HeroBanner />
      <Section title={"Upcoming"} list={"upcoming"}/>
      <Section title={"Now Playing"} list={"now_playing"}/>
      <Section title={"Top Rated"} list={"top_rated"}/>
      <Section title={"Popular Movies"} list={"popular"}/>
    </>
  );
};

export default HomePage;
