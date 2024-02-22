// import { debounce } from 'lodash';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  Pressable,
  View,
  Image
} from 'react-native';
// import { darken, Images } from '@styles';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import styles, {
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  DEFAULT_TEXT_COLOR,
  getButtonStyle,
  SMALL_BUTTON_HEIGHT,
  themedStyles,
} from './styles';
import { darken } from '../../styles/color';

const ANDROID_VERSION_LOLLIPOP = 21;

class CoreSolidButton extends React.Component {
  state = {
    imageSize: this.props.height * 0.55,
  };

  generateContainerStyle = () => {
    const {
      height,
      width,
      backgroundColor,
      withShadow,
      borderColor,
      borderRadius,
      left,
      top,
      disabled,
    } = this.props;

    const containerStyle = [];

    containerStyle.push(
      getButtonStyle(
        height,
        width,
        backgroundColor,
        borderColor,
        borderRadius,
        left,
        top,
      ),
    );

    if (withShadow) {
      containerStyle.push(styles.shadow);
    }

    if (disabled) {
      containerStyle.push({
        opacity: 0.4,
      });
    }

    return containerStyle;
  };

  renderLeftImage = () => {
    const { imageSize } = this.state;
    const { name } = this.props;

    const imageStyle = {
      width: imageSize,
      height: imageSize,
    };

    switch (name) {
      // case 'facebook':
      //   return <Image source={Images.facebookImgIcon} style={imageStyle} />;

      // case 'google':
      //   return <Image source={Images.googleImgIcon} style={imageStyle} />;

      default:
        return null;
    }
  };

  renderContent = leftImage => {
    const { isLoading } = this.props;

    return isLoading ? (
      <ActivityIndicator
        testID={'solid-button-activity-indicator'}
        size="small"
        color="white"
      />
    ) : (
      this.renderBody(leftImage)
    );
  };

  renderBody = leftImage => {
    const { imageSize } = this.state;
    const { text, textStyle } = this.props;

    const sideSectionStyle = {
      width: imageSize,
    };

    if (leftImage) {
      return (
        <View style={styles.bodyWithImage}>
          <View style={sideSectionStyle}>{leftImage}</View>
          <View style={styles.middleSection}>
            <Text
              testID={'solid-button-text-with-left-image'}
              style={textStyle}>
              {text}
            </Text>
          </View>
          <View style={sideSectionStyle} />
        </View>
      );
    }

    return (
      <Text testID={'solid-button-text'} style={textStyle}>
        {text}
      </Text>
    );
  };

  renderIOSButton = (shouldDisableBtn, containerStyle, content) => {
    const { onPress, backgroundColor, testID, accessibilityLabel } = this.props;

    const underlayColor =
      backgroundColor !== 'transparent'
        ? darken(backgroundColor)
        : darken('white');

    return (
      <Pressable
        disabled={shouldDisableBtn}
        style={containerStyle}
        onPress={onPress}
        testID={
          testID +
          '-touchable-highlight' +
          (shouldDisableBtn ? '-disabled' : '')
        }
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        underlayColor={underlayColor}>
        {content}
      </Pressable>
    );
  };

  renderAndroidButton = (shouldDisableBtn, containerStyle, content) => {
    const { onPress, testID, accessibilityLabel } = this.props;

    return (
      <Pressable
        disabled={shouldDisableBtn}
        onPress={onPress}
        testID={
          testID +
          '-touchable-highlight' +
          (shouldDisableBtn ? '-disabled' : '')
        }
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
      // background={Pressable.Ripple()}
      >
        <View style={containerStyle}>{content}</View>
      </Pressable>
    );
  };

  render() {
    const { isLoading, disabled } = this.props;

    const shouldDisableBtn = disabled === true || isLoading === true;
    const containerStyle = this.generateContainerStyle();
    const leftImage = this.renderLeftImage();
    const content = this.renderContent(leftImage);

    if (
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
      return this.renderAndroidButton(
        shouldDisableBtn,
        containerStyle,
        content,
      );
    } else {
      return this.renderIOSButton(shouldDisableBtn, containerStyle, content);
    }
  }
}

const propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
  name: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.number,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isLoading: PropTypes.bool,
  withShadow: PropTypes.bool,
  small: PropTypes.bool,
  withBorder: PropTypes.bool,
  borderColor: PropTypes.string,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

const SolidButton = ({
  disabled,
  onPress,
  text,
  height,
  width,
  name,
  small,
  textStyle,
  withShadow,
  withBorder,
  borderColor,
  borderRadius,
  backgroundColor,
  textColor,
  isLoading,
  testID,
  accessibilityLabel,
  left,
  top,
  shouldDebouncedPress = false,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => themedStyles(theme), [theme]);

  // const debouncedOnPress = useMemo(() => {
  //   return debounce(onPress, 1000, { leading: true, trailing: false });
  // }, [onPress]);

  const calculateHeight =
    height || (small ? SMALL_BUTTON_HEIGHT : BUTTON_HEIGHT);
  const getBackgroundColor =
    backgroundColor || (disabled ? theme?.getText2() : theme?.getPrimary());

  return (
    <CoreSolidButton
      disabled={disabled}
      // onPress={shouldDebouncedPress ? debouncedOnPress : onPress}
      onPress={onPress}
      text={text}
      textStyle={[
        small ? styles.smallText : styles.text,
        { color: textColor ? textColor : DEFAULT_TEXT_COLOR },
        textStyle,
      ]}
      left={left}
      top={top}
      height={calculateHeight}
      width={width ? width : BUTTON_WIDTH}
      backgroundColor={getBackgroundColor}
      name={name}
      withShadow={withShadow}
      withBorder={withBorder}
      borderColor={borderColor}
      borderRadius={borderRadius}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      isLoading={isLoading}
    />
  );
};

SolidButton.propTypes = propTypes;

export default SolidButton;
