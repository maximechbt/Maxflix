import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import { useEffect, useMemo } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { Container } from "../../shared/components/Container.component";
import MediaPoster from "../media/components/MediaPoster.component";
import { usePopularMovies } from "../media/movies/movies.hook";
import { Movie } from "../media/movies/movies.type";
import { usePopularShows } from "../media/shows/shows.hook";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const CARD_HEIGHT = 500;
const CARD_WIDTH = CARD_HEIGHT / 1.5;
const DURATION = 150;
const SNAP_POINTS = [-SCREEN_WIDTH, 0, SCREEN_WIDTH];

export default function DiscoverScreen() {
  const { data: movies } = usePopularMovies();
  const { data: shows } = usePopularShows();

  const medias = useMemo(
    () => _.shuffle([...(movies || []), ...(shows || [])]),
    [movies, shows]
  );

  return (
    <Container>
      {medias.map((movie, index) => (
        <CardMedia key={movie.id} media={movie} index={index} />
      ))}
    </Container>
  );
}

function CardMedia({ media, index }: { media: Movie; index: number }) {
  const navigation = useNavigation();
  const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-SCREEN_HEIGHT);
  const scale = useSharedValue(1);
  const rotateX = useSharedValue(25);
  const rotateZ = useSharedValue(0);
  const delay = index * DURATION;
  const theta = -10 + Math.random() * 15;

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(0, { duration: DURATION, easing: Easing.inOut(Easing.ease) })
    );
    rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, translateY]);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value.x = translateX.value;
      offset.value.y = translateY.value;
      rotateZ.value = withTiming(0);
      rotateX.value = withTiming(0);
      scale.value = withTiming(1.1);
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    })
    .onEnd(({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      rotateX.value = withTiming(25);
      scale.value = withTiming(1, {}, () => {
        const isLast = index === 0;
        // const isSwipedLeftOrRight = dest !== 0;
        // if (isLast && isSwipedLeftOrRight) {
        //   shuffleBack.value = true;
        // }
      });
    });

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 2000 },
      { rotateX: `${rotateX.value}deg` },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateY: `${rotateZ.value / 10}deg` },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.container} pointerEvents="box-none">
      <GestureDetector gesture={gesture}>
        <Animated.View style={[style, styles.card]}>
          <Pressable onPress={() => navigation.navigate("Media", { media })}>
            <MediaPoster item={media} height={CARD_HEIGHT} />
          </Pressable>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});
