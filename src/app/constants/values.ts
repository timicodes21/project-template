import {Dimensions, Platform} from 'react-native';

export const SCREEN_HORIZONTAL_SPACING = 18;
export const BOTTOMSHEET_HORIZONTAL_MARGIN = 20;
export const INPUT_MARGIN_BOTTOM = 24;
export const TAB_BAR_HEIGHT = Platform.OS === 'android' ? 60 : 55;
export const HIT_SLOP = (value: number): {top: number; left: number; right: number; bottom: number} => {
  return {
    top: value,
    bottom: value,
    right: value,
    left: value,
  };
};
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const FULL_WIDTH = SCREEN_WIDTH - SCREEN_HORIZONTAL_SPACING * 2;
export const bottomSheetHeight = (height: number) => {
  return String((height / SCREEN_HEIGHT) * 100);
};
