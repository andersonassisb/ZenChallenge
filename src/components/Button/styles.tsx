import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    width: metrics.fiveFoldPixel * 7,
    height: metrics.triplePixel * 2.5,
    padding: metrics.doublePixel * 1.125,
    borderRadius: metrics.fourFoldPixel,
    marginHorizontal: metrics.pixel,
    marginTop: metrics.fourFoldPixel,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.white,
  },
  primaryTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primary,
    fontWeight: 'bold',
  },
  secondaryTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.white,
    fontWeight: 'bold',
  },
})

export default styles
