import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeApp } from './config/theme'
import { SessionContext } from './context/SessionContext'
import OutsideStack from './stack/OutsideStack'
import InsideStack from './stack/InsideStack'
import Lazy from './views/Lazy'

export default function AppContainer() {
    const Stack = createStackNavigator()

    const { event } = React.useContext(SessionContext)

    return (
        <NavigationContainer theme={ThemeApp}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {event === 'outdoor' && <Stack.Screen name='OutsideStack' component={OutsideStack} />}
                {event === 'indoor' && <Stack.Screen name='IndoorStack' component={InsideStack} />}
                {event === 'load' && <Stack.Screen name='Load' component={Lazy} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
