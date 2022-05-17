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
  const { data: showDetails, isLoading } = useShowDetails(show.id);

  return (
    <Container padding={"none"} margin="none">
      <ScrollView>
        <Text paddingHorizontal="m" paddingVertical="m" variant={"subtitle"}>
          Synopsis
        </Text>
        <Text paddingHorizontal="m" marginBottom="m" variant={"description"}>
          {show.overview}
        </Text>

        <ShowCastList show={show} />

        {!isLoading && (
          <SeasonsList
            seasons={showDetails?.seasons.filter(
              (season) => season.poster_path
            )}
          />
        )}
      </ScrollView>
    </Container>
  );
};
