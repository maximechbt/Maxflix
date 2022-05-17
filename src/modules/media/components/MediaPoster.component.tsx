import * as React from "react";
import { Image, StyleSheet } from "react-native";

import { getTmdbPosterImageUrl } from "./../media.utils";

export default function MediaPoster({
  item,
  height = 180,
}: React.PropsWithChildren<{
  item: { poster_path: string };
  height?: number;
}>) {
  return (
    <Image
      style={[styles.image, { height, width: height / 1.5 }]}
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
