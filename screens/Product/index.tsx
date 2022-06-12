import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ProductScreenProps} from '../../navigation/types';
import useActionCreator from '../../hooks/useActionCreator';
import {useSelector} from 'react-redux';
import productsSelector from '../../store/productReducer/selectors';
import ProductCard from '../../components/ProductCard';

export default function Product(props: ProductScreenProps) {
  const prodId = props.route.params.id;
  const product = useSelector(productsSelector.product);
  const {getProduct, cleanProduct} = useActionCreator();

  useEffect(() => {
    getProduct(prodId);
    return () => {
      cleanProduct();
    };
  }, []);
  return (
    <View>
      {product && (
        <>
          <ProductCard item={product}>
            <Text>{`Price is ${product.price}$$$`}</Text>
          </ProductCard>
        </>
      )}
    </View>
  );
}
