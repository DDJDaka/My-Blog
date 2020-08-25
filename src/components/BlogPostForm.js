import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext'

// Still use 'UseState' to provide a local state to a single component
// Using state within in a text input is referred to as a CONTROLLED INPUT
const BlogPostForm = ({ onSubmit, initialValues }) => {
    const { state } = useContext(Context);
    // const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.title}>Edit Blog</Text>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>Edit Blog Title</Text>
                    <TextInput style={styles.textContent} value={title} onChangeText={text => setTitle(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>Edit Blog Content</Text>
                    <TextInput style={[styles.textContent]} value={content} onChangeText={text => setContent(text)} />
                </View>
                {title !== '' && content !== ''
                    ? <Button
                        title="Save Blog Post"
                        onPress={() => onSubmit(title, content)}
                    />
                    : null}
            </View>
        </View >
    )
}


BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 26,
        textAlign: "center",
        marginVertical: 20,
    },
    inputContainer: {
        marginVertical: 20,
        marginHorizontal: 20
    },
    textContent: {
        borderWidth: 1,
        borderColor: "grey",
        marginVertical: 10,
        paddingHorizontal: 5
    }
})

export default BlogPostForm;
