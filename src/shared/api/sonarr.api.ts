import axios from "axios";
import Constants from "expo-constants";

const SONARR_API_URL = Constants?.manifest?.extra?.SONARR_API_URL;

export const SonarrInstance = axios.create({
  baseURL: SONARR_API_URL,
  headers: {
    "X-Api-Key": Constants?.manifest?.extra?.SONARR_API_KEY,
  },
});
