import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet, ImageBackground, Dimensions } from "react-native";

import { BackButton } from "../../../shared/components/BackButton.component";
import { Chips } from "../../../shared/components/Chips.component";
import { Text } from "../../../shared/components/Text.component";
import { View } from "../../../shared/components/View.components";
import { Media } from "../media.type";
import { getTmdbBannerImageUrl } from "./media.utils";

export default function MediaPresentationImage({
  media,
}: React.PropsWithChildren<{ media: Media; height?: number }>) {
  return (
    <ImageBackground
      style={[styles.image, { flex: 1, margin: 0 }]}
      source={{
        uri: getTmdbBannerImageUrl(media),
      }}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(255,255,255,0)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.55)",
          "rgba(0,0,0,0.75)",
          "rgba(0,0,0,0.85)",
          "rgba(0,0,0,1)",
        ]}
        locations={[0, 0.49, 0.55, 0.75, 0.85, 0.98]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      >
        <View width="100%" justifyContent="flex-start" p={"m"}>
          <BackButton />
        </View>
        <View marginVertical="xl">
          <Text variant="title" fontSize={40} textAlign="center">
            {media.title}
          </Text>
          <View
            flex={0}
            flexDirection="row"
            paddingHorizontal="l"
            paddingVertical="s"
            flexWrap={"wrap"}
            justifyContent="center"
          >
            <Chips label={String(media.year)} />
            <Chips label={media.type === "show" ? "Série" : "Film"} />
            {media.genres.map((genre) => (
              <Chips key={genre.id} label={genre.name} />
            ))}
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
