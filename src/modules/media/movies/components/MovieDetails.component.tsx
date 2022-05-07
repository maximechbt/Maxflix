import React from "react";
import { ScrollView } from "react-native";

import { Text } from "../../../../shared/components/Text.component";
import { Media } from "../../media.type";

type Props = { movie: Media };

export const MovieDetails = ({ movie }: Props) => {
  return (
    <ScrollView>
      <Text paddingHorizontal="m" paddingVertical="s" variant={"subtitle"}>
        Synopsis
      </Text>

      <Text paddingHorizontal="m" paddingVertical="s" variant={"description"}>
        {movie.overview}
      </Text>
    </ScrollView>
  );
};
