import React from 'react';
import {
    View,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

function Home(props) {
    return (
        <View style={styles.canvas}>
            <Header />
        </View>
    );
}

export default Home