import React, { useMemo } from 'react';
import {
        View,
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'
import { TextInput } from 'react-native-web';

function ScreenUtility(props) {
        const { theme } = useTheme();
        const styles = useMemo(() => makeStyles(theme), [theme]);

        return (<View >
                <TextInput {...props} />;
        </View>);
}

export default ScreenUtility