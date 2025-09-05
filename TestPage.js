import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function TestPage() {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.title}>\u2705 Expo Go Test Page</Text>
      <Text>Enter the URL manually in Expo Go.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 }
});
