import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: colors.white,
  },
  wrapperContentHeader: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.pixel,
  },
  emojiText: {
    fontSize: metrics.pixel * 6,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: metrics.doublePixel,
  },
  title: {
    textAlign: 'center',
    fontSize: metrics.triplePixel,
    color: colors.black,
    fontWeight: 'bold',
  },
  feelingText: {
    textAlign: 'center',
    fontSize: metrics.triplePixel,
    color: colors.primaryDark,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  subTitle: {
    marginTop: metrics.pixel,
    textAlign: 'center',
    fontSize: metrics.pixel * 1.5,
    color: colors.black,
    opacity: 0.45,
    fontWeight: 'bold',
  },
  wrapperContentBody: {
    width: width,
    height: height * 0.70 - metrics.fiveFoldPixel * 4.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.pixel,
    backgroundColor: colors.primary,
    marginTop: metrics.fiveFoldPixel * 2.5,
  },
  rateContainer: {
    height: metrics.fiveFoldPixel * 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: metrics.triplePixel,
    marginBottom: metrics.doublePixel,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: metrics.fourFoldPixel,
  },
})

export default styles
