import React, { useMemo } from 'react';
import {
    View, Text, Modal
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'
import Button from '../Button';
import { useWindowDimensions } from 'react-native-web';
// import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

function AppModal({ shouldShow = false, onCloseModal = undefined }) {
    const { theme } = useTheme();
    const styles = useMemo(() => makeStyles(theme), [theme]);

    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();

    const closeModal = () => {
        onCloseModal?.()
    }

    // Note: 👇 This can be a `worklet` function.
    const onSelectColor = ({ hex }) => {
        // do something with the selected color.
        console.log(hex);
    };

    return (
        <Modal transparent visible={shouldShow} >
            <View style={{ width: width, height: height, ...styles.container }}>
                <View>
                    <Text style={styles.textStyle}>{'title'}</Text>

                    {/* <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
                        <Preview />
                    </ColorPicker> */}

                    <Button title='Close' backgroundColor={theme.getPrimary()} onPress={closeModal} />
                </View>
            </View>
        </Modal>
    );
}

export default AppModal