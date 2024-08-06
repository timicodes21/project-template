import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Tickets from '../../screens/tickets/Tickets';
import {TicketsNavigationEnum, TicketsStackParamsList} from './types/tickets';

const TicketsStack = createNativeStackNavigator<TicketsStackParamsList>();

const TicketsStackScreens = () => {
  return (
    <TicketsStack.Navigator initialRouteName={TicketsNavigationEnum.TICKETS}>
      <TicketsStack.Screen
        name={TicketsNavigationEnum.TICKETS}
        component={Tickets}
        options={{
          headerShown: true,
        }}
      />
    </TicketsStack.Navigator>
  );
};

export default TicketsStackScreens;
