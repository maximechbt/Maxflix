import { compact } from "lodash";
import { FlatList, ScrollView } from "react-native";

import { RootTabScreenProps } from "../../../types";
import { Container } from "../../shared/components/Container.component";
import MediaBanner from "../../shared/components/MediaBanner.component";
import MediasPreview from "../../shared/components/MediasPreview.component";
import { usePopularMovies, useTrendingMovies } from "../movies/movies.hook";
import { usePopularShows, useTrendingShows } from "../shows/shows.hook";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { data: trendingShows } = useTrendingShows();
  const { data: trendingMovies } = useTrendingMovies();
  const { data: popularShows } = usePopularShows();
  const { data: popularMovies } = usePopularMovies();

  return (
    <Container paddingBottom="m">
      <ScrollView>
        <FlatList
          data={compact([trendingShows?.best, trendingMovies?.best])}
          pagingEnabled={true}
          horizontal={true}
          keyExtractor={(media) => media?.ids.slug}
          renderItem={({ item }) => <MediaBanner media={item} />}
        />
        <MediasPreview
          medias={trendingShows?.medias}
          title="Séries en tendances"
        />
        <MediasPreview
          medias={trendingMovies?.medias}
          title="Films en tendances"
        />
        <MediasPreview medias={popularShows} title="Séries populaires" />
        <MediasPreview medias={popularMovies} title="Films populaires" />
      </ScrollView>
    </Container>
  );
}