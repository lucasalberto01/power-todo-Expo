import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/Header'
import Home from '../views/Home'
import NewTask from '../views/NewTask'
import Profile from '../views/Profile'

type RootStackParamList = {
    Home: undefined
    NewTask: undefined
    Profile: undefined
}

const TodoStack = createStackNavigator<RootStackParamList>()

function InsideStack() {
    return (
        <TodoStack.Navigator>
            <TodoStack.Screen options={{ header: () => <Header /> }} name='Home' component={Home} />
            <TodoStack.Screen name='NewTask' component={NewTask} />
            <TodoStack.Screen name='Profile' component={Profile} />
        </TodoStack.Navigator>
    )
}

export default InsideStack
