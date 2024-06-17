import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabScreens from './BottomTabScreens';

const TabStack = createNativeStackNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
        animation: 'slide_from_bottom',
      }}>
      <TabStack.Screen name="TabScreens" component={BottomTabScreens} />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;
