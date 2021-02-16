import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Container, NumberBadge, TextBadge } from './styles';
import IState from '../../models/IState';

Icon.loadFont();

export const ShoppingCartIcon:React.FC = () => {
  const navigation = useNavigation();
  const products = useSelector((state:IState) => state.cartProducts);

  return (
    <Container>
      <NumberBadge>
        <TextBadge>{products.length}</TextBadge>
      </NumberBadge>
      <Icon onPress={() => { navigation.navigate('Cart'); }} name="ios-cart" size={35} />
    </Container>
  );
};
