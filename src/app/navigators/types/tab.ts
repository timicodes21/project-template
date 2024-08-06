export enum TabsEnum {
  TAB = 'Tab',
  HOME = 'HomeTab',
  TICKETS = 'TicketsTab',
  SAVED = 'SavedTab',
  SCAN_TO_PAY = 'ScanToPayTab',
  PROFILE = 'ProfileTab',
}

export type TabsStackParamsList = {
  [TabsEnum.TAB]: undefined;
  [TabsEnum.HOME]: undefined;
  [TabsEnum.TICKETS]: undefined;
  [TabsEnum.SAVED]: undefined;
  [TabsEnum.SCAN_TO_PAY]: undefined;
  [TabsEnum.PROFILE]: undefined;
};
