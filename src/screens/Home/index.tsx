// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
// import {Routes} from 'app/constants/enums';
// import ProfileNavigator from 'app/screens/cliente/Home/Perfil/Index';
// import React from 'react';
// import {Icon, useTheme} from 'react-native-paper';
// import Home from './Home';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabStack: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
     
      shifting={true}
      activeColor={theme.colors.primary}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen
        name={"HOME"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={"DASHBOARD"}
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};
export default MainBottomTabStack;
