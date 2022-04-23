import compact from "lodash/compact";

import { TMDBInstance } from "../../shared/api/tmdb.api";
import { TraktInstance } from "../../shared/api/trakt.api";
import { Media, TraktMedia } from "../../shared/types/media.type";

type TMDBShow = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  name: string;
};

export interface Show extends Media { }

type Season = {
  number: number;
};

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

async function populateWithTMDB(shows: TraktMedia[]): Promise<Show[]> {
  return compact(
    await Promise.all(
      shows.map(async (show: TraktMedia) => {
        try {
          const TMDBShow = await getTMDBShow(show.ids.tmdb);
          if (!TMDBShow?.backdrop_path) return;
          return {
            year: show.year,
            ids: show.ids,
            watchers: show.watchers,
            backdrop_path: TMDBShow.backdrop_path,
            poster_path: TMDBShow.poster_path,
            overview: TMDBShow.overview,
            title: TMDBShow.name,
            trackObject: show,
            type: "show",
          };
        } catch (error) { }
      })
    )
  );
}

async function getTMDBShow(id: number): Promise<TMDBShow> {
  const { data } = await TMDBInstance.get(`/tv/${id}`);
  return data;
}

export const ShowService = {
  getTrendingShows: async (): Promise<Show[]> => {
    const { data } = await TraktInstance.get("/shows/trending?limit=25");
    return populateWithTMDB(
      data.map((item: { show: TraktMedia; watchers: number }) => ({
        ...item.show,
        watchers: item.watchers,
      }))
    );
  },
};
