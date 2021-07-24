import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Weather</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#9BB7D4",
  },

  text: {
    color: "#000033",
    fontSize: 30,
  },
});
