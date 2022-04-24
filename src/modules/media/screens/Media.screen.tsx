import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { RootStackScreenProps } from "../../../../types";
import { Button } from "../../../shared/components/Button.component";
import { Container } from "../../../shared/components/Container.component";
import { Text } from "../../../shared/components/Text.component";
import { View } from "../../../shared/components/View.components";
import MediaPresentationImage from "../components/MediaPresentationImage.component";

export default function MediaScreen({
  navigation,
  route,
}: RootStackScreenProps<"Media">) {
  const {
    params: { media },
  } = route;
  const imageHeight = useSharedValue(550);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(imageHeight.value, {
        duration: 300,
        easing: Easing.bezier(0, 0.25, 0.75, 1),
      }),
    };
  });

  function seeMore() {
    imageHeight.value = 350;
  }

  return (
    <Container paddingBottom="m">
      <View flex={1}>
        <View>
          <Animated.View style={[[animatedStyle]]}>
            <MediaPresentationImage media={media} />
          </Animated.View>
          <View marginVertical="l" marginHorizontal="m" marginTop="s">
            <Button
              label="Ajouter à la bibliothèque"
              onPress={() => console.log("test")}
            />
          </View>
        </View>
        <Pressable onPress={seeMore}>
          <Text paddingHorizontal="m" paddingVertical="s" variant={"subtitle"}>
            Synopsis
          </Text>
          <Text
            paddingHorizontal="m"
            paddingVertical="s"
            variant={"description"}
            ellipsizeMode="tail"
            numberOfLines={7}
          >
            {media.overview}
          </Text>
          <View width="100%" alignItems={"flex-end"} p="m" paddingRight={"l"}>
            <Text variant={"littleButton"}>Voir plus</Text>
          </View>
        </Pressable>
      </View>
    </Container>
  );
}
