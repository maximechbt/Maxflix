import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Image } from "react-native";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../../types";
import HomeScreen from "../../modules/home/Home.screen";
import MediaScreen from "../../modules/media/screens/Media.screen";
import { useCustomTheme } from "../themes/theme";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }: { colorScheme: string }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Header = () => {
  return (
    <Image
      style={{
        height: 35,
        width: 35,
        margin: 5,
        marginBottom: 15,
        marginTop: 10,
      }}
      source={require("../../assets/images/logo.jpg")}
    />
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Media"
        component={MediaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { colors } = useCustomTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        headerShown: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTitle: Header,
          headerStyle: {
            backgroundColor: colors.mainBackground,
          },
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Search">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerTitle: Header,
          headerStyle: {
            backgroundColor: colors.mainBackground,
          },
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}
