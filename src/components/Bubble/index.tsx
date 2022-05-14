import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

interface BubbleProps {
  emoji: string
  description: string
  onPress(): void
}

const Bubble: React.FC<BubbleProps> = ({
  emoji = '',
  description = '',
  onPress,
}) => {
  return (
    <TouchableOpacity
      testID={'bubble-button'}
      onPress={onPress}
      activeOpacity={0.15}
      style={styles.container}>
      <Text
        style={[
          styles.text,
          description.length <= 3
            ? styles.small
            : description.length > 3 && description.length <= 5
            ? styles.medium
            : styles.large,
        ]}>
        {emoji}
        {'\n'}
        {description}
      </Text>
    </TouchableOpacity>
  )
}

export default Bubble
