import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';

export type IThemeColor = 'main' | 'secondary' | 'background' | 'primary' | 'primaryText' | 'error' | 'grayButton';

export const DarkThemeColors: Record<IThemeColor, string> = {
  ...RNDarkTheme.colors,
  main: '#0D141C',
  secondary: '#0D141C',
  background: '#FFFFFF',
  primary: '#268CF5',
  primaryText: '#4A739C',
  error: '#C9210A',
  grayButton: '#E8EDF5',
};

export const LightThemeColors: Record<IThemeColor, string> = {
  ...DefaultTheme.colors,
  main: '#0D141C',
  secondary: '#0D141C',
  background: '#FFFFFF',
  primary: '#268CF5',
  primaryText: '#4A739C',
  error: '#C9210A',
  grayButton: '#E8EDF5',
};
