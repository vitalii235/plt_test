import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsScreens, ScreenNames} from './types';
import MainScreen from '../screens/Main';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator<ProductsScreens>();

export default function ProductsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.Main} component={MainScreen} />
      <Stack.Screen name={ScreenNames.Product} component={Product} />
    </Stack.Navigator>
  );
}
