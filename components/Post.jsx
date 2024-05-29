// import styled from "styled-components/native";

// const PostView = styled.View`
//   flex-direction: row;
//   padding: 45px;
//   border-bottom-width: 1px;
//   border-bottom-color: rgba(0, 0, 0, 0, 1);
//   border-bottom-style: solid;
// `;

// const PostImage = styled.Image`
//   width: 60px;
//   height: 60px;
//   padding: 50px;
//   margin-top: 20px;
//   border-radius: 12px;
//   margin-right: 10px;
// `;

// const PostTitle = styled.Text`
//   font-size: 30px;
//   font-weight: 700;
//   margin-top: 20px;
// `;

// const PostDetails = styled.View`
//   justify-content: center;
// `;

// const PostDate = styled.Text`
//   font-size: 15px;
//   margin-left: 13px;
//   margin-top: 2px;
// `;

// export const Post = (title, imageUrl, createdAt) => {
//   return (
//     <PostView>
//       <PostImage
//         source={{ uri: imageUrl }}
//       />

//       <PostDetails>
//         <PostTitle> {title} </PostTitle>
//         <PostDate> {createdAt} </PostDate>
//       </PostDetails>
//     </PostView>
//   );
// };

// const truncateTitle = (str) => {
//   if (str.length >= 50) {
//     return str.substring(0, 50) + '...';
//   }

//   return str;
// };

import { Text, StyleSheet, Image, View } from "react-native";

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <View style={styles.container}>
 
      <Image  style={{width:200,height:200 ,zIndex:1000}} source={{ uri:  imageUrl }} />
      <View style={styles.postData}>
        <Text style={styles}>{title}</Text>
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  },
  postData: {
    FontSize: "12px",
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: "2px",
  },
  postImage: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    marginRight: "12px"
  }
});

// const PostView = styled.View`
//   flex-direction: row;
//   padding: 15px;
//   border-bottom-width: 1px;
//   border-bottom-color: rgba(0, 0, 0, 0.1);
//   border-bottom-style: solid;
// `;

// const PostImage = styled.Image`
//   width: 60px;
//   height: 60px;
//   border-radius: 12px;
//   margin-right: 12px;
// `;

// const PostTitle = styled.Text`
//   font-size: 17px;
//   font-weight: 700;
// `;

// const PostDetails = styled.View`
//   flex: 1;
//   justify-content: center;
// `;

// const PostDate = styled.Text`
//   font-size: 12px;
//   color: rgba(0, 0, 0, 0.4);
//   margin-top: 2px;
// `;
