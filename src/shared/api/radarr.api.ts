import axios from "axios";
import Constants from "expo-constants";

const RADARR_API_URL = Constants?.manifest?.extra?.RADARR_API_URL;

export const RadarrInstance = axios.create({
  baseURL: RADARR_API_URL,
  headers: {
    "X-Api-Key": Constants?.manifest?.extra?.RADARR_API_KEY,
  },
});
