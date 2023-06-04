import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppContainer from './AppContainer'
import { SessionProvider } from './context/SessionContext'

const Providers: React.FC = () => {
    return (
        <SafeAreaProvider>
            <SessionProvider>
                <AppContainer />
            </SessionProvider>
        </SafeAreaProvider>
    )
}

export default Providers
