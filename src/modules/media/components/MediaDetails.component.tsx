import React from "react";

import { Media } from "../media.type";
import { MovieDetails } from "../movies/components/MovieDetails.component";
import { ShowDetails } from "../shows/components/ShowDetails.component";

type Props = { media: Media };

export const MediaDetails = ({ media }: Props) => {
  return media.media_type === "tv" ? (
    <ShowDetails show={media} />
  ) : (
    <MovieDetails movie={media} />
  );
};
