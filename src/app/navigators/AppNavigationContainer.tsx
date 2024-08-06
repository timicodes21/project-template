import {NavigationContainer, ParamListBase, createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAppSelector} from '../redux/store/hooks';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import OnboardingStackScreens from './OnboardingStackScreens';
import {RootNavigatorEnum, RootStackParamsList} from './types/root';

type NavigationParams = ParamListBase;
const navigationRef = createNavigationContainerRef<NavigationParams>();
const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppNavigationContainer = () => {
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header
          animation: 'slide_from_bottom',
        }}>
        {isAuthenticated ? (
          <Stack.Screen name={RootNavigatorEnum.TABS} component={AuthenticatedRoutes} />
        ) : (
          <Stack.Screen name={RootNavigatorEnum.ONBOARDING} component={OnboardingStackScreens} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
