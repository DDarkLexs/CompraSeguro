const {Routes} = Modules;
declare type StackScreen = {
  [Routes.MAIN]: undefined;
  [Routes.PRODUCTS]: {id_compra: number};
  [Routes.TASKS]: undefined;
  [Routes.HOME]: undefined;
  [Routes.CALENDAR]: undefined;
  [Routes.NEW_TASK]: undefined;
  [Routes.DASHBOARD]: undefined;
  [Routes.NOTIFICATION]: undefined;
  [Routes.ORDER]: undefined;
  [Routes.PRODUCTS]: undefined;
  [Routes.NEW_PRODUCT]: {id_compra: number};
};