import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import InfoRepos from "./screens/InfoRepositorio";
import Historico from "./screens/Historico";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
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
  );
}

export default function Nagivation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#9400d3",
          tabBarInactiveTintColor: "#ccc",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "#9400d3" : "#ccc";
            } else if (route.name === "Historico") {
              iconName = "clock-rotate-left";
              color = focused ? "#9400d3" : "#ccc";
            }
            return (
              <FontAwesomeIcon
                icon={["fas", iconName]}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
