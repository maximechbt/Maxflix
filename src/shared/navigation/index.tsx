import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../../types";
import HomeScreen from "../../modules/home/Home.screen";
import MediaScreen from "../../modules/media/screens/Media.screen";
import LinkingConfiguration from "./LinkingConfiguration";
import { TabBar } from "./TabBar.component";

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
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
      <BottomTab.Screen
        name="Discover"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Discover">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="playcircleo" color={color} />
          ),
          headerShown: false,
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Search">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search1" color={color} />
          ),
          headerShown: false,
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
      <BottomTab.Screen
        name="Favorite"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Favorite">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="hearto" color={color} />,
          headerShown: false,
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
      <BottomTab.Screen
        name="Profil"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Profil">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
          tabBarLabelStyle: { marginBottom: 2 },
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={25} style={{ marginBottom: -3 }} {...props} />;
}
