import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../../screens/profile/Profile';
import {ProfileNavigationEnum, ProfileStackParamsList} from './types/profile';

const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator initialRouteName={ProfileNavigationEnum.PROFILE}>
      <ProfileStack.Screen
        name={ProfileNavigationEnum.PROFILE}
        component={Profile}
        options={{
          headerShown: true,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreens;
