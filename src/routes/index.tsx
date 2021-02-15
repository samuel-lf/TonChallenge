import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../pages/Cart';
import ListProducts from '../pages/ListProducts';
import { ShoppingCartIcon } from '../components/ShoppingCartIcon';

const Router = createStackNavigator();

const Routes: React.FC = () => (
  <Router.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#0093E9',
      },
      headerTintColor: '#FFF',
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: '#FFF',
      },
    }}
  >
    <Router.Screen
      name="ListProducts"
      component={ListProducts}
      options={() => ({
        headerTitle: 'Produtos',
        headerRight: () => (
          <ShoppingCartIcon />
        ),
      })}
    />
    <Router.Screen
      name="Cart"
      component={Cart}
      options={() => ({
        headerTitle: 'Carrinho',
      })}
    />
  </Router.Navigator>
);

export default Routes;
