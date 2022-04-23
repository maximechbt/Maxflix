import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";

import { Text } from "../../../shared/components/Text.component";
import { Media } from "../../../shared/types/media.type";
import { getTmdbBannerImageUrl } from "./media.utils";

export default function MediaBanner({
  media,
}: React.PropsWithChildren<{ media: Media }>) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
      onPress={() => navigation.navigate("Media", { media })}
    >
      <ImageBackground
        style={[styles.image]}
        source={{
          uri: getTmdbBannerImageUrl(media),
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
