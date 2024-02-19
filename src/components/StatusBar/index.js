import React, { useMemo } from 'react';
import {
        View,
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'

function StatusBar(props) {
        const { theme } = useTheme();
        const styles = useMemo(() => makeStyles(theme), [theme]);
        return (<View style={styles.statusbar} />);
}

export default StatusBar