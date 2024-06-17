import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../screens/onboarding/login/Login';
import {IOnboardingStackParamsList, OnboardingNavigationEnum} from './types/onboarding';

const OnboardingStack = createNativeStackNavigator<IOnboardingStackParamsList>();

const OnboardingStackScreens = () => {
  return (
    <OnboardingStack.Navigator initialRouteName={OnboardingNavigationEnum.LOGIN}>
      <OnboardingStack.Screen
        name={OnboardingNavigationEnum.LOGIN}
        component={Login}
        options={{
          headerShown: true,
          headerTitle: 'Login',
        }}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackScreens;
