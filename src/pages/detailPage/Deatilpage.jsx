import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import usefetch from "../../hooks/usefetch";
import UseMovieKey from "../../hooks/UseMovieKey";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { ImPlay } from "react-icons/im";
import VideoPopup from "../../components/videoPopup/VideoPopup";

const Deatilpage = () => {
  const { id } = useParams();

  const { data, loading } = usefetch(id);
  const { data: videoData } = UseMovieKey(id);
  console.log(videoData?.results?.[0].key);

  return (
    <div className="Deatilpage">
      <div className="DeatilpageBackdrop">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="DeatilpageOpacityLayer"></div>
      <ContentWrapper>
        <div className="content">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
              alt=""
            />
          </div>
          <div className="right">
            <div className="title">{data?.title}</div>
            <div className="subtitle">{data?.tagline}</div>
            <div className="genres">
              {data?.genres.map((item) => (
                <div className="genre">{item?.name}</div>
              ))}
            </div>
            <div>
              <ImPlay />
            </div>
            <VideoPopup/>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Deatilpage;
