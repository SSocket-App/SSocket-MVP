import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import SafeAreaWrapper from '../../components/safe-area-wrapper/safeAreaWrapper';
import Login from '../../pages/auth/login';
import LoadingScreen from '../../components/ui/loadingScreen';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {

        setShowLogin(true);
      });
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [fadeAnim]);

  if (showLogin) {
    return (
      <SafeAreaWrapper>
        <Login />
      </SafeAreaWrapper>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <LoadingScreen />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default LoginPage;
