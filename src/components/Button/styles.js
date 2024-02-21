import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/Size';
import { buttonBorderRadius } from '../../utils/DeviceConfig';

export default (theme) =>
  StyleSheet.create({
    buttonStyle: {
      height: responsiveSize(13),
      backgroundColor: theme.getPrimary()
    },
    buttonContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: buttonBorderRadius
    },
    textStyle: {
      color: theme.getThemedText()
    }
  });
