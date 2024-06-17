import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum OnboardingNavigationEnum {
  LOGIN = 'login',
}

export type IOnboardingStackParamsList = {
  [OnboardingNavigationEnum.LOGIN]: undefined;
};

export type ILoginScreenNavigationProps = React.FC<
  NativeStackScreenProps<IOnboardingStackParamsList, OnboardingNavigationEnum.LOGIN>
>;
