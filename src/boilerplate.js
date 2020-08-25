import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const boilerPlate = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boiler Plate</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 20,
        textAlign: "center"
    }
})

export default boilerPlate;
