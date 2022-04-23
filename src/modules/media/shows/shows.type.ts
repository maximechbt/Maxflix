import { Media } from "../media.type";

export type TMDBShow = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  name: string;
  genres: { id: number; name: string }[];
};

export interface Show extends Media { }

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
