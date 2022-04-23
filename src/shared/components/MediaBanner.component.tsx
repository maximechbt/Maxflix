import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";

import { Media } from "../types/media.type";
import Text from "./Text.component";

export default function MediaBanner({
  media,
  overrideUrl = false,
}: React.PropsWithChildren<{ media: Media; overrideUrl?: boolean }>) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
    // onPress={() => navigation.navigate("MediaModal", { media })}
    >
      <ImageBackground
        style={[styles.image]}
        source={{
          uri: overrideUrl
            ? media.poster_path
            : `https://image.tmdb.org/t/p/original/${media?.backdrop_path}?&language=fr-FR`,
        }}
      >
        <Text variant="title">{media.title}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    height: 220,
    width: Dimensions.get("window").width,
  },
});
