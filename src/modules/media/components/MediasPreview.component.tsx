import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, Pressable } from "react-native";

import { Container } from "../../../shared/components/Container.component";
import { Text } from "../../../shared/components/Text.component";
import { Media } from "../media.type";
import MediaPoster from "./MediaPoster.component";

export default function MediasPreview({
  title,
  medias,
}: React.PropsWithChildren<{
  title: string;
  medias?: Media[];
}>) {
  const navigation = useNavigation();

  return (
    <Container height={240}>
      <Text variant="subtitle" margin="s" marginTop="m">
        {title}
      </Text>

      <FlatList
        data={medias}
        horizontal={true}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
            onPress={() => navigation.navigate("Media", { media: item })}
          >
            <MediaPoster item={item} />
          </Pressable>
        )}
        keyExtractor={(movie) => String(movie.id)}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
