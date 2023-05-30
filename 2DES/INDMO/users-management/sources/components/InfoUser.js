import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoUser = ({route}) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default InfoUser