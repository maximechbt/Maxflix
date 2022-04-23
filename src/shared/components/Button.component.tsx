import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";

import { useCustomTheme } from "../themes/theme";
import { Text } from "./Text.component";

export const Button = ({
  label,
  onPress,
}: {
  label: string;
  onPress(): void;
}) => {
  const { colors } = useCustomTheme();

  return (
    <Pressable
      style={({ pressed }) => ({
        height: 55,
        width: "100%",
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={onPress}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[colors.accent, "#9a262a", "#281818"]}
        locations={[0, 0.15, 0.95]}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          flex: 1,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize={16}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};
