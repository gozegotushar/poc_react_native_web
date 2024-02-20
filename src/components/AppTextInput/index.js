import React, { useMemo, useState } from 'react';
import {
    View,
} from 'react-native';
import { TextInput } from 'react-native-web';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'
import { responsiveSize } from '../../utils/Size';

function AppTextInput({ width = responsiveSize(50), height = responsiveSize(13), onTextChanged = undefined, placeholder = "Enter Text" }) {
    const { theme } = useTheme();
    const styles = useMemo(() => makeStyles(theme), [theme]);

    const [text, onChangedText] = useState("")

    const _onTextChanged = (text) => {
        onChangedText(text)
        onTextChanged?.(text)
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={_onTextChanged}
                placeholder={placeholder}
                value={text}
                style={{
                    width: width,
                    height: height,
                    paddingHorizontal: 8,
                }} />
        </View>
    );
}

export default AppTextInput