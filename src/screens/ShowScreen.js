import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    // State is passed as an argument through the Data context provider, so it can be deconstructed
    const { state } = useContext(Context);

    // Find the first object that returns true and assigns it to variable
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    console.log(navigation.getParam);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <MaterialCommunityIcons name="playlist-edit" style={styles.headerIcon} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    title: {
        // textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
        marginVertical: 10,
    },
    content: {
        fontSize: 18
    },
    headerIcon: {
        fontSize: 30,
        marginRight: 20
    },
})

export default ShowScreen;
