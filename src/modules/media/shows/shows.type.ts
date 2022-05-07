import { Media } from "../media.type";

export type TMDBShow = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  name: string;
  genres: { id: number; name: string }[];
};

export interface Show extends Media {}

export interface Season {
  overview?: string;
  season_number: number;
  name: string;
  id: number;
  episode_count: number;
  poster_path: string;
}

export interface ShowDetails {
  production_countries: { iso_3166_1: string; name: string }[];
  seasons: Season[];
}

export interface ShowCast {
  id: number;
  name: string;
  popularity: number;
  profile_path: string;
  character: string;
}

export type SonarrShow = {
  id: number;
  title: string;
  tmdbId: number;
  monitored: boolean;
  added: Date;
  images: {
    coverType: "poster" | "fanart";
    remoteUrl: string;
  }[];
  imdbId: string;
  seasons: {
    seasonNumber: number;
    monitored: boolean;
    statistics: {
      nextAiring?: Date;
      episodeFileCount: number;
      episodeCount: number;
      totalEpisodeCount: number;
      sizeOnDisk: number;
    };
  }[];
  type: "show";
};
