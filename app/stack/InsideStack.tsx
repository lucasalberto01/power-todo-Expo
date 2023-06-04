import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/HeaderHome'
import { IList } from '../types/list.type'
import Home from '../views/Home'
import ListDetails from '../views/ListDetails'
import Profile from '../views/Profile'

type RootStackParamList = {
    Home: undefined
    ListDetails: { item?: IList }
    Profile: undefined
}

const TodoStack = createStackNavigator<RootStackParamList>()

function InsideStack() {
    return (
        <TodoStack.Navigator>
            <TodoStack.Screen options={{ header: () => <Header /> }} name='Home' component={Home} />
            <TodoStack.Screen name='ListDetails' component={ListDetails} />
            <TodoStack.Screen name='Profile' component={Profile} />
        </TodoStack.Navigator>
    )
}

export default InsideStack
