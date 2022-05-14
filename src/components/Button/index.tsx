import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface ButtonProps {
  text: string
  onPress(): void
  primary?: boolean
  primaryTextButton?: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  primary,
  primaryTextButton,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        primary ? styles.primaryButton : styles.secondaryButton,
      ]}
      onPress={onPress}>
      <Text
        style={[
          primaryTextButton
            ? styles.primaryTextButton
            : styles.secondaryTextButton,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
