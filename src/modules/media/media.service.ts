import { useQuery } from "react-query";

import { TMDBInstance } from "../../shared/api/tmdb.api";
import { Media } from "./media.type";

async function getMediasByText(text: string): Promise<Media[]> {
  const {
    data: { results: medias },
  } = await TMDBInstance.get("search/multi", {
    params: {
      query: text,
    },
  });

  return medias.filter((media: Media) =>
    ["tv", "movie"].includes(media.media_type)
  );
}

export const useMediasByText = (text: string) =>
  useQuery(["medias", text], () => getMediasByText(text), {
    enabled: Boolean(text),
  });
