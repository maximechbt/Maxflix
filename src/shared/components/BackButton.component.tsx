import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import { useCustomTheme } from "../themes/theme";
import { Text } from "./Text.component";

export const BackButton = () => {
  const { colors } = useCustomTheme();
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => ({
        height: 45,
        width: 45,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: colors.chipsBackground,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      })}
      onPress={navigation.goBack}
    >
      <Text fontSize={16}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          color={colors.textDescription}
        />
      </Text>
    </Pressable>
  );
};
