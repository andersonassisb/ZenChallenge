import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import AppProvider from './hooks'
import Routes from './routes'
import { colors } from './styles'

const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.primary} />
        <Routes />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App
