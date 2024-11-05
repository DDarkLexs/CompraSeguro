import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, useColorScheme, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import AppNavigation from "./navigation";
import { store } from "./store/index";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { dark, light } from "./styles/theme";
import {createSchema, dropTablesAndTriggers}  from "./database/Schema";
if (Platform.OS === 'ios') {
  
  SplashScreen.preventAutoHideAsync(); // Previne a splash screen de fechar automaticamente
}

function App(): JSX.Element {
   const theme = useColorScheme() == 'light' ?  light : dark;

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
      'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
      'Nunito-light': require('../assets/fonts/Nunito-Light.ttf'),
      'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    });
    setFontsLoaded(true);
    if (Platform.OS === 'ios') {
      await SplashScreen.hideAsync(); // Oculta a splash screen após o carregamento das fontes
    }
  };

  useEffect(() => {
    loadFonts();
    createSchema();
    // dropTablesAndTriggers();
  }, []);

  if (!fontsLoaded) {
    return <></>; // Retorna null enquanto as fontes carregam
  }

  return (
    <PaperProvider theme={theme}>
      <StoreProvider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigation />
        </View>
      </StoreProvider>
    </PaperProvider>
  );
}

export default App;


/* 
npx expo run:android --variant release
npx expo run:ios --configuration Release


*/