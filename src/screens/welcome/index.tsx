import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import Animated, { Easing } from 'react-native-reanimated'
import Logo from '../../assets/images/logo.png'
import Button from '../../components/Button'
import styles from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const layout = useWindowDimensions()
  const rotation = React.useRef(new Animated.Value(0))
  const scale = React.useRef(new Animated.Value(1))
  const opacity = React.useRef(new Animated.Value(0))
  const bottom = React.useRef(new Animated.Value(-60))
  const width = React.useRef(new Animated.Value(0))

  React.useEffect(() => {
    if (rotation) {
      Animated.timing(rotation.current, {
        toValue: 4 * Math.PI,
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
      }).start()
    }
  }, [bottom])

  React.useEffect(() => {
    if (width) {
      Animated.timing(width.current, {
        toValue: layout.width,
        duration: 1500,
        easing: Easing.out(Easing.linear),
      }).start()
    }
  }, [width])

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

  const animatedTitleStyles = {
    width: width.current,
  }

  return (
    <Animated.View style={[styles.container, animatedContainerViewStyles]}>
      <Animated.View style={animatedViewStyles}>
        <Animated.Image source={Logo} style={animatedImageStyles} />
      </Animated.View>
      <Animated.View style={animatedWrapperStyles}>
        <Animated.Text style={[styles.title, animatedTitleStyles]}>
          Welcome to the ZenChallenge!
        </Animated.Text>
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
