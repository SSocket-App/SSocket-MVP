
import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const SafeAreaWrapper = ({ children, style }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, style]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000", 
  },
});

export default SafeAreaWrapper;
