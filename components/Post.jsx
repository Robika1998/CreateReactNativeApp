import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={{ uri: imageUrl }} />
      <View style={styles.postData}>
        <Text style={styles.postTitle}>{truncateTitle(title)}</Text>
        <Text style={styles.postDate}>{new Date(createdAt).toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 20,
    paddingBottom:20
  },
  postData: {
    flex: 1,
    justifyContent: "center",
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  postDate: {
    fontSize: 15,
    marginTop: 2,
    color: "rgba(0, 0, 0, 0.6)",
  },
});
