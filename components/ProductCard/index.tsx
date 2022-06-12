import React, {ReactNode, useCallback} from 'react';
import Card from '../Card';
import {Image, StyleSheet, Text} from 'react-native';
import {Product} from '../../api/types';
import {useNavigation} from '@react-navigation/native';
import {Navigate, ScreenNames} from '../../navigation/types';

type Props = {
  item: Product;
  children?: ReactNode;
};

export default function ProductCard({item: {img, name, id}, children}: Props) {
  const navigation = useNavigation<Navigate>();
  const handlePressCard = useCallback(() => {
    return navigation.navigate(ScreenNames.Product, {id});
  }, [id, navigation]);
  return (
    <Card onPress={handlePressCard}>
      <Image source={{uri: img}} style={styles.image} />
      <Text>{name}</Text>
      {children}
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
