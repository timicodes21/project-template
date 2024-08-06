import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabRoutes from './TabRoutes';

const AuthenticatedStack = createNativeStackNavigator();

const AuthenticatedRoutes = () => {
  return (
    <AuthenticatedStack.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
        animation: 'slide_from_right',
      }}>
      <AuthenticatedStack.Screen name="TabRoutes" component={TabRoutes} />
    </AuthenticatedStack.Navigator>
  );
};

export default AuthenticatedRoutes;
