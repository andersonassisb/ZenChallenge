import React from 'react'
import { Modal, View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import Button from '../Button'
import styles from './styles'

interface SuccessProps {
  isVisible: boolean
  text: string
  subText: string
  onPress(): void
}

const Success: React.FC<SuccessProps> = ({
  isVisible,
  text,
  subText,
  onPress,
}) => {
  return (
    <Modal
      style={styles.modalContainer}
      animationType='slide'
      visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieView
            source={require('../../assets/success.json')}
            loop
            autoPlay
          />
        </View>
        <Text style={styles.headerText}>{text}</Text>
        <Text style={styles.subHeaderText}>{subText}</Text>
        <View style={styles.closeButton}>
          <Button primary text={'Keep evaluating!'} onPress={onPress} />
        </View>
      </View>
    </Modal>
  )
}

export default Success
