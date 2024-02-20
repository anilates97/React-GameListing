import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = () => axiosCreate.get("/genres?key=" + key);
const getAllGames = () => axiosCreate.get("/games?key=" + key);

export default {
  getGenreList,
  getAllGames,
};
