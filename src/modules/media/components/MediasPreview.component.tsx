import * as React from "react";
import { FlatList } from "react-native";

import { Container } from "../../../shared/components/Container.component";
import { Text } from "../../../shared/components/Text.component";
import { Media } from "../../../shared/types/media.type";
import MediaPoster from "./MediaPoster.component";

export default function MediasPreview({
  title,
  medias,
}: React.PropsWithChildren<{
  title: string;
  medias?: Media[];
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
