import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, SafeAreaView, Alert, Platform, ScrollView } from 'react-native'
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import Button from '../../components/Button'
import Rating from '../../components/Rating'
import Success from '../../components/Success'
import { ratings } from '../../__mocks__/ratings'
import { handleFeelingIntensity } from '../../utils/functions'
import styles from './styles'
import { metrics } from '../../styles'

interface EnumFeeling {
  emoji: string
  text: string
}

const Rate: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const route: RouteProp<
    { params: { emoji: string; text: string } },
    'params'
  > = useRoute()
  const [feeling, setFeeling] = useState<EnumFeeling | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [rate, setRate] = useState(0)

  useEffect(() => {
    if (route) {
      const {
        params: { emoji, text },
      } = route
      setFeeling({ emoji, text })
    }
  }, [route])

  const onNextPress = () => {
    if (rate === 0) {
      return Alert.alert('Warning', 'Please, select the intensity.')
    }
    setIsVisible(true)
    setRate(0)
  }

  const onDismissModal = useCallback(() => {
    navigation.push('Main')
    setIsVisible(false)
  }, [navigation])

  const renderContent = () => (
    <ScrollView style={{flexGrow: 1}}>
      <Success
        isVisible={isVisible}
        text={'Saved successfully!'}
        subText={'Amazing! Repeat as many times as you want. 😉'}
        onPress={() => onDismissModal()}
      />
      <View style={styles.wrapperContentHeader}>
        <Text style={styles.emojiText}>{feeling?.emoji}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>I'm feeling</Text>
          <Text style={styles.feelingText}>
            {handleFeelingIntensity(rate)} {feeling?.text}
          </Text>
          <Text style={styles.subTitle}>
            Choose the intensity of your feeling
          </Text>
        </View>
      </View>
      <View style={styles.wrapperContentBody}>
        {ratings.length > 0 && (
          <View style={styles.rateContainer}>
            {ratings.map((item) => (
              <Rating
                key={item.text}
                rate={rate}
                setRate={setRate}
                value={item.value}
                text={item.text}
                percent={item.percent}
              />
            ))}
          </View>
        )}
        <View style={styles.buttonContainer}>
          <Button
            primaryTextButton
            text={'Next'}
            onPress={() => onNextPress()}
          />
        </View>
      </View>
    </ScrollView>
  )

  if (Platform.OS === 'ios')
    return (
      <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
    )

  return (
    <View style={[styles.container, { marginTop: metrics.pixel * 7 }]}>
      {renderContent()}
    </View>
  )
}

export default Rate
