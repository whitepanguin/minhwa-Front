import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        // onPress={() => navigation.navigate("Details", { token: token })} # 만약 토큰이 필요하다면 토큰을 넘겨주면 되겠군
      />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
      <Button
        title="MinwhaTrans"
        onPress={() => navigation.navigate("MinwhaTrans")}
      />
      <Button title="Gallery" onPress={() => navigation.navigate("Gallery")} />
      <Button title="MyAlbum" onPress={() => navigation.navigate("MyAlbum")} />
    </View>
  );
}
