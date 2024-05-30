import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { Loading } from "../components/Loading";

export const FullPostScreens = ({ route, navigation }) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });

    axios
      .get("https://6657175e9f970b3b36c7e8f8.mockapi.io/apiurl/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("No information found");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return;
    <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.postImage} source={{ uri: data.imageUrl }} />
      <Text style={styles.postText}>{data.text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
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
