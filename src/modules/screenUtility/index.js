import React, { useMemo, useState } from 'react';
import {
        View,
} from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme'
import { TextInput } from 'react-native-web';
import Button from '../../components/Button';
import Spacing from '../../components/Spacing';
import AppModal from '../../components/AppModal';

function ScreenUtility(props) {
        const { theme } = useTheme();
        const styles = useMemo(() => makeStyles(theme), [theme]);
        const [showColorPicker, setShowColorPicker] = useState(false)

        const onPrimaryColorChangeClicked = () => {
                setShowColorPicker(!showColorPicker)
        }

        const onSecondaryColorChangeClicked = () => {
                setShowColorPicker(!showColorPicker)
        }

        const onCloseModal = () => {
                setShowColorPicker(false)
        }

        return (<View style={{ padding: 10 }} >
                <Button title='Select Primary Color' backgroundColor={theme.getPrimary()} onPress={onPrimaryColorChangeClicked} />
                <Spacing height={10} />
                <Button title='Select Secondary Color' backgroundColor={theme.getSecondary()} onPress={onSecondaryColorChangeClicked} />
                <Spacing height={10} />
                <AppModal shouldShow={showColorPicker} onCloseModal={onCloseModal} />
        </View>);
}

export default ScreenUtility