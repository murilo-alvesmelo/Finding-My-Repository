import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Historico from "../screens/Historico";
import HomeStack from "./Stack";

const Tab = createBottomTabNavigator();

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
              size = focused ? 25 : 20;
            } else if (route.name === "Historico") {
              iconName = "clock-rotate-left";
              color = focused ? "#9400d3" : "#ccc";
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesomeIcon
                icon={["fas", iconName]}
                size={size}
                color={color}
              />
            );
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            marginHorizontal: 20,
            borderRadius: 30,
          },
          tabBarBackground: () => (
            <BlurView
              intensity={20}
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: 30,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
