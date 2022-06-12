import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export enum TabNames {
  Main = 'Main',
  Groups = 'Groups',
}

export enum ScreenNames {
  Main = 'Products',
  Product = 'ProductDetail',
}

export type ProductsScreens = {
  [ScreenNames.Product]: {
    id: string;
  };
  [ScreenNames.Main]: undefined;
};

export type BottomNavigationScreens = {
  [TabNames.Main]: NavigatorScreenParams<ProductsScreens>;
  [TabNames.Groups]: undefined;
};

export type Navigate = {
  navigate: (name: TabNames | ScreenNames, data: unknown) => void;
};

export type ProductScreenProps = {
  route: RouteProp<ProductsScreens, ScreenNames.Product>;
};
