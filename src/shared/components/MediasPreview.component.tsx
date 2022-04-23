import * as React from "react";
import { FlatList } from "react-native";

import { Movie } from "../../modules/movies/movies.service";
import { Show } from "../../modules/shows/shows.service";
import { Container } from "./Container.component";
import MediaPoster from "./MediaPoster.component";
import { Text } from "./Text.component";

export default function MediasPreview({
  title,
  medias,
}: React.PropsWithChildren<{
  title: string;
  medias?: Movie[] | Show[];
}>) {
  return (
    <Container height={240}>
      <Text variant="subtitle" margin="s" marginTop="m">
        {title}
      </Text>

      <FlatList
        data={medias}
        horizontal={true}
        renderItem={({ item }) => <MediaPoster item={item} />}
        keyExtractor={(movie) => movie.ids.slug}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </Container>
  );
}
