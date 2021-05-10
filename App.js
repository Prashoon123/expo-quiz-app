import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Topics from "./screens/Topics";
import GK from "./screens/GK";
import Sports from "./screens/Sports";
import Computers from "./screens/Computers";
import VideoGames from "./screens/VideoGames";
import ScienceNature from "./screens/ScienceNature";
import Result from "./screens/Result";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Topics">
        <Stack.Screen component={Topics} name="Topics" />
        <Stack.Screen component={GK} name="GK" />
        <Stack.Screen component={Sports} name="Sports" />
        <Stack.Screen component={Computers} name="Computers" />
        <Stack.Screen component={VideoGames} name="VideoGames" />
        <Stack.Screen component={ScienceNature} name="ScienceAndNature" />
        <Stack.Screen component={Result} name="Result" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
