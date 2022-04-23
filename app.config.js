/* eslint-disable no-undef */
import "dotenv/config";

module.exports = {
  expo: {
    name: "maxflix-v2",
    slug: "maxflix-v2",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./src/assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/images/icon.png",
        backgroundColor: "#000000",
      },
    },
    web: {
      favicon: "./src/assets/images/icon.png",
    },
    extra: {
      TRAKT_API_KEY: process.env.TRAKT_API_KEY,
      TMDB_API_KEY: process.env.TMDB_API_KEY,

      RADARR_API_URL: process.env.RADARR_API_URL,
      RADARR_API_KEY: process.env.RADARR_API_KEY,

      SONARR_API_URL: process.env.SONARR_API_URL,
      SONARR_API_KEY: process.env.SONARR_API_KEY,
    },
  },
};
