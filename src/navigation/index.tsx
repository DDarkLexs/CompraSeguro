// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { knex } from "../database";
import MainBottomTabStack from "../screens/Main";
import { sendLocalNotification } from "../utils/utils";

function HomeScreen() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const query = async () => {
    try {
      const data = await knex.raw("SELECT  1 + 1 as total");
      setCount(data[0].total);
      sendLocalNotification("Resultado", `Total: ${data[0].total}`, 2);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    query();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text>{count}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: "{Logo}",
          headerTitleAlign: "left",
          
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Main" component={MainBottomTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
