import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.doublePixel * 1.8,
    backgroundColor: colors.primary,
  },
  wrapper: {
    width: '100%',
    height: 'auto',
    backgroundColor: colors.white,
  },
  starLabelOutlined: {
    textAlign: 'center',
    fontSize: metrics.pixel * 1.5,
    color: colors.black,
    fontWeight: '500',
    opacity: 0.8,
    marginHorizontal: metrics.doublePixel * 1.5,
    marginVertical: metrics.doublePixel,
  },
  starLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: metrics.pixel * 1.5,
    color: colors.primaryDark,
    opacity: 1,
    fontWeight: 'bold',
    marginHorizontal: metrics.doublePixel * 1.5,
    marginVertical: metrics.doublePixel,
  },
  starWrapper: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingTop: metrics.doublePixel,
  },
  starImageOutlined: {
    width: metrics.fourFoldPixel,
    alignSelf: 'center',
    height: metrics.fourFoldPixel,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  starImage: {
    width: metrics.fourFoldPixel,
    alignSelf: 'center',
    height: metrics.fourFoldPixel,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textContainer: { width: '100%', backgroundColor: colors.white },
  starContainer: { alignItems: 'center', justifyContent: 'center' },
})

export default styles
