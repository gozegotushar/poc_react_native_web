import { Dimensions } from 'react-native';

export const dimension = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const size = {
  thinLine: 1,
  hitSlop: { top: 10, left: 10, bottom: 10, right: 10 },
  textHitSlop: { top: 20, left: 20, bottom: 20, right: 20 },
  progressBarHeight: dimension.fullHeight * 0.017,
};

export const aspectRatio =
  Dimensions.get('window').height / Dimensions.get('window').width;
