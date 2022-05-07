import { compact } from "lodash";
import React from "react";
import { ScrollView } from "react-native";

import { RootTabScreenProps } from "../../../types";
import { Container } from "../../shared/components/Container.component";
import MediaCaroussel from "../media/components/MediaCaroussel.components";
import MediasPreview from "../media/components/MediasPreview.component";
import {
  usePopularMovies,
  useTrendingMovies,
} from "../media/movies/movies.hook";
import { usePopularShows, useTrendingShows } from "../media/shows/shows.hook";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { data: trendingShows } = useTrendingShows();
  const { data: trendingMovies } = useTrendingMovies();
  const { data: popularShows } = usePopularShows();
  const { data: popularMovies } = usePopularMovies();

  return (
    <Container paddingTop="xl" paddingBottom="xxl">
      <ScrollView>
        <MediaCaroussel
          medias={compact([trendingShows?.best, trendingMovies?.best])}
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
