import axios from "axios";

export const PopularMovieData = async (list) => {
  const API = "0ddadeb03411d86a22cdf553cbc8b77d";
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${list}?language=en-US&page=1&api_key=${API}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const MovieVideosData = async (id) => {
  const API = "0ddadeb03411d86a22cdf553cbc8b77d";
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3//movie/${id}/videos?language=en-US&api_key=${API}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
