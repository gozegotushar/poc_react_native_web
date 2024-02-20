import React from 'react';
import {
    View,
} from 'react-native';

function Spacing({ width = 0, height = 0 }) {
    return (
        <View style={{ width: width, height: height, }}>
        </View>
    );
}

export default Spacing