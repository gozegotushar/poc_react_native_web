import React, { useMemo } from 'react';
import { View, Modal } from 'react-native';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import Button from '../Button';
import { useWindowDimensions } from 'react-native-web';
import { responsiveSize } from '../../utils/Size';
import Spacing from '../Spacing';

function AppModal({
  shouldShow = false,
  onCloseModal = undefined,
  onSaveClicked = undefined,
  children
}) {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();

  const closeModal = () => {
    onCloseModal?.();
  };

  const _onSaveClicked = () => {
    onSaveClicked?.();
  };

  return (
    <Modal transparent visible={shouldShow}>
      <View style={{ width: width, height: height, ...styles.container }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            width: responsiveSize(200),
            alignItems: 'center'
          }}>
          <View>
            <View>{children}</View>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Close" backgroundColor={theme.getPrimary()} onPress={closeModal} />
              <Spacing width={10} />
              <Button title="Save" backgroundColor={theme.getPrimary()} onPress={_onSaveClicked} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AppModal;
