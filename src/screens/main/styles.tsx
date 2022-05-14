import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  feelingsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: metrics.pixel,
    paddingTop: metrics.triplePixel,
  },
})

export default styles
