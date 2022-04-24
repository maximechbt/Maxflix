import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";

import { View } from "../components/View.components";
import { useCustomTheme } from "../themes/theme";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useCustomTheme();

  return (
    <View
      flexDirection={"row"}
      position={"absolute"}
      bottom={5}
      left={5}
      right={5}
      height={70}
      borderBottomLeftRadius={25}
      borderBottomRightRadius={25}
      borderTopRightRadius={10}
      borderTopLeftRadius={10}
      justifyContent={"center"}
      alignItems={"center"}
      paddingHorizontal={"l"}
      backgroundColor={"tabBar"}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // @ts-ignore
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
            key={route.key}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? colors.accent : colors.textDescription,
                size: 25,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
