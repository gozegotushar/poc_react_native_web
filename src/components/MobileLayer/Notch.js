import React from 'react';
import {
   View,
} from 'react-native';
import styles from './styles';
import { deviceWidth, notchPosition, notchWidth } from '../../utils/DeviceConfig';

function Notch(props) {

   let left = 0
   if (notchPosition === 'middle') {
      left = (deviceWidth - notchWidth) / 2
   }

   return (
      <View style={{ ...styles.notch, left: left }}>

      </View>
   );
}

export default Notch