import {View, Text, Button} from 'react-native';
import React from 'react';
import {ILoginScreenNavigationProps} from '../../../app/navigators/types/onboarding';
import {useAppDispatch} from '../../../app/redux/store/hooks';
import {setIsAuthenticated} from '../../../app/redux/slices/authSlice';

const Login: ILoginScreenNavigationProps = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1}}>
      <Text style={{color: '#000000'}}>Login</Text>
      <Button onPress={() => dispatch(setIsAuthenticated(true))} title="Login" />
    </View>
  );
};

export default Login;
