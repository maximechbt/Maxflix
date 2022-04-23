import { Media } from "../../shared/types/media.type";

export type TMDBMovie = {
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
};

export interface Movie extends Media { }

export type RadarrMovie = {
  id: number;
  title: string;
  tmdbId: number;
  sizeOnDisk: number;
  monitored: boolean;
  hasFile: boolean;
  added: Date;
  images: {
    coverType: "poster" | "fanart";
    remoteUrl: string;
  }[];
  imdbId: string;
  type: "movie";
};
