import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreens } from "./Home";
import { FullPostScreens } from "./FullPost";
import { SavedPostsScreen } from "./SavedPosts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{
          title: "News",
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="FullPost"
        component={FullPostScreens}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  );
};

const SavedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavedPosts"
        component={SavedPostsScreen}
        options={{ title: "Saved Posts" }}
      />
      <Stack.Screen
        name="FullPost"
        component={FullPostScreens}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Saved") {
              iconName = "save";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedStack}
          options={{ tabBarLabel: "Saved" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
