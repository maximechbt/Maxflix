import React from "react";
import { FlatList } from "react-native";

import { View } from "../../../shared/components/View.components";
import { Media } from "../media.type";
import MediaBanner from "./MediaBanner.component";

export default function MediaCaroussel({ medias }: { medias: Media[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const _onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }, []);

  return (
    <>
      <FlatList
        onViewableItemsChanged={_onViewableItemsChanged}
        data={medias}
        pagingEnabled={true}
        horizontal={true}
        keyExtractor={(media) => String(media.id)}
        renderItem={({ item }) => <MediaBanner media={item} />}
        showsHorizontalScrollIndicator={false}
      />

      <View
        flexDirection={"row"}
        width="100%"
        justifyContent={"center"}
        marginTop="s"
      >
        {medias.map((media, index) => (
          <View
            key={media.id}
            backgroundColor={
              currentIndex === index ? "text" : "chipsBackground"
            }
            height={8}
            width={8}
            margin="s"
            borderRadius={10}
          />
        ))}
      </View>
    </>
  );
}
