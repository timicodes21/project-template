import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum ProfileNavigationEnum {
  PROFILE = 'Profile',
}

export type ProfileStackParamsList = {
  [ProfileNavigationEnum.PROFILE]: undefined;
};

export type ProfileScreenNavigationProps = React.FC<
  NativeStackScreenProps<ProfileStackParamsList, ProfileNavigationEnum.PROFILE>
>;
