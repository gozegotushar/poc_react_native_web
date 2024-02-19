import React, { useMemo } from 'react';
import {
    View,
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'

function Header(props) {
    const { theme } = useTheme();
    const styles = useMemo(() => makeStyles(theme), [theme]);
    return (
        <View style={styles.header}>

        </View>
    );
}

export default Header