import React from 'react';
import SafeAreaWrapper from '../../components/safe-area-wrapper/safeAreaWrapper';
import Signup from '../../pages/auth/singup';

const LoginPage = () => {
  return (
    <SafeAreaWrapper>
      <Signup />
    </SafeAreaWrapper>
  );
};

export default LoginPage;
