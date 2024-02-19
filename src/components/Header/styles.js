import {
        StyleSheet,
} from 'react-native';
import { responsiveSize } from '../../utils/Size';

export default theme => StyleSheet.create({
        header: {
                height: responsiveSize(13),
                paddingTop: responsiveSize(8),
                paddingHorizontal: responsiveSize(2),
                backgroundColor: theme.getPrimary(),
        }
});