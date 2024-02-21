import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import { responsiveSize } from '../../utils/Size';

function Button({
  onPress = undefined,
  width = responsiveSize(70),
  minWidth = responsiveSize(40),
  height = responsiveSize(13),
  title = 'click me',
  backgroundColor,
  customContainerStyle = {}
}) {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          ...styles.buttonStyle,
          width: width,
          minWidth: minWidth,
          height: height,
          backgroundColor: backgroundColor,
          ...styles.buttonContainerStyle,
          ...customContainerStyle
        }}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default Button;
