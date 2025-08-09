import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  TextInput,
  Button,
  Text,
  Provider as PaperProvider,
  MD3DarkTheme,
  ActivityIndicator,
} from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#fff", // white text on black buttons
    onSurfaceVariant: "#cccccc",
    outline: "#444444",
    background: "#000", // black background
    surface: "#111", // dark cards/inputs
    text: "#fff", // white text
  },
  roundness: 8,
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Login complete");
    }, 2000);
  };

  return (
    <PaperProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <Text
              variant="headlineMedium"
              style={[styles.title, { fontFamily: "CustomFont" }]}
            >
              SSocket
            </Text>

            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={[styles.input, styles.shadow]}
              placeholderTextColor="#888"
            />

            <TextInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              mode="outlined"
              style={[styles.input, styles.shadow]}
              placeholderTextColor="#888"
            />

            <Button
              onPress={handleLogin}
              disabled={loading}
              style={[styles.loginButton, styles.shadow]}
              contentStyle={styles.buttonContent}
            >
              <View style={styles.buttonInner}>
                <Text style={styles.buttonText}>
                  {loading ? "Logging in" : "Login"}
                </Text>
                {loading && (
                  <View style={styles.loaderContainer}>
                    <ActivityIndicator size="small" color="#fff" />
                  </View>
                )}
              </View>
            </Button>

            <Text style={styles.orText}>-- Or sign in with --</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={[styles.socialBox, styles.shadow]}
                onPress={() => {}}
              >
                <FontAwesome5 name="facebook-f" size={23} color="#fff" solid />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.socialBox, styles.shadow]}
                onPress={() => {}}
              >
                <FontAwesome5 name="google" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialBox, styles.shadow]}
                onPress={() => {}}
              >
                <FontAwesome5 name="twitter" size={23} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.signupContainer}>
              <Text style={{ color: "#fff" }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("../(signup)")}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#000", // black
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 62,
    color: "#fff",
    includeFontPadding: false,
    textAlignVertical: "center",
    lineHeight: 70,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#111", // dark input background
  },
  loginButton: {
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#fff", // white button
  },
  orText: {
    textAlign: "center",
    color: "#ccc",
    marginVertical: 20,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialBox: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#111", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  buttonText: {
    color: "#000", // black text on white button
    fontSize: 16,
  },
  loaderContainer: {
    position: "absolute",
    right: 90,
  },
  signupLink: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 4,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
