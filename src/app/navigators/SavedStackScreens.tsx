import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SavedEvents from '../../screens/saved/SavedEvents';
import {SavedNavigationEnum, SavedStackParamsList} from './types/saved';

const SavedStack = createNativeStackNavigator<SavedStackParamsList>();

const SavedStackScreens = () => {
  return (
    <SavedStack.Navigator initialRouteName={SavedNavigationEnum.SAVED_EVENTS}>
      <SavedStack.Screen
        name={SavedNavigationEnum.SAVED_EVENTS}
        component={SavedEvents}
        options={{
          headerShown: true,
        }}
      />
    </SavedStack.Navigator>
  );
};

export default SavedStackScreens;
