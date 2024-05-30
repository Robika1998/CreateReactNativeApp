import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreens } from "./Home";
import { FullPostScreens } from "./FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreens}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
