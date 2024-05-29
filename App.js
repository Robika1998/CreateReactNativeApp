import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Post } from "./components/Post"; 



export default function App() {
  return (
    <View>
      <Post 
      title="Text"
      createdAt="22/33/2323"
      imageUrl="https://memepedia.ru/wp-content/uploads/2018/07/cover-1-1-768x480.png"
      />
      <StatusBar theme="auto" />
    </View>
  );
}
