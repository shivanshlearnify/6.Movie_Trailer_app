import React from "react";
import "./style.css";
import usefetch from "../../../hooks/usefetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const { data } = usefetch("now_playing");
  let dataArray = data?.results;
  let randomNumber = Math.floor(Math.random() * 20);
  let randomurl = dataArray?.[randomNumber]?.backdrop_path;

  return (
    <div className="heroBanner">
      <div
        className="backdrop-img"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomurl})`,
        }}
      ></div>
      <div className="opacitylayer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            "Unveil the Cinematic Spectacle: Your Gateway to Exclusive Movie
            Trailers!"
          </span>
          <div className="searchInput">
            <input type="text" placeholder="Search for the movies......" />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
