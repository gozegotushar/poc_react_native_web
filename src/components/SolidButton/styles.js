import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/Size';
import { Colors } from '../../styles/color';
import { font } from '../../styles/font';

export const BUTTON_HEIGHT = responsiveSize(6);
export const SMALL_BUTTON_HEIGHT = responsiveSize(4);
export const BUTTON_WIDTH = responsiveSize(90);
export const DEFAULT_TEXT_COLOR = 'white';

export const getButtonStyle = (
  height,
  width,
  backgroundColor,
  borderColor,
  borderRadius,
  left,
  top,
) => ({
  backgroundColor,
  borderColor,
  height,
  width,
  borderRadius,
  borderWidth: borderColor ? responsiveSize(0.3) : 0,
  paddingHorizontal: width * 0.05,
  left,
  top,
  alignItems: 'center',
  justifyContent: 'center',
});

export default StyleSheet.create({
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: Colors.black15,
    shadowOffset: { width: 0, height: 2 },
  },
  bodyWithImage: {
    flexDirection: 'row',
  },
  middleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const themedStyles = theme =>
  StyleSheet.create({
    text: {
      fontSize: font.size.s,
      color: theme.getText(),
      ...font.type.regular,
    },
    smallText: {
      fontSize: font.size.xs,
      color: theme.getText(),
      ...font.type.regular,
    },
  });
