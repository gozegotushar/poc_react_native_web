import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import AppTextInput from '../AppTextInput';
import Spacing from '../Spacing';
import AppModal from '../AppModal';
// import ColorPicker, {
//   Preview,
//   OpacitySlider,
//   BrightnessSlider,
//   HueSlider,
//   SaturationSlider,
// } from 'reanimated-color-picker';
function AppColorPicker({ shouldShow = false, onCloseModal = undefined, onSavePressed = undefined }) {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);
  const [enteredColor, setEnteredColor] = useState('');

  const closeModal = () => {
    onCloseModal?.();
  };

  const onSaveClicked = () => {
    var reg = /^#([0-9a-f]{3}){1,2}$/i;
    let result = reg.test(enteredColor);
    if (!result) {
      alert('Invalid Color');
      return;
    }
    onCloseModal?.();
    onSavePressed?.(enteredColor);
  };

  const onSelectColor = (hex) => {
    setEnteredColor(hex);
  };

  return (
    <AppModal shouldShow={shouldShow} onCloseModal={closeModal} onSaveClicked={onSaveClicked}>
      <View>
        {/* <Text style={styles.textStyle}>{'Color picker'}</Text>
        <Spacing height={20} />
        <AppTextInput onTextChanged={onSelectColor} />
        <Spacing height={20} /> */}
        {/* <ColorPicker
          style={{ width: '75%', justifyContent: 'center' }}
          sliderThickness={30}
          thumbSize={40}
          thumbShape="circle">
          <Preview
            style={[styles.previewStyle, styles.shadow]}
            textStyle={{ fontSize: 18 }}
            colorFormat="hex"
            hideInitialColor
          />
          <Text style={styles.sliderLabel}>Hue:</Text>
          <HueSlider
            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
          />
          <Text style={styles.sliderLabel}>Brightness:</Text>
          <BrightnessSlider
            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
          />
          <Text style={styles.sliderLabel}>Saturation:</Text>
          <SaturationSlider
            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
          />
          <Text style={styles.sliderLabel}>Opacity:</Text>
          <OpacitySlider
            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
          />
        </ColorPicker> */}
      </View>
    </AppModal>
  );
}

export default AppColorPicker;
