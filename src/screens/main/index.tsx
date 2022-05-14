import React, { useEffect } from 'react'
import { View, ScrollView, SafeAreaView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { useMainContext } from '../../hooks/main'
import Bubbles from '../../components/Bubble'
import api from '../../services/api'
import styles from './styles'
import { metrics } from '../../styles'

interface EnumFeeling {
  emoji: string
  text: string
}

const Main: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const { feelings, setFeelings } = useMainContext()

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        if (response.data) {
          const { data } = response
          const parsedData = JSON.parse(data)
          setFeelings(parsedData.feelings)
        }
      })
      .catch((error) => {
        console.log('TCL -> Main -> API', error)
        setFeelings([])
      })
  }, [setFeelings])

  const renderContent = () => (
    <ScrollView style={styles.container} testID={'feelings-list'}>
      <View style={styles.feelingsContainer}>
        {feelings && !!feelings.length ? (
          feelings.map((feeling: EnumFeeling) => (
            <Bubbles
              key={feeling.text}
              onPress={() =>
                navigation.navigate('Rate', {
                  emoji: feeling.emoji,
                  text: feeling.text,
                })
              }
              emoji={feeling.emoji}
              description={feeling.text}
            />
          ))
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  )

  if (Platform.OS === 'ios')
    return <SafeAreaView style={{flex: 1}}>{renderContent()}</SafeAreaView>

  return <View style={{ flex: 1, marginTop: metrics.pixel * 7 }}>{renderContent()}</View>
}
export default Main
