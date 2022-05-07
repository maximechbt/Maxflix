import * as React from "react";
import { FlatList } from "react-native";

import { Container } from "../../../../shared/components/Container.component";
import MediaPoster from "../../components/MediaPoster.component";
import { Season } from "../shows.type";

export default function SeasonsList({
  seasons,
}: React.PropsWithChildren<{
  seasons?: Season[];
}>) {
  return (
    <Container height={240}>
      <FlatList
        data={seasons}
        horizontal={true}
        renderItem={({ item }) => <MediaPoster item={item} />}
        keyExtractor={(movie) => String(movie.id)}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
