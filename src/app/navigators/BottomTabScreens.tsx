import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomTabsEnum, BottomTabsParamsList} from './types/bottomTabs';
import HomeStackScreens from './HomeStackScreens';
import SettingsStackScreens from './SettingsStackScreens';
import BottomTabIcon from '../../shared/components/BottomTabIcon';
import HomeIcon from '../../shared/icons/HomeIcon';
import SettingsIcon from '../../shared/icons/SettingsIcon';

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const BottomTabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName={BottomTabsEnum.HOME_TAB}
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
        name={BottomTabsEnum.HOME_TAB}
        component={HomeStackScreens}
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
        name={BottomTabsEnum.SETTINGS_TAB}
        component={SettingsStackScreens}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabIcon
                  focused={focused}
                  icon={<SettingsIcon />}
                  focusedIcon={<SettingsIcon active />}
                  name="Settings"
                />
              );
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreens;
