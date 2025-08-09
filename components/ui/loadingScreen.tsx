// components/loading-screen/LoadingScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Flow } from "react-native-animated-spinkit";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "CustomFont" }]}>SSocket</Text>
      <Flow size={50} color="#fff" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontFamily: "YourCustomFontName",
    marginBottom: 20,
  },
});
