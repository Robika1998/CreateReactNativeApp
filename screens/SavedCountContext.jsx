import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SavedCountContext = createContext();

export const SavedCountProvider = ({ children }) => {
  const [savedCount, setSavedCount] = useState(0);

  const fetchSavedCount = async () => {
    try {
      const savedPosts =
        JSON.parse(await AsyncStorage.getItem("savedPosts")) || [];
      setSavedCount(savedPosts.length);
    } catch (error) {
      console.error("Failed to fetch saved count", error);
    }
  };

  useEffect(() => {
    fetchSavedCount();
  }, []);

  return (
    <SavedCountContext.Provider value={{ savedCount, setSavedCount }}>
      {children}
    </SavedCountContext.Provider>
  );
};
