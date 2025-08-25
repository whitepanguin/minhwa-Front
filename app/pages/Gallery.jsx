import React from "react";
import { View, Text, Button } from "react-native";

export default function Gallery({ navigation }) {
  return (
    <View>
      <Text>Gallery</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
