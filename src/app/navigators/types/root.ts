export enum RootNavigatorEnum {
  ONBOARDING = 'Onboarding',
  TABS = 'TabStack',
}

export type RootStackParamsList = {
  [RootNavigatorEnum.ONBOARDING]: undefined;
  [RootNavigatorEnum.TABS]: undefined;
};
