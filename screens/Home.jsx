import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  StatusBar,
  TextInput, 
} from "react-native";
import { Post } from "../components/Post";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavedCountContext } from "./SavedCountContext";

export const HomeScreens = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { savedCount, setSavedCount } = useContext(SavedCountContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

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

  useEffect(() => {
    // setFilteredItems(
    //   items.filter((item) =>
    //     item.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   )
    // );
  }, [searchQuery, items]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      // .get("https://6657175e9f970b3b36c7e8f8.mockapi.io/apiurl")
      .get("http://192.168.1.130:3000/news")

      .then(({ data }) => {
        setItems(data);
        console.log(data);
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
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search posts..."
        />
      </View>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
                createdAt: item.createdAt,
              })
            }
          > 
     
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.image}
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
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
  },
});
