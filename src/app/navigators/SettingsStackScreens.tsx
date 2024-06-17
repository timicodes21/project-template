import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SettingsList from '../../screens/settings/settingsList/SettingsList';
import {SettingsNavigationEnum, SettingsStackParamsList} from './types/settings';

const SettingsStack = createNativeStackNavigator<SettingsStackParamsList>();

const SettingsStackScreens = () => {
  return (
    <SettingsStack.Navigator initialRouteName={SettingsNavigationEnum.SETTINGS_LIST}>
      <SettingsStack.Screen
        name={SettingsNavigationEnum.SETTINGS_LIST}
        component={SettingsList}
        options={{
          headerShown: true,
          headerTitle: 'Settings',
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreens;
