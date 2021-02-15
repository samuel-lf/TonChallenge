import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Container, NumberBadge, TextBadge } from './styles';
import IProduct from '../../models/IProduct';

Icon.loadFont();

export const ShoppingCartIcon:React.FC = () => {
  const navigation = useNavigation();
  const item = useSelector((state:IProduct[]) => state);

  return (
    <Container>
      <NumberBadge>
        <TextBadge>{item.length}</TextBadge>
      </NumberBadge>
      <Icon onPress={() => { navigation.navigate('Cart'); }} name="ios-cart" size={35} />
    </Container>
  );
};
