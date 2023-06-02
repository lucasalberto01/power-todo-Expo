import { createStackNavigator } from '@react-navigation/stack'
import Login from '../views/Login'
import Register from '../views/Register'

const TodoOutsideStack = createStackNavigator()

function OutsideStack() {
    return (
        <TodoOutsideStack.Navigator screenOptions={{ headerShown: false }}>
            <TodoOutsideStack.Screen name='Login' component={Login} />
            <TodoOutsideStack.Screen name='Register' component={Register} />
        </TodoOutsideStack.Navigator>
    )
}

export default OutsideStack
