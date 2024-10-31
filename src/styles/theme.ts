import {configureFonts, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
// import {MD3DarkTheme, MD3LightTheme} from '../modules';
import {fontConfig} from './font';

// the first object is dark mode, the second is light mode
const light = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
  roundness: 5,
  colors: {
  primary: "rgb(138, 81, 0)",
  onPrimary: "rgb(255, 255, 255)",
  primaryContainer: "rgb(255, 220, 189)",
  onPrimaryContainer: "rgb(44, 22, 0)",
  secondary: "rgb(0, 104, 116)",
  onSecondary: "rgb(255, 255, 255)",
  secondaryContainer: "rgb(151, 240, 255)",
  onSecondaryContainer: "rgb(0, 31, 36)",
  tertiary: "rgb(87, 99, 58)",
  onTertiary: "rgb(255, 255, 255)",
  tertiaryContainer: "rgb(219, 232, 181)",
  onTertiaryContainer: "rgb(21, 31, 1)",
  error: "rgb(186, 26, 26)",
  onError: "rgb(255, 255, 255)",
  errorContainer: "rgb(255, 218, 214)",
  onErrorContainer: "rgb(65, 0, 2)",
  background: "rgb(255, 251, 255)",
  onBackground: "rgb(32, 27, 22)",
  surface: "rgb(255, 251, 255)",
  onSurface: "rgb(32, 27, 22)",
  surfaceVariant: "rgb(242, 223, 208)",
  onSurfaceVariant: "rgb(80, 69, 58)",
  outline: "rgb(131, 117, 104)",
  outlineVariant: "rgb(213, 195, 181)",
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(53, 47, 43)",
  inverseOnSurface: "rgb(250, 239, 231)",
  inversePrimary: "rgb(255, 184, 109)",
  elevation: {
    level0: "transparent",
    level1: "rgb(249, 243, 242)",
    level2: "rgb(246, 237, 235)",
    level3: "rgb(242, 232, 227)",
    level4: "rgb(241, 231, 224)",
    level5: "rgb(239, 227, 219)"
  },
  surfaceDisabled: "rgba(32, 27, 22, 0.12)",
  onSurfaceDisabled: "rgba(32, 27, 22, 0.38)",
  backdrop: "rgba(57, 46, 37, 0.4)"
}
  
};
const dark = {
  ...MD3DarkTheme,
  fonts: configureFonts({config: fontConfig}),
  roundness: 2,
  colors: {
    primary: "rgb(255, 184, 109)",
    onPrimary: "rgb(73, 41, 0)",
    primaryContainer: "rgb(105, 60, 0)",
    onPrimaryContainer: "rgb(255, 220, 189)",
    secondary: "rgb(79, 216, 235)",
    onSecondary: "rgb(0, 54, 61)",
    secondaryContainer: "rgb(0, 79, 88)",
    onSecondaryContainer: "rgb(151, 240, 255)",
    tertiary: "rgb(191, 204, 155)",
    onTertiary: "rgb(42, 52, 16)",
    tertiaryContainer: "rgb(64, 75, 37)",
    onTertiaryContainer: "rgb(219, 232, 181)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(32, 27, 22)",
    onBackground: "rgb(235, 224, 217)",
    surface: "rgb(32, 27, 22)",
    onSurface: "rgb(235, 224, 217)",
    surfaceVariant: "rgb(80, 69, 58)",
    onSurfaceVariant: "rgb(213, 195, 181)",
    outline: "rgb(157, 142, 129)",
    outlineVariant: "rgb(80, 69, 58)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(235, 224, 217)",
    inverseOnSurface: "rgb(53, 47, 43)",
    inversePrimary: "rgb(138, 81, 0)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 35, 26)",
      level2: "rgb(50, 40, 29)",
      level3: "rgb(57, 44, 32)",
      level4: "rgb(59, 46, 32)",
      level5: "rgb(63, 49, 34)"
    },
    surfaceDisabled: "rgba(235, 224, 217, 0.12)",
    onSurfaceDisabled: "rgba(235, 224, 217, 0.38)",
    backdrop: "rgba(57, 46, 37, 0.4)"
  }
};

export {dark, light};
