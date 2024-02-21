import { StyleSheet } from 'react-native';
import {
  borderRadius,
  borderWidth,
  deviceBGColor,
  deviceBorderColor,
  deviceHeight,
  deviceWidth,
  notchBorder,
  notchColor,
  notchHeight,
  notchMarginTop,
  notchWidth,
  screenColor
} from '../../utils/DeviceConfig';

const styles = StyleSheet.create({
  canvas: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: deviceBGColor,
    borderRadius: borderRadius
  },
  borderLayer: {
    margin: borderWidth,
    flex: 1,
    borderRadius: borderRadius,
    backgroundColor: deviceBorderColor
  },
  screen: {
    margin: borderWidth,
    flex: 1,
    borderRadius: borderRadius,
    backgroundColor: screenColor
  },
  notch: {
    position: 'absolute',
    width: notchWidth,
    height: notchHeight,
    backgroundColor: notchColor,
    borderRadius: notchBorder,
    marginTop: notchMarginTop
  }
});

export default styles;
