import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import Login from "../views/Login";

const TodoOutsideStack = createStackNavigator();

function OutsideStack() {
  return (
    <TodoOutsideStack.Navigator screenOptions={{ headerShown: false }}>
      <TodoOutsideStack.Screen name="Login" component={Login} />
    </TodoOutsideStack.Navigator>
  );
}

export default OutsideStack;
