import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    // ===== DID FOCUS - Run function again when we return to this screen
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    // AVOID MEMORY LEAK - When we no longer need to return to a screen in the app, terminate
    // listener to avoid memory leak
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ backgroundColor: "#292929", flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          marginVertical: 15,
          color: "white",
        }}
      >
        Index Screen
      </Text>
      {state.length === 0 ? (
        <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
          Click the '+' icon to create a new Blogpost
        </Text>
      ) : (
        <FlatList
          data={state}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <View style={styles.post}>
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-end" }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.id}>({item.id})</Text>
                  </View>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <MaterialCommunityIcons name="plus" style={styles.headerIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#525252",
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  icon: {
    fontSize: 20,
    color: "#944343",
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 20,
  },
  id: {
    fontSize: 10,
    color: "grey",
    marginLeft: 10,
  },
});

export default IndexScreen;
