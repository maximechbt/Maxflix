import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import { Container } from "../../shared/components/Container.component";
import { useCustomTheme } from "../../shared/themes/theme";
import List from "./List.component";

export default function SearchScreen() {
  const [search, setSearch] = React.useState("");
  const ref = React.useRef() as React.MutableRefObject<TextInput>;

  const theme = useCustomTheme();

  useFocusEffect(() => {
    ref.current?.focus();
  });

  return (
    <Container paddingTop="xl" paddingBottom="xxl">
      <TextInput
        style={[
          styles.input,
          {
            margin: theme.spacing.m,
            marginTop: 0,
            padding: theme.spacing.m,
          },
        ]}
        onChangeText={(text) => {
          setSearch(text);
        }}
        placeholder={"Rechercher..."}
        placeholderTextColor="#FFF"
        value={search}
        ref={ref}
      />

      <List search={search} />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderWidth: 0.3,
    color: "white",
    borderColor: "white",
    borderRadius: 6,
  },
});
