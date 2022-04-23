// import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

import { Media } from "../types/media.type";
import { getTmdbPosterImageUrl } from "../utils/media.utils";

export default function MediaPoster({
  item,
}: React.PropsWithChildren<{ item: Media }>) {
  //const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
      //  onPress={() => navigation.navigate("MediaModal", { media: item })}
    >
      <Image
        style={[styles.image, { height: 180, width: 180 / 1.5 }]}
        source={{
          uri: getTmdbPosterImageUrl(item),
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 5,
    resizeMode: "cover",
    borderRadius: 5,
  },
});
