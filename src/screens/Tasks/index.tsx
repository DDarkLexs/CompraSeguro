import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComprasScreen from "./Orders";
import ListScreen from "./Products";
import { Routes } from "../../constants/enums";


const Stack = createNativeStackNavigator<StackScreen>();

const TaskStack: React.FC = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.ORDER}>
      <Stack.Screen name={Routes.ORDER} component={ComprasScreen} />
      <Stack.Screen name={Routes.PRODUCTS} component={ListScreen} />
      {/* 
        <Stack.Screen name="Settings" component={Settings} />
       */}
    </Stack.Navigator>
  );
};

export default TaskStack;
