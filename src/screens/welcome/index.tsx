import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import LottieView from 'lottie-react-native'
import Button from '../../components/Button'
import styles from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animation}>
        <LottieView
          source={require('../../assets/welcome.json')}
          loop
          autoPlay
        />
      </View>
      <Text style={styles.title}>Welcome to the ZenChallenge!</Text>
      <Button
        onPress={() => navigation.navigate('Main')}
        primaryTextButton
        text={"Let's go there"}
      />
    </SafeAreaView>
  )
}

export default Welcome
