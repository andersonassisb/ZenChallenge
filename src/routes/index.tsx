import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/welcome'
import Main from '../screens/main'
import Rate from '../screens/rate'
import { Text, View } from 'react-native'
import { colors, metrics } from '../styles'

const Stack = createNativeStackNavigator()

const Routes: React.FC<{}> = () => (
  <Stack.Navigator
    initialRouteName='Welcome'
    screenOptions={{ gestureEnabled: false }}>
    <Stack.Screen
      name='Welcome'
      component={Welcome}
      options={{ header: () => null }}
    />
    <Stack.Screen
      name='Main'
      component={Main}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#FFF',
        headerTitle: () => (
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: metrics.doublePixel,
                color: colors.white,
                fontWeight: 'bold',
              }}>
              How are you feeling?
            </Text>
          </View>
        ),
      }}
    />
    <Stack.Screen
      name='Rate'
      component={Rate}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: '#000',
        headerTitle: () => <></>,
      }}
    />
  </Stack.Navigator>
)

export default Routes
