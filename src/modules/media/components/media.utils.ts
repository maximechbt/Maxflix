import { maxBy } from "lodash";

import { Media } from "../../../shared/types/media.type";

export function getMediaWithBest<T extends Media>(medias: T[]) {
  const best = maxBy(medias, "watchers");

  return {
    medias: medias.filter((media) => media.ids.slug !== best?.ids.slug),
    best,
  };
}

export function getTmdbBannerImageUrl(media: Media) {
  return `https://image.tmdb.org/t/p/original/${media?.backdrop_path}?&language=fr-FR`;
}

export function getTmdbPosterImageUrl(media: Media) {
  return `https://image.tmdb.org/t/p/w500${media?.poster_path}?&language=fr-FR`;
}
