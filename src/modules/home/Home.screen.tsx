import { compact } from "lodash";
import { FlatList, ScrollView } from "react-native";

import { RootTabScreenProps } from "../../../types";
import { Container } from "../../shared/components/Container.component";
import MediaBanner from "../../shared/components/MediaBanner.component";
import { useTrendingMovies } from "../movies/movies.hook";
import { useTrendingShows } from "../shows/shows.hook";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { data: trendingShows } = useTrendingShows();
  const { data: trendingMovies } = useTrendingMovies();

  return (
    <Container>
      <ScrollView>
        <FlatList
          data={compact([trendingShows?.best, trendingMovies?.best])}
          pagingEnabled={true}
          horizontal={true}
          keyExtractor={(media) => media?.ids.slug}
          renderItem={({ item }) => <MediaBanner media={item} />}
        />
      </ScrollView>
    </Container>
  );
}
