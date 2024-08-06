import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScanToPay from '../../screens/scanToPay/ScanToPay';
import {ScanToPayNavigationEnum, ScanToPayStackParamsList} from './types/scanToPay';

const ScanToPayStack = createNativeStackNavigator<ScanToPayStackParamsList>();

const ScanToPayStackScreens = () => {
  return (
    <ScanToPayStack.Navigator initialRouteName={ScanToPayNavigationEnum.SCAN_TO_PAY}>
      <ScanToPayStack.Screen
        name={ScanToPayNavigationEnum.SCAN_TO_PAY}
        component={ScanToPay}
        options={{
          headerShown: true,
        }}
      />
    </ScanToPayStack.Navigator>
  );
};

export default ScanToPayStackScreens;
