import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Post } from "../components/Post";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreens = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem("savedPosts")
        .then((savedPosts) => {
          setSavedCount(JSON.parse(savedPosts || []).length);
        })
        .catch((error) => console.error(error));
    });
    return unsubscribe;
  }, [navigation]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://6657175e9f970b3b36c7e8f8.mockapi.io/apiurl")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("No information found");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  return (
    <View style={{ flex: 1 }}>
      {savedCount > 0 && (
  <TouchableOpacity
    style={styles.saveButton}
    onPress={() => navigation.navigate("SavedPosts")}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.buttonText}>Save</Text>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{savedCount}</Text>
      </View>
    </View>
  </TouchableOpacity>
)}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
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
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    flexDirection: "row",

    left: 345,
    top: 5,
    backgroundColor: "#007bff",
    width: 50,
    height: 30,
    padding: 5,
    borderRadius: 5,
    // margin: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
  },
  badgeContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height:20,
    bottom:13
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
   marginLeft: 5,
   marginTop: 1
    
  },
});
