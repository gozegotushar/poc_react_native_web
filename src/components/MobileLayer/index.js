import React from 'react';
import {
   View,
} from 'react-native';
import styles from './styles';
import Notch from './Notch';
import StatusBar from '../StatusBar';

function MobileLayer(props) {
   return (
      <View style={styles.canvas}>
         <View style={styles.borderLayer}>
            <View style={styles.screen}>
               <StatusBar />
               {props.children}
               <Notch />
            </View>
         </View>
      </View>
   );
}

export default MobileLayer