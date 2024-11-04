// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import { knex } from "../database";
import MainBottomTabStack from "../screens/Main";
import { sendLocalNotification } from "../utils/utils";
import CustomNavigationBar from "../components/Header/AppBar";
import { Routes } from "../constants/enums";
import NotificationScreen from "../screens/Notification";

const Stack = createNativeStackNavigator<StackScreen>();

function AppNavigation() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          header: (props) => <CustomNavigationBar {...props} />,
        }}
        initialRouteName={Routes.MAIN}
      >
        <Stack.Screen name={Routes.MAIN} component={MainBottomTabStack} />
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routes.NOTIFICATION}
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

