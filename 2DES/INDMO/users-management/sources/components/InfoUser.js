import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoUser = ({route}) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Image source={item.foto}/>
        </View>
    )
}