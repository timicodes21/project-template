import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';

export type IThemeColor = 'main' | 'secondary' | 'background';

export const DarkThemeColors: Record<IThemeColor, string> = {
  ...RNDarkTheme.colors,
  main: '#03BBAD',
  secondary: '#03BBAD',
  background: '#FFFFFF',
};

export const LightThemeColors: Record<IThemeColor, string> = {
  ...DefaultTheme.colors,
  main: '#03BBAD',
  secondary: '#03BBAD',
  background: '#FFFFFF',
};
