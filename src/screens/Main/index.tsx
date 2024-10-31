// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
// import {Routes} from 'app/constants/enums';
// import ProfileNavigator from 'app/screens/cliente/Home/Perfil/Index';
// import React from 'react';
// import {Icon, useTheme} from 'react-native-paper';
// import Home from './Home';
import { Ionicons } from "@expo/vector-icons";
import { Routes } from "../../constants/enums";

const Tab = createMaterialBottomTabNavigator<StackScreen>();

const MainBottomTabStack: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      activeIndicatorStyle={{
        backgroundColor: theme.colors.background,
        borderRadius: 5,
        height: 0,
      }}
      shifting={true}
      barStyle={{
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // shadowColor: theme.colors.inversePrimary,
        shadowOffset: { width: 0, height: 1.2 },
      }}
      style={{ borderRadius: 1 }}
      activeColor={theme.colors.inversePrimary}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.TASKS}
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon source={"home"} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
};
export default MainBottomTabStack;
