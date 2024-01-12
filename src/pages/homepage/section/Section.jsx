import React from "react";
import "./style.css"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";
import usefetch from "../../../hooks/usefetch";

const Section = ({title, list}) => {
  const { data, loading } = usefetch(list);

  return (
    <div className="section">
      <ContentWrapper>
        <div className="title">{title}</div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Section;
