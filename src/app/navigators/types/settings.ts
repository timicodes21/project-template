import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum SettingsNavigationEnum {
  SETTINGS_LIST = 'SettingsList',
}

export type SettingsStackParamsList = {
  [SettingsNavigationEnum.SETTINGS_LIST]: undefined;
};

export type SettingsListScreenNavigationProps = React.FC<
  NativeStackScreenProps<SettingsStackParamsList, SettingsNavigationEnum.SETTINGS_LIST>
>;
