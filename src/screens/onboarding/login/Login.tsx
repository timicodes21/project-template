import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ILoginScreenNavigationProps} from '../../../app/navigators/types/onboarding';
import {CustomTheme} from '../../../app/providers/theme/interfaces';
import {useTheme} from '../../../app/providers/theme/themeContext';
import {setIsAuthenticated} from '../../../app/redux/slices/authSlice';
import {useAppDispatch} from '../../../app/redux/store/hooks';

const Login: ILoginScreenNavigationProps = () => {
  const dispatch = useAppDispatch();
  const {themeColors} = useTheme();
  const styles = stylesheet(themeColors);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>Login</Text>
      <Button onPress={() => dispatch(setIsAuthenticated(true))} title="Login" />
    </View>
  );
};

const stylesheet = (theme: CustomTheme) => {
  return StyleSheet.create({
    text: {
      color: theme.main,
      fontSize: 50,
    },
  });
};

export default Login;
