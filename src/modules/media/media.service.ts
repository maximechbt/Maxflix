import { flatten } from "lodash";
import { useQuery } from "react-query";

import { TraktInstance } from "../../shared/api/trakt.api";
import { Media, TraktMedia } from "./media.type";
import { populateWithTMDB as populateMovieWithTMDB } from "./movies/movies.service";
import { populateWithTMDB as populateShowWithTMDB } from "./shows/shows.service";

export type SearchMedia = {
  movie: TraktMedia;
  show: TraktMedia;
  type: "movie" | "show";
};

function getSearchMediaByType(
  medias: SearchMedia[],
  type: "movie" | "show"
): (TraktMedia & { type: "show" | "movie" })[] {
  return medias
    .filter((media) => media.type === type)
    .map((media) => ({ ...media.show, type }));
}

async function getMediasByText(text: string): Promise<Media[]> {
  const { data: medias }: { data: SearchMedia[] } = await TraktInstance.get(
    `/search/movie,show?limit=10&query=${text}`
  );

  const populateMedias = await Promise.all([
    populateShowWithTMDB(getSearchMediaByType(medias, "show")),
    populateMovieWithTMDB(getSearchMediaByType(medias, "movie")),
  ]);

  return flatten(populateMedias);
}

export const useMediasByText = (text: string) =>
  useQuery(["medias", text], () => getMediasByText(text), {
    enabled: Boolean(text),
  });
