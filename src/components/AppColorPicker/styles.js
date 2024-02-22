import {
        StyleSheet,
} from 'react-native';
import { responsiveSize } from '../../utils/Size';
import { buttonBorderRadius } from '../../utils/DeviceConfig';

export default theme => StyleSheet.create({
        container: {
                backgroundColor: 'black',
                opacity: .8,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center'
        },
        textStyle: {

        },
        colorPickerCcontainer: {
                flex: 1,
                backgroundColor: '#e8e8e8',
                paddingBottom: 0,
                width: '100%',
                maxWidth: 500,
                margin: 'auto',
        },
        sliderLabel: {
                fontSize: 20,
                color: '#000',
                marginBottom: 10,
        },
        previewStyle: {
                height: 55,
                borderRadius: 50,
                marginBottom: 30,
        },
        shadow: {
                shadowColor: '#000',
                shadowOffset: {
                        width: 0,
                        height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
        },
});