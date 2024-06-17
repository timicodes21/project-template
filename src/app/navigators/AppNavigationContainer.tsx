import {NavigationContainer, ParamListBase, createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabStackScreen from './TabStack';
import {RootNavigatorEnum, RootStackParamsList} from './types/root';

type NavigationParams = ParamListBase;
const navigationRef = createNavigationContainerRef<NavigationParams>();
const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header
          animation: 'slide_from_bottom',
        }}>
        {/* <Stack.Screen name={RootNavigatorEnum.ONBOARDING} component={OnboardingStackScreens} /> */}
        <Stack.Screen name={RootNavigatorEnum.TABS} component={TabStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
