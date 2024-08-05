import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {IThemeColor} from '../../app/providers/theme/theme';
import {useTheme} from '../../app/providers/theme/themeContext';

export type IFontColor = 'main' | 'primary' | 'secondary' | 'error' | 'inverse';
export type IFontSize = 'small' | 'extraSmall' | 'regular' | 'medium' | 'large';
export type IFontWeight = 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black' | 'light';

export interface ITypographyProps extends TextProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
  size?: IFontSize | number;
  color?: IFontColor;
  weight?: IFontWeight;
  lh?: number;
  center?: boolean;
}

const Typography: React.FC<ITypographyProps> = ({children, style, center, weight, color, size, lh, ...rest}) => {
  const {themeColors} = useTheme();
  const renderColor: Record<IFontColor, IThemeColor> = {
    main: 'main',
    inverse: 'background',
    primary: 'primaryText',
    secondary: 'secondary',
    error: 'error',
  };

  const renderWeight: Record<IFontWeight, string> = {
    regular: 'BeVietnamPro-Regular',
    light: 'BeVietnamPro-Light',
    'semi-bold': 'BeVietnamPro-SemiBold',
    medium: 'BeVietnamPro-Medium',
    bold: 'BeVietnamPro-Regular',
    'extra-bold': 'BeVietnamPro-ExtraBold',
    black: 'BeVietnamPro-Black',
  };

  const renderFontSize: Record<IFontSize, number> = {
    small: 12,
    extraSmall: 10,
    regular: 14,
    medium: 18,
    large: 22,
  };

  return (
    <Text
      {...rest}
      style={[
        {
          color: themeColors[renderColor[color || 'primary']],
          fontFamily: renderWeight[weight || 'regular'],
          textAlign: center ? 'center' : 'left',
          fontSize: typeof size === 'number' ? size : renderFontSize[size || 'regular'],
          lineHeight: lh,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

interface IErrorTextProps extends ITypographyProps {}

export const ErrorText: React.FC<IErrorTextProps> = ({children, ...rest}) => {
  return (
    <Typography {...rest} color="error">
      {children}
    </Typography>
  );
};

export default Typography;
