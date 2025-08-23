import React from "react";
import { View, Text, Button } from "react-native";

export default function Login({ route, navigation }) {
  // const { userId } = route.params ?? {}; # 이런식으로 데이터를 params로 받을수 있음
  return (
    <View>
      <Text>Login</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}
