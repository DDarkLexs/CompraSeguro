import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComprasScreen from "./Orders";
import ListScreen from "./Products";
import { Routes } from "../../constants/enums";
import CreateProductScreen from "./AddProduct";
import UpdateProductScreen from "./Edit";


const Stack = createNativeStackNavigator<StackScreen>();

const TaskStack: React.FC = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.ORDER}>
            <Stack.Group>
      <Stack.Screen name={Routes.ORDER} component={ComprasScreen} />
      <Stack.Screen name={Routes.PRODUCTS} component={ListScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Routes.NEW_PRODUCT} component={CreateProductScreen} />
        <Stack.Screen name={Routes.UPDATE_PRODUCT} component={UpdateProductScreen} />
      </Stack.Group>
      {/* 
        <Stack.Screen name="Settings" component={Settings} />
       */}
    </Stack.Navigator>
  );
};

export default TaskStack;
