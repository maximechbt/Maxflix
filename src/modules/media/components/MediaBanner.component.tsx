import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";

import { Text } from "../../../shared/components/Text.component";
import { useCustomTheme } from "../../../shared/themes/theme";
import { Media } from "../media.type";
import { getTmdbBannerImageUrl } from "../media.utils";

export default function MediaBanner({
  media,
}: React.PropsWithChildren<{ media: Media }>) {
  const navigation = useNavigation();
  const theme = useCustomTheme();

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
      onPress={() => navigation.navigate("Media", { media })}
    >
      <ImageBackground
        style={[
          styles.image,
          {
            padding: theme.spacing.m,
          },
        ]}
        imageStyle={{ borderRadius: 5 }}
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
    height: 220,
    width: Dimensions.get("window").width,
  },
});
