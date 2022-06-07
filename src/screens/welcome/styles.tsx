import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  animation: {
    width: width * 0.8,
    height: height * 0.5,
  },
  title: {
    fontSize: metrics.triplePixel,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: metrics.triplePixel,
    height: metrics.fourFoldPixel,
  },
})

export default styles
