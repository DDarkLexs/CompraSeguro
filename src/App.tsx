/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import AppNavigation from "./navigation";
import { store } from "./store/index";

function App(): JSX.Element {
  const theme = useColorScheme() == "light" ? "light" : "dark";
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigation />
        </SafeAreaView>
      </StoreProvider>
    </PaperProvider>
  );
}

export default App;
