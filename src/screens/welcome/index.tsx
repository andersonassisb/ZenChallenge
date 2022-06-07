import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import Animated, { Easing } from 'react-native-reanimated'
import Logo from '../../assets/images/logo.png'
import Button from '../../components/Button'
import styles from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const rotation = React.useRef(new Animated.Value(0))
  const scale = React.useRef(new Animated.Value(1))
  const opacity = React.useRef(new Animated.Value(0))
  const bottom = React.useRef(new Animated.Value(-60))

  React.useEffect(() => {
    if (rotation) {
      Animated.timing(rotation.current, {
        toValue: 2 * Math.PI,
        duration: 3000,
        easing: Easing.out(Easing.exp),
      }).start()
    }
  }, [rotation])

  React.useEffect(() => {
    if (scale) {
      Animated.timing(scale.current, {
        toValue: 0.5,
        duration: 3000,
        easing: Easing.out(Easing.exp),
      }).start()
      setTimeout(() => {
        Animated.timing(scale.current, {
          toValue: 1,
          duration: 3000,
          easing: Easing.out(Easing.exp),
        }).start()
      }, 3000)
    }
  }, [scale])

  React.useEffect(() => {
    if (opacity) {
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: 2000,
        easing: Easing.out(Easing.exp),
      }).start()
    }
  }, [opacity])

  React.useEffect(() => {
    if (bottom) {
      Animated.timing(bottom.current, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.exp),
      })
    }
  }, [bottom])

  const animatedContainerViewStyles = {
    opacity: opacity.current,
  }

  const animatedViewStyles = {
    transform: [
      {
        scale: scale.current,
      },
    ],
  }

  const animatedImageStyles = {
    transform: [
      {
        rotateZ: rotation.current,
      },
    ],
  }

  const animatedWrapperStyles = {
    bottom: bottom.current,
  }

  return (
    <Animated.View style={[styles.container, animatedContainerViewStyles]}>
      <Animated.View style={animatedViewStyles}>
        <Animated.Image source={Logo} style={animatedImageStyles} />
      </Animated.View>
      <Animated.View style={animatedWrapperStyles}>
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
