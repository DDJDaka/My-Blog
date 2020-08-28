import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

// Still use 'UseState' to provide a local state to a single component
// Using state within in a text input is referred to as a CONTROLLED INPUT
const BlogPostForm = ({ onSubmit, initialValues, screenTitle }) => {
  const { state } = useContext(Context);
  // const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{screenTitle} Blog</Text>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "white" }}>
            Edit Blog Title
          </Text>
          <TextInput
            style={styles.textContent}
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder="Enter title..."
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "white" }}>
            Edit Blog Content
          </Text>
          <TextInput
            style={[styles.textContent]}
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholder="Enter content..."
          />
        </View>
        {title !== "" && content !== "" ? (
          <TouchableOpacity onPress={() => onSubmit(title, content)}>
            <Text style={styles.buttonText}>Save Blog Post</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
  screenTitle: "Create",
};

const styles = StyleSheet.create({
  container: {},
  buttonText: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    borderColor: "limegreen",
    paddingVertical: 5,
    width: 200,
    alignSelf: "center",
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginVertical: 20,
    color: "white",
  },
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textContent: {
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 10,
    paddingHorizontal: 5,
    color: "white",
  },
});

export default BlogPostForm;
