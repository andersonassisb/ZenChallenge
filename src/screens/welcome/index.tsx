import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated'
import Logo from '../../assets/images/logo.png'
import Button from '../../components/Button'
import styles from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const rotation = useSharedValue(0)
  const scale = useSharedValue(1)

  React.useEffect(() => {
    if (scale) {
      scale.value = withTiming(0.5, {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      })
      setTimeout(() => {
        scale.value = withTiming(1, {
          duration: 3000,
          easing: Easing.out(Easing.exp),
        })
      }, 3000);
    }
  }, [scale])

  React.useEffect(() => {
    if (rotation) {
      rotation.value = withTiming(360, {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [rotation])

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scale.value),
        },
      ],
    }
  })

  const animatedImageStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={animatedViewStyles}>
        <Animated.Image source={Logo} style={animatedImageStyles} />
      </Animated.View>
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
