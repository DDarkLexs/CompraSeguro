import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import {createSchema} from './database/Schema';
import AppNavigation from './navigation';
import {store} from './store/index';
import {dark, light} from './styles/theme';

SplashScreen.preventAutoHideAsync(); // Previne a splash screen de fechar automaticamente

function App(): JSX.Element {
    const theme = useColorScheme() == 'light' ? light : dark;

    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
            'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
            'Nunito-light': require('../assets/fonts/Nunito-Light.ttf'),
            'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
        });
        setFontsLoaded(true);

        await SplashScreen.hideAsync(); // Oculta a splash screen após o carregamento das fontes
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
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <StoreProvider store={store}>
                    <View style={{flex: 1}}>
                        <AppNavigation />
                    </View>
                </StoreProvider>
            </PaperProvider>
        </SafeAreaProvider>
    );
}

export default App;

/* 
npx expo run:android --variant release
npx expo run:ios --configuration Release


*/
