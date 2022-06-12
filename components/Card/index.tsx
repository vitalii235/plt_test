import {Pressable, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import colors from '../../theme/colors';
import {OFFSET} from '../../theme/constants';

type Props = {
  children: ReactNode;
  onPress?: () => void;
};

export default function Card({children, onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.GRAY,
    borderWidth: 1,
    padding: OFFSET,
    marginTop: OFFSET,
    borderRadius: 8,
  },
});
