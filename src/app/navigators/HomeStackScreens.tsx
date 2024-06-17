import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/home/home/Home';
import {HomeNavigationEnum, HomeStackParamsList} from './types/home';

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName={HomeNavigationEnum.HOME}>
      <HomeStack.Screen
        name={HomeNavigationEnum.HOME}
        component={Home}
        options={{
          headerShown: true,
          headerTitle: 'Home',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
