import React from 'react';
import { View } from 'react-native';
import { useWindowDimensions } from 'react-native-web';
import MobileLayer from '../../components/MobileLayer';
import Home from '../home';
import ScreenUtility from '../screenUtility';

function Dashboard(props) {
  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, height: height, width: width, flexDirection: 'row' }}>
      <View style={{ flex: 0.7 }}>
        <ScreenUtility />
      </View>
      <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
        <MobileLayer>
          <Home />
        </MobileLayer>
      </View>
    </View>
  );
}

export default Dashboard;
