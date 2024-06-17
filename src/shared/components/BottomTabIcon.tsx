import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  focused: boolean;
  name: string;
  icon: ReactNode;
  focusedIcon: ReactNode;
}

const BottomTabIcon: React.FC<Props> = ({focused, icon, focusedIcon, name}) => {
  const styles = stylesheet;

  return (
    <View style={styles.container}>
      {focused ? focusedIcon : icon}
      <Text style={{color: '#EF5DA8'}}>{name}</Text>
    </View>
  );
};

export default BottomTabIcon;

const stylesheet = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
