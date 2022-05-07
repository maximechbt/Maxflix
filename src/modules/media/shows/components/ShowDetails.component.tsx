import React from "react";
import { ScrollView } from "react-native";

import { Container } from "../../../../shared/components/Container.component";
import { Text } from "../../../../shared/components/Text.component";
import { Media } from "../../media.type";
import { useShowDetails } from "../shows.hook";
import SeasonsList from "./SeasonsList";
import ShowCastList from "./ShowCastList.component";

type Props = { show: Media };

export const ShowDetails = ({ show }: Props) => {
  const { data: showDetails } = useShowDetails(show.id);

  const numberOfSeasons = showDetails?.seasons?.filter(
    (season) => season.season_number
  ).length;

  return (
    <Container padding={"none"} margin="none">
      <ScrollView>
        <Text paddingHorizontal="m" paddingVertical="m" variant={"subtitle"}>
          Synopsis
        </Text>
        <Text paddingHorizontal="m" marginBottom="m" variant={"description"}>
          {show.overview}
        </Text>

        <Text paddingHorizontal="m" paddingVertical="m" variant={"subtitle"}>
          Casting
        </Text>

        <ShowCastList show={show} />

        <Text paddingHorizontal="m" paddingVertical="s" variant={"subtitle"}>
          Saisons ({numberOfSeasons})
        </Text>
        <SeasonsList
          seasons={showDetails?.seasons.filter((season) => season.poster_path)}
        />
      </ScrollView>
    </Container>
  );
};
