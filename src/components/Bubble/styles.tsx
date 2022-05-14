import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 150,
    shadowRadius: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  small: {
    width: metrics.triplePixel * 3,
    height: metrics.triplePixel * 3,
    paddingTop: metrics.pixel * 2,
  },
  medium: {
    width: metrics.fourFoldPixel * 3,
    height: metrics.fourFoldPixel * 3,
    paddingTop: metrics.pixel * 3,
  },
  large: {
    width: metrics.fiveFoldPixel * 3,
    height: metrics.fiveFoldPixel * 3,
    paddingTop: metrics.pixel * 4,
  },
  text: {
    fontSize: metrics.doublePixel,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '500',
  },
})

export default styles
