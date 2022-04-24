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
        colors={["#e2363d", colors.accent, "#9c161b"]}
        locations={[0, 0.2, 0.55]}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          flex: 1,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize={16} fontWeight={"700"}>
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};
