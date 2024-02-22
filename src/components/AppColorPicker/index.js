import React, { useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import AppTextInput from '../AppTextInput';
import Spacing from '../Spacing';
import AppModal from '../AppModal';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import { rgbToHex } from '../../utils/ColorUtils';

function AppColorPicker({ shouldShow = false, onCloseModal = undefined, onSavePressed = undefined, title = 'Color picker', initialColor = 'red'
}) {
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

  useEffect(() => {

  }, [])

  const onSelectColor = ({ rgb }) => {
    let color = rgbToHex(rgb)
    console.log("onSelectColor : ", color)
    setEnteredColor(color);
  };

  return (
    <AppModal shouldShow={shouldShow} onCloseModal={closeModal} onSaveClicked={onSaveClicked}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textStyle}>{title}</Text>
        <Spacing height={20} />
        <ColorPicker
          thumbAnimationDuration={400}
          style={{ width: '70%' }} value={initialColor} onComplete={onSelectColor}>

          <View>
            <Text>Preview</Text>
            <Preview disableOpacityTexture={true} />
          </View>
          <Spacing height={20} />
          <View>
            <Text>Panel</Text>
            <Panel1 />
          </View>
          <Spacing height={20} />
          <View>
            <Text>HueSlider</Text>
            <HueSlider />
          </View>
          <Spacing height={20} />
          <View>
            <Text>Opacity</Text>
            <OpacitySlider />
          </View>
          <Spacing height={20} />
          <View>
            <Text>Swatches</Text>
            <Swatches />
          </View>

        </ColorPicker>
      </View>
    </AppModal>
  );
}

export default AppColorPicker;
