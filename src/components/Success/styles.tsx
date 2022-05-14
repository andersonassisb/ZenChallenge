import { StyleSheet, Dimensions } from 'react-native'
import { colors, metrics } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(96, 72, 201,0.2)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.doublePixel,
  },
  headerText: {
    fontSize: metrics.doublePixel * 1.25,
    color: colors.primaryDark,
    lineHeight: metrics.fourFoldPixel,
    textAlign: 'center',
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: metrics.doublePixel,
    color: colors.black,
    opacity: 0.8,
    lineHeight: metrics.triplePixel,
    textAlign: 'center',
    alignItems: 'center',
  },
  animation: {
    width: width * 0.8,
    height: height * 0.5,
  },
  closeButton: {
    marginVertical: metrics.triplePixel,
  },
})

export default styles
