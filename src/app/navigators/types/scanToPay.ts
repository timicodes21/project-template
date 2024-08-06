import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum ScanToPayNavigationEnum {
  SCAN_TO_PAY = 'ScanToPay',
}

export type ScanToPayStackParamsList = {
  [ScanToPayNavigationEnum.SCAN_TO_PAY]: undefined;
};

export type ScanToPayScreenNavigationProps = React.FC<
  NativeStackScreenProps<ScanToPayStackParamsList, ScanToPayNavigationEnum.SCAN_TO_PAY>
>;
