import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/Size';
import { font } from '../../styles/font';

export default (theme) =>
  StyleSheet.create({
    canvas: {
      flex: 1
    },
    btnText: {
      ...font.type.regular,
      fontSize: font.size.s,
      color: theme.getThemedText(),
      letterSpacing: 0.43,
    }
  });
