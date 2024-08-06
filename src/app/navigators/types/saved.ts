import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum SavedNavigationEnum {
  SAVED_EVENTS = 'SavedEvents',
}

export type SavedStackParamsList = {
  [SavedNavigationEnum.SAVED_EVENTS]: undefined;
};

export type SavedEventsScreenNavigationProps = React.FC<
  NativeStackScreenProps<SavedStackParamsList, SavedNavigationEnum.SAVED_EVENTS>
>;
