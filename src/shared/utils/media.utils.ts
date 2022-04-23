import { maxBy } from "lodash";

import { Media } from "../types/media.type";

export function getMediaWithBest<T extends Media>(medias: T[]) {
  const best = maxBy(medias, "watchers");

  return {
    medias: medias.filter((media) => media.ids.slug !== best?.ids.slug),
    best,
  };
}
