import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomNavigationScreens, TabNames} from './types';
import Groups from '../screens/Groups';
import ProductsNavigator from './Products';

const Tab = createBottomTabNavigator<BottomNavigationScreens>();

export default function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabNames.Main}
        component={ProductsNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name={TabNames.Groups} component={Groups} />
    </Tab.Navigator>
  );
}
