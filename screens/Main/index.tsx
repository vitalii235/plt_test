import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import useActionCreator from '../../hooks/useActionCreator';
import {useSelector} from 'react-redux';
import productsSelector from '../../store/productReducer/selectors';
import ProductCard from '../../components/ProductCard';
import {OFFSET} from '../../theme/constants';

export default function MainScreen() {
  const {getProducts} = useActionCreator();
  const products = useSelector(productsSelector.products);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductCard item={item} />}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: OFFSET,
  },
});
