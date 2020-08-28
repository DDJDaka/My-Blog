import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <BlogPostForm
        screenTitle="Create"
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
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

export default CreateScreen;
