import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import InfoRepos from "./screens/InfoRepositorio";
const Stack = createNativeStackNavigator();

export default function Nagivation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoRepos"
          component={InfoRepos}
          options={{ title: "Informações" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
