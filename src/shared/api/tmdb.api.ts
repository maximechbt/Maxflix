import axios from "axios";
import Constants from "expo-constants";

const TMDB_API_URL = "https://api.themoviedb.org/3";

export const TMDBInstance = axios.create({
  baseURL: TMDB_API_URL,
});

TMDBInstance.interceptors.request.use((config) => {
  config.params = {
    api_key: Constants?.manifest?.extra?.TMDB_API_KEY,
    language: "fr-FR",
    ...config.params,
  };
  return config;
});
