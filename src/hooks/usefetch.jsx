import React, { useEffect, useState } from "react";
import { PopularMovieData } from "../utils/api";

const usefetch = (list) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    PopularMovieData(list)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, []);

  return { data, loading, error };
};

export default usefetch;
