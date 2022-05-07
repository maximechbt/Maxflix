import * as React from "react";
import { Image, StyleSheet } from "react-native";

import { getTmdbPosterImageUrl } from "./../media.utils";

export default function MediaPoster({
  item,
}: React.PropsWithChildren<{ item: { poster_path: string } }>) {
  return (
    <Image
      style={[styles.image, { height: 180, width: 180 / 1.5 }]}
      source={{
        uri: getTmdbPosterImageUrl(item),
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 5,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
