import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabScreens from './BottomTabScreens';
import HomeStackScreens from './HomeStackScreens';
import ProfileStackScreens from './ProfileStackScreens';
import SavedStackScreens from './SavedStackScreens';
import ScanToPayStackScreens from './ScanToPayStackScreens';
import TicketsStackScreens from './TicketsStackScreens';
import {TabsEnum, TabsStackParamsList} from './types/tab';

const TabStack = createNativeStackNavigator<TabsStackParamsList>();

const TabRoutes = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen name={TabsEnum.TAB} component={BottomTabScreens} />
      <TabStack.Screen name={TabsEnum.HOME} component={HomeStackScreens} />
      <TabStack.Screen name={TabsEnum.TICKETS} component={TicketsStackScreens} />
      <TabStack.Screen name={TabsEnum.SAVED} component={SavedStackScreens} />
      <TabStack.Screen name={TabsEnum.SCAN_TO_PAY} component={ScanToPayStackScreens} />
      <TabStack.Screen name={TabsEnum.PROFILE} component={ProfileStackScreens} />
    </TabStack.Navigator>
  );
};

export default TabRoutes;
