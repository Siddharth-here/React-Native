import { useState } from "react";
import { View, Text, Image,TextInput } from "react-native";

export default function Homescreen() {
  const [name, setName] = useState("")
  return (
    <View>
      {" "}
      <Text numberOfLines={5}>
         laudantium voluptate sit perspiciatis
        dolorells laboriosam.
      </Text>{" "}
      {/* remote image*/}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/37880025/pexels-photo-37880025.jpeg",
        }}
        width={200}
        height={200}
      />
      {/* local image*/}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 50,
          width: 50,
        }}
        blurRadius={50}
      />

      <TextInput 
      placeholder="enter your name" 
      value={name} 
      onChangeText={setName}
      placeholderTextColor={"red"}
      style={{
        borderWidth:1,
        borderColor:"#ddd",
        marginTop:10,
        fontSize:24,
      }}
      
      />
    </View>
  );
}
