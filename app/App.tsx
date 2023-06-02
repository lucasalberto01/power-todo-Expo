import React from 'react'
import AppContainer from './AppContainer'
import { SessionProvider } from './context/SessionContext'

const Providers: React.FC = () => {
    return (
        <SessionProvider>
            <AppContainer />
        </SessionProvider>
    )
}

export default Providers
