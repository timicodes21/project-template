import {createContext, useContext} from 'react';
import {IThemeContext} from './interfaces';
import {LightThemeColors} from './theme';

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'light',
  changeTheme: () => {},
  themeColors: LightThemeColors,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
