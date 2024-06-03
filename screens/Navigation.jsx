import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreens } from "./Home";
import { FullPostScreens } from "./FullPost";
import { SavedPostsScreen } from "./SavedPosts";

const Stack = createNativeStackNavigator();

export const 
Navigation = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="SavedPosts"
          component={SavedPostsScreen}
          options={{ title: "Saved Posts" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
