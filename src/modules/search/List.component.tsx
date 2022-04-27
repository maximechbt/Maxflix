import shuffle from "lodash/shuffle";
import uniqBy from "lodash/uniqBy";
import * as React from "react";
import { FlatList } from "react-native";

import { Text } from "../../shared/components/Text.component";
import { View } from "../../shared/components/View.components";
import { useDebounce } from "../../shared/hooks/useDebounce.hook";
import MediaPoster from "../media/components/MediaPoster.component";
import { useMediasByText } from "../media/media.service";
import { Media } from "../media/media.type";
import {
  usePopularMovies,
  useTrendingMovies,
} from "../media/movies/movies.hook";
import { usePopularShows, useTrendingShows } from "../media/shows/shows.hook";

function getDefaultMedias({
  trendingMovies,
  popularShows,
  trendingShows,
  popularMovies,
}: {
  trendingMovies?: Media[];
  popularShows?: Media[];
  trendingShows?: Media[];
  popularMovies?: Media[];
}) {
  return shuffle(
    uniqBy(
      [
        ...(trendingMovies || []),
        ...(popularShows || []),
        ...(trendingShows || []),
        ...(popularMovies || []),
      ],
      "ids.slug"
    )
  );
}

export default function List({ search }: { search: string }) {
  const debounceSearch = useDebounce(search, 500);

  const { data: searchMedias, isLoading } = useMediasByText(debounceSearch);

  const { data: popularMovies } = usePopularMovies();
  const { data: trendingMovies } = useTrendingMovies();
  const { data: popularShows } = usePopularShows();
  const { data: trendingShows } = useTrendingShows();

  const defaultMedias = React.useMemo(
    () =>
      getDefaultMedias({
        trendingMovies: trendingMovies?.medias,
        popularShows,
        trendingShows: trendingShows?.medias,
        popularMovies,
      }),
    [popularMovies, trendingMovies, popularShows, trendingShows]
  );

  const Medias = () => {
    if (search && searchMedias?.length === 0) {
      return (
        <Text variant={"description"}>
          Aucun résultat pour votre recherche.
        </Text>
      );
    }

    return (
      <FlatList
        data={search ? searchMedias : defaultMedias}
        numColumns={3}
        renderItem={({ item }) => <MediaPoster item={item} />}
        keyExtractor={(movie) => movie.ids.slug}
      />
    );
  };

  return (
    <View flex={1} alignItems="center">
      {isLoading ? (
        <Text variant="description">ça cherche, ça cherche...</Text>
      ) : (
        <Medias />
      )}
    </View>
  );
}
