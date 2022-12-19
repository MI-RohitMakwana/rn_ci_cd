import {View, Text} from 'react-native';
import React, {useState} from 'react';

const Login = React.memo(() => {
  const [email, SetEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
});

export default Login;
