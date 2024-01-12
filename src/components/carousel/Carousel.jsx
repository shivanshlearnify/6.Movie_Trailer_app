import React, { useRef } from "react";
import "./style.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="carousel">
      <div className="left" onClick={() => navigation("left")}>
        <button>
          <FaArrowLeft />
        </button>
      </div>
      <ContentWrapper>
        <div className="carouselItems" ref={carouselContainer}>
          {data?.map((item) => (
            <div className="carouselItem" key={item.id} onClick={()=> navigate(`/movie/${item.id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
              />
              <span className="carouselTitle">{item.title}</span>
              <div className="releaseDate">
                {format(item.release_date, "MMMM d, yyyy")}
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
      <div className="right" onClick={() => navigation("right")}>
        <button>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
