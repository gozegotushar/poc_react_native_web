import { deviceHeight, deviceWidth } from './DeviceConfig';

const percentageCalculation = (max, val) => max * (val / 100);
const scalingFactor = 1;

export const responsiveSize = (s) => {
  return percentageCalculation(Math.min(deviceHeight, deviceWidth), s) / scalingFactor;
};
