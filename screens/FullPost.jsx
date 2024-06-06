import React from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../components/Loading";

export const FullPostScreens = ({ route, navigation }) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const { id, title, saved, removeSavedPost } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });

    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://6657175e9f970b3b36c7e8f8.mockapi.io/apiurl/${id}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
        Alert.alert("No information found");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id, navigation]);

  const savePost = async () => {
    try {
      const savedPosts =
        JSON.parse(await AsyncStorage.getItem("savedPosts")) || [];
      savedPosts.push(data);
      await AsyncStorage.setItem("savedPosts", JSON.stringify(savedPosts));
      Alert.alert("Post saved!");
    } catch (error) {
      console.error("Failed to save the post", error);
      Alert.alert("Failed to save the post");
    }
  };

  
  

  const deletePost = async () => {
    try {
      await AsyncStorage.removeItem(`savedPosts:${id}`); 
      removeSavedPost(id); 
     
      navigation.goBack(); 
    } catch (error) {
      console.error("Failed to delete the post", error);
      Alert.alert("Failed to delete the post");
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Image style={styles.postImage} source={{ uri: data.imageUrl }} />
      <Text style={styles.postText}>{data.text}</Text>
      {saved ? (
        <Button title="Delete" onPress={deletePost} />
      ) : (
        <Button title="Save" onPress={savePost} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 1,
  },
  postImage: {
    borderRadius: 10,
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  postText: {
    fontSize: 18,
    lineHeight: 24,
  },
});
