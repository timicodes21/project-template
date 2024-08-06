import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum TicketsNavigationEnum {
  TICKETS = 'Tickets',
}

export type TicketsStackParamsList = {
  [TicketsNavigationEnum.TICKETS]: undefined;
};

export type TicketsScreenNavigationProps = React.FC<
  NativeStackScreenProps<TicketsStackParamsList, TicketsNavigationEnum.TICKETS>
>;
