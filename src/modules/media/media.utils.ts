import { maxBy } from "lodash";

import { Media } from "./media.type";

export function getMediaWithBest<T extends Media>(medias: T[]) {
  const best = maxBy(medias, "popularity");

  return {
    medias: medias.filter((media) => media.id !== best?.id),
    best,
  };
}

export function getTmdbBannerImageUrl(media: Media) {
  return `https://image.tmdb.org/t/p/original/${media?.backdrop_path}?&language=fr-FR`;
}

export function getTmdbPosterImageUrl(media: { poster_path: string }) {
  return `https://image.tmdb.org/t/p/w500${media?.poster_path}?&language=fr-FR`;
}
