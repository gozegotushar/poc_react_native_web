import React, { useMemo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import makeStyles from './styles';
import { useTheme } from '../../hooks/theme';
import SolidButton from '../../components/SolidButton';
import { responsiveSize } from '../../utils/Size';

function Home(props) {

  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <View style={styles.canvas}>
      <Header />

      <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
        <SolidButton
          text={'Submit Maintenance Request'}
          onPress={() => alert("clicked")}
          backgroundColor={theme.getPrimaryLight15()}
          borderRadius={12}
          textStyle={styles.btnText}
          width={responsiveSize(67)}
          height={responsiveSize(11)}
          left={-responsiveSize(0.9)}
          top={-responsiveSize(0.9)}
          testID={'footer_maintenance_request'}
        />
      </View>
    </View>
  );
}

export default Home;
