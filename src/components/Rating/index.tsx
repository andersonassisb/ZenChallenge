import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import star from '../../assets/images/star.png'
import starOutlined from '../../assets/images/star-outlined.png'
import styles from './styles'

interface RatingProps {
  rate: number
  setRate: Function
  value: number
  text: string
  percent: number
}

const Rating: React.FC<RatingProps> = ({
  rate,
  setRate,
  value,
  text,
  percent,
}) => {
  const hasRate = (value: number) => {
    return rate >= value
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.textContainer}>
          <Text
            style={
              hasRate(value) ? styles.starLabel : styles.starLabelOutlined
            }>
            {percent}%{'\n'}|
          </Text>
        </View>
        <View style={styles.starWrapper}>
          <TouchableOpacity
            style={styles.starContainer}
            onPress={() => {
              setRate(value)
            }}>
            <Image
              source={hasRate(value) ? star : starOutlined}
              style={
                hasRate(value) ? styles.starImage : styles.starImageOutlined
              }
            />
          </TouchableOpacity>
          <Text
            style={
              hasRate(value) ? styles.starLabel : styles.starLabelOutlined
            }>
            {text}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Rating
