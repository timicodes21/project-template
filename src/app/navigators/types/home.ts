import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum HomeNavigationEnum {
  HOME = 'home',
}

export type HomeStackParamsList = {
  [HomeNavigationEnum.HOME]: undefined;
};

export type HomeScreenNavigationProps = React.FC<NativeStackScreenProps<HomeStackParamsList, HomeNavigationEnum.HOME>>;
