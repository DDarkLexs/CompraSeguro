/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, Text, useColorScheme } from "react-native";
import {Provider as StoreProvider} from 'react-redux';
import { store } from './src/store/index';

function App(): JSX.Element {
  const theme = useColorScheme() == 'light' ? 'light' : 'dark';
  return (
      <StoreProvider store={store}>
          <SafeAreaView style={{flex: 1}}>
              <Text> Ola mundo</Text>
          </SafeAreaView>
      </StoreProvider>
  );
}

export default App;
