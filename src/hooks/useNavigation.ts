import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ParamListBase = StackScreen;

export const useAppNavigation = () =>
  useNavigation<NavigationProp<ParamListBase>>();
export const useAppRoute = <T extends keyof ParamListBase>() =>
  useRoute<RouteProp<ParamListBase, T>>();
