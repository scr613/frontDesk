import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomView = ({ style, children }) => {
    return <View style={[styles.defaultStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    defaultStyle: {
        padding: 0,
        margin: 0,
    },
});

export default CustomView;
