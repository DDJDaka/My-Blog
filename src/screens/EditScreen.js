import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const id = navigation.getParam("id");

  const blogPost = state.find((el) => el.id === id);

  return (
    <View style={styles.container}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        screenTitle="Edit"
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    flex: 1,
  },
});

export default EditScreen;
