import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import makeStyles from './styles';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks/theme';
import Button from '../../components/Button';
import Spacing from '../../components/Spacing';
import AppColorPicker from '../../components/AppColorPicker';
import { setPrimaryColor, setSecondaryColor } from '../../store/features/overriddenConfig/actions';

function ScreenUtility(props) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const styles = useMemo(() => makeStyles(theme), [theme]);
  const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false);
  const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false);

  const onPrimaryColorChangeClicked = () => {
    setShowPrimaryColorPicker(!showPrimaryColorPicker);
  };

  const onSecondaryColorChangeClicked = () => {
    setShowSecondaryColorPicker(!showSecondaryColorPicker);
  };

  const onCloseModal = () => {
    setShowPrimaryColorPicker(false);
    setShowSecondaryColorPicker(false);
  };

  const savePrimaryColor = (color) => {
    dispatch(setPrimaryColor(color));
  };

  const saveSecondaryColor = (color) => {
    dispatch(setSecondaryColor(color));
  };

  return (
    <View style={{ padding: 10 }}>
      <Button
        title="Select Primary Color"
        backgroundColor={theme.getPrimary()}
        onPress={onPrimaryColorChangeClicked}
      />
      <Spacing height={10} />
      <Button
        title="Select Secondary Color"
        backgroundColor={theme.getSecondary()}
        onPress={onSecondaryColorChangeClicked}
      />
      <Spacing height={10} />
      <AppColorPicker
        initialColor={theme.getPrimary()}
        title={'Pick primary color'}
        shouldShow={showPrimaryColorPicker}
        onCloseModal={onCloseModal}
        onSavePressed={savePrimaryColor}
      />
      <AppColorPicker
        initialColor={theme.getSecondary()}
        title={'Pick secondary color'}
        shouldShow={showSecondaryColorPicker}
        onCloseModal={onCloseModal}
        onSavePressed={saveSecondaryColor}
      />
    </View>
  );
}

export default ScreenUtility;
