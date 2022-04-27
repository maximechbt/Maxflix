import axios from "axios";
import Constants from "expo-constants";

const TRAKT_API_URL = "https://api.trakt.tv";

export const TraktInstance = axios.create({
  baseURL: TRAKT_API_URL,
  headers: {
    "trakt-api-key": Constants?.manifest?.extra?.TRAKT_API_KEY,
    "trakt-api-version": "2",
    "Content-type": "application/json",
  },
});
