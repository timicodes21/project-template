import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import SavedEvents from '../../screens/saved/SavedEvents';
import ScanToPay from '../../screens/scanToPay/ScanToPay';
import Tickets from '../../screens/tickets/Tickets';
import BottomTabIcon from '../../shared/components/BottomTabIcon';
import HomeIcon from '../../shared/icons/HomeIcon';
import {HomeNavigationEnum} from './types/home';
import {ProfileNavigationEnum} from './types/profile';
import {SavedNavigationEnum} from './types/saved';
import {ScanToPayNavigationEnum} from './types/scanToPay';
import {TicketsNavigationEnum} from './types/tickets';

const Tab = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeNavigationEnum.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 14,
          paddingBottom: 20,
          height: 80,
          paddingHorizontal: 5,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={HomeNavigationEnum.HOME}
        component={Home}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon focused={focused} icon={<HomeIcon />} focusedIcon={<HomeIcon active />} name="Home" />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name={TicketsNavigationEnum.TICKETS}
        component={Tickets}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon focused={focused} icon={<HomeIcon />} focusedIcon={<HomeIcon active />} name="Home" />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name={SavedNavigationEnum.SAVED_EVENTS}
        component={SavedEvents}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon focused={focused} icon={<HomeIcon />} focusedIcon={<HomeIcon active />} name="Home" />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name={ScanToPayNavigationEnum.SCAN_TO_PAY}
        component={ScanToPay}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon focused={focused} icon={<HomeIcon />} focusedIcon={<HomeIcon active />} name="Home" />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name={ProfileNavigationEnum.PROFILE}
        component={Profile}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon focused={focused} icon={<HomeIcon />} focusedIcon={<HomeIcon active />} name="Home" />
              );
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreens;
