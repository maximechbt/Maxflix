import * as React from "react";
import { FlatList } from "react-native";

import { Container } from "../../../../shared/components/Container.component";
import { Text } from "../../../../shared/components/Text.component";
import MediaPoster from "../../components/MediaPoster.component";
import { useShowCast } from "../shows.hook";
import { Show } from "../shows.type";

export default function ShowCastList({
  show,
}: React.PropsWithChildren<{
  show: Show;
}>) {
  const { data: showCast, isLoading } = useShowCast(show.id);

  return !isLoading ? (
    <Container>
      <Text paddingHorizontal="m" paddingVertical="m" variant={"subtitle"}>
        Casting
      </Text>

      <FlatList
        data={showCast}
        horizontal={true}
        renderItem={({ item }) => (
          <MediaPoster item={{ poster_path: item.profile_path }} />
        )}
        keyExtractor={(cast) => String(cast.id)}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  ) : null;
}
