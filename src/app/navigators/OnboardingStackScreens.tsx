import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IOnboardingStackParamsList, OnboardingNavigationEnum} from './types/onboarding';
import Login from '../../screens/onboarding/Login';

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
