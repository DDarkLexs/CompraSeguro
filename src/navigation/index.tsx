// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { knex } from '../database';
import { sendLocalNotification } from '../utils/utils';

function HomeScreen() {
    const [count, setCount] = React.useState(0);
    const query = async () => {
        try {
            const data = await knex.raw("SELECT  1 + 1 as total")
            setCount(data[0].total)
            sendLocalNotification('Resultado', `Total: ${data[0].total}`, 2)
        }    catch (error) {
            console.log(error)
        }
    }
    React.useEffect(()=>{
        query()
    },[]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;