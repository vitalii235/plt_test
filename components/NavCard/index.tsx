import Card from '../Card';
import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Nav} from '../../api/types';

type Props = Nav;
export default function NavCard({img, category}: Props) {
  return (
    <Card>
      <Image source={{uri: img}} style={styles.image} />
      <Text>{category}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
