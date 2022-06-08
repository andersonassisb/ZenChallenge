import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
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
  const scaleContent = useSharedValue(0)
  const opacity = useSharedValue(0)
  const bottom = useSharedValue(-60)

  React.useEffect(() => {
    if (rotation) {
      rotation.value = withTiming(360, {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [rotation])

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
      }, 3000)
    }
  }, [scale])

  React.useEffect(() => {
    if (scaleContent) {
      scaleContent.value = withTiming(1, {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [scaleContent])

  React.useEffect(() => {
    if (opacity) {
      opacity.value = withTiming(1, {
        duration: 2000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [opacity])

  React.useEffect(() => {
    if (bottom) {
      bottom.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [bottom])

  const animatedContainerViewStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

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
          rotateZ: withSpring(`${rotation.value}deg`),
        },
      ],
    }
  })

  const animatedWrapperStyles = useAnimatedStyle(() => {
    return {
      bottom: withSpring(bottom.value),
    }
  })

  const animatedWrapperScaleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scaleContent.value),
        },
      ],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedContainerViewStyles]}>
      <Animated.View style={animatedViewStyles}>
        <Animated.Image source={Logo} style={animatedImageStyles} />
      </Animated.View>
      <Animated.View
        style={[animatedWrapperStyles, animatedWrapperScaleStyles]}>
        <Text style={styles.title}>Welcome to the ZenChallenge!</Text>
        <Button
          onPress={() => navigation.navigate('Main')}
          primaryTextButton
          text={"Let's go there"}
        />
      </Animated.View>
    </Animated.View>
  )
}

export default Welcome
