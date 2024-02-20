import { PrimaryColor, SecondaryColor } from '../../../../utils/DeviceConfig';

export const getPrimaryColor = state => {
  let primaryColor = state.overriddenConfigReducer?.local?.primaryColor
  if (primaryColor === undefined) {
    primaryColor = PrimaryColor
  }
  return primaryColor
};

export const getSecondaryColor = state => {
  let secondaryColor = state.overriddenConfigReducer?.local?.secondaryColor
  if (secondaryColor === undefined) {
    secondaryColor = SecondaryColor
  }
  return secondaryColor
};
