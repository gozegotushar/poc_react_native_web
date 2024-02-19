import {
    StyleSheet,
} from 'react-native';
import { responsiveSize } from '../../utils/Size';
import { borderRadius } from '../../utils/DeviceConfig';

export default theme =>
    StyleSheet.create({
        statusbar: {
            height: responsiveSize(15),
            backgroundColor: theme.getPrimary(),
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
        }
    });
