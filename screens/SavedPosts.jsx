import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Post } from "../components/Post";

export const SavedPostsScreen = ({ navigation }) => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedCount, setSavedCount] = useState(0);

  const fetchSavedPosts = async () => {
    try {
      const posts = JSON.parse(await AsyncStorage.getItem("savedPosts")) || [];
      setSavedPosts(posts);
      setSavedCount(posts.length);
    } catch (error) {
      console.error("Failed to fetch saved posts", error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchSavedPosts();
    });

    return unsubscribe;
  }, [navigation]);

  const removeSavedPost = async (postId) => {
    try {
      const updatedPosts = savedPosts.filter((post) => post.id !== postId);
      await AsyncStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
      setSavedPosts(updatedPosts);
      setSavedCount(updatedPosts.length);
    } catch (error) {
      console.error("Failed to delete the post", error);
      Alert.alert("Failed to delete the post");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={savedPosts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
                saved: true,
                removeSavedPost: removeSavedPost,
              })
            }
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
