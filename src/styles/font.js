import { Platform } from 'react-native';
import { dimension } from './dimension';

export const fontWeight = {
  Thin: '100',
  UltraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '600',
  Bold: '700',
  Heavy: '800',
  Black: '900',
};

// https://github.com/DaniAkash/react-native-responsive-dimensions
export const responsiveFontSize = f => {
  let result =
    Math.sqrt(
      dimension.fullHeight * dimension.fullHeight +
      dimension.fullWidth * dimension.fullWidth,
    ) *
    (f / 100);
  return dimension.fullWidth > 321
    ? Math.round(result * 10) / 10
    : Math.round(result * 10) / 10 + 2.5;
};

export const font = {
  size: {
    xxxxl: responsiveFontSize(10),
    xxxl: responsiveFontSize(8),
    xxl: responsiveFontSize(4),
    xl: responsiveFontSize(2.6),
    l: responsiveFontSize(2.3),
    m: responsiveFontSize(1.9),
    s: responsiveFontSize(1.68),
    xs: responsiveFontSize(1.54),
    xxs: responsiveFontSize(1.37),
    xxxs: responsiveFontSize(1.2),
    xxxxs: responsiveFontSize(1.1),
  },
  lineHeight: fontSize => fontSize * 1.172,
  type: {
    light: {
      fontFamily: 'Roboto-Light',
      fontStyle: 'normal',
      fontWeight: fontWeight.Light,
      letterSpacing: 0,
    },
    regular: {
      fontFamily: 'Roboto-Regular',
      fontStyle: 'normal',
      fontWeight: fontWeight.Regular,
      letterSpacing: 0,
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontStyle: 'normal',
      fontWeight: fontWeight.Medium,
      letterSpacing: 0,
    },
    // fontWeight has no effect in android, also if fontWeight is 700, 800 or 900
    // then in android device it will default back to system font
    // https://github.com/facebook/react-native/issues/26193#issuecomment-926383825
    bold: {
      fontFamily: 'Roboto-Bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      ...Platform.select({
        ios: {
          fontWeight: fontWeight.Bold,
        },
      }),
    },
  },
};
