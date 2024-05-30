import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

export const Loading = () => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};
