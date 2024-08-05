/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps, StyleProp, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_HORIZONTAL_SPACING} from '../../app/constants/values';

interface IProps extends ScrollViewProps {
  children: ReactNode;
  pb?: number;
  noHorizontalPadding?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const CustomScrollView: React.FC<IProps> = ({
  children,
  pb,
  noHorizontalPadding,
  contentContainerStyle,
  ...rest
}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <ScrollView
      {...rest}
      contentContainerStyle={[
        {paddingBottom: bottom + (pb || 100), paddingHorizontal: noHorizontalPadding ? 0 : SCREEN_HORIZONTAL_SPACING},
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  );
};
