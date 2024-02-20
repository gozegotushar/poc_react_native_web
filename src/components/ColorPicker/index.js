import React, { useMemo, useState } from 'react';
import {
    View, Text
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'
import AppTextInput from '../AppTextInput';
import Spacing from '../Spacing';
import AppModal from '../AppModal';

function ColorPicker({ shouldShow = false, onCloseModal = undefined, onSavePressed = undefined }) {
    const { theme } = useTheme();
    const styles = useMemo(() => makeStyles(theme), [theme]);
    const [enteredColor, setEnteredColor] = useState("")

    const closeModal = () => {
        onCloseModal?.()
    }

    const onSaveClicked = () => {
        var reg = /^#([0-9a-f]{3}){1,2}$/i;
        let result = reg.test(enteredColor)
        if (!result) {
            alert("Invalid Color")
            return;
        }
        onCloseModal?.()
        onSavePressed?.(enteredColor)
    }

    const onSelectColor = (hex) => {
        setEnteredColor(hex)
    };

    return (
        <AppModal shouldShow={shouldShow} onCloseModal={closeModal} onSaveClicked={onSaveClicked}>
            <View>
                <Text style={styles.textStyle}>{'Color picker'}</Text>
                <Spacing height={20} />
                <AppTextInput onTextChanged={onSelectColor} />
                <Spacing height={20} />
            </View>
        </AppModal>
    );
}

export default ColorPicker