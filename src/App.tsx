/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, Text, useColorScheme } from "react-native";
import {Provider as StoreProvider} from 'react-redux';
import { store } from './store/index';
import AppNavigation from "./navigation";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const theme = useColorScheme() == 'light' ? 'light' : 'dark';
  return (
      <StoreProvider store={store}>
          <SafeAreaView style={{flex: 1}}>
              <AppNavigation />
          </SafeAreaView>
      </StoreProvider>
  );
}

export default App;
