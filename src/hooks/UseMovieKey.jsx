import React, { useEffect, useState } from "react";
import { MovieVideosData } from "../utils/api";

const usefetch = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    MovieVideosData(id)
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