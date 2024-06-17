import {View, Text} from 'react-native';
import React from 'react';
import {ILoginScreenNavigationProps} from '../../../app/navigators/types/onboarding';

const Login: ILoginScreenNavigationProps = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{color: '#000000'}}>Login</Text>
    </View>
  );
};

export default Login;
