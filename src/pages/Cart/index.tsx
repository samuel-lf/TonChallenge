import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardProduct from '../../components/CardProduct';
import Button from '../../components/Button';
import {
  Container, ContainerNoHasItens,
  ContainerProducts, ContainerTotal, NumberTotal, TextNoHasItens, TextTotal,
} from './styles';
import IProduct from '../../models/IProduct';
import formatValueToBRL from '../../utils/formatValueToBRL';

Icon.loadFont();

const Cart: React.FC = () => {
  const foods = useSelector((state:IProduct[]) => state);
  const dispach = useDispatch();

  const removeProduct = (food: IProduct) => {
    dispach({ type: 'REMOVE_FROM_CART', payload: food });
  };

  const verifyTotal = () => {
    const total = foods.reduce((acc, item) => acc + item.price, 0);

    return formatValueToBRL(total);
  };

  return (
    <>
      {
      foods.length !== 0 ? (
        <>
          <ContainerTotal>
            <TextTotal>Total</TextTotal>
            <NumberTotal>{verifyTotal()}</NumberTotal>
          </ContainerTotal>
          <Container horizontal>
            <ContainerProducts<React.ElementType>
              data={foods}
              keyExtractor={(food: IProduct) => String(food.id)}
              // eslint-disable-next-line react/no-unused-prop-types
              renderItem={({ item }: { item: IProduct }) => (
                <CardProduct
                  imageURI={item.imageUrl}
                  productName={item.name}
                  description={item.description}
                  price={item.price}
                >
                  <Button onPress={() => { removeProduct(item); }} background="danger" enabled>
                    Remover ao carrinho
                  </Button>
                </CardProduct>
              )}
            />
          </Container>
        </>
      ) : (
        <ContainerNoHasItens>
          <TextNoHasItens>Carrinho vazio</TextNoHasItens>
          <Icon name="emoticon-sad-outline" size={50} color="#bbbb" />
        </ContainerNoHasItens>
      )
    }
    </>
  );
};

export default Cart;
