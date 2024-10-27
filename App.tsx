/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, useColorScheme } from "react-native";
import {Provider as StoreProvider} from 'react-redux';
// import AppNavigator from './navigation';
// import Toast from 'react-native-toast-message';
// import { toastConfig } from './src/components/layout/Toast/CustomToast';
import { store } from './src/store/index';

function App(): JSX.Element {
  const theme = useColorScheme() == 'light' ? 'light' : 'dark';
  return (
      <StoreProvider store={store}>
          <SafeAreaView style={{flex: 1}}>

          </SafeAreaView>
      </StoreProvider>
  );
}

export default App;
