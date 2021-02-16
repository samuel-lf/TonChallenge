import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardProduct from '../../components/CardProduct';
import Button from '../../components/Button';
import {
  Container, ContainerNoHasItens,
  ContainerProducts, ContainerTotal, NumberTotal, TextNoHasItens, TextTotal,
} from './styles';
import formatValueToBRL from '../../utils/formatValueToBRL';
import IState from '../../models/IState';
import Product from '../../models/IProductInList';
import { cartRemoveProduct } from '../../stores/actions/cartProducts';
import { listRemoveProductToCart } from '../../stores/actions/listProducts';

Icon.loadFont();

const Cart: React.FC = () => {
  const products = useSelector((state:IState) => state.cartProducts);
  const dispatch = useDispatch();

  const remove = (food: Product) => {
    dispatch(cartRemoveProduct([food]));
    dispatch(listRemoveProductToCart([food]));
  };

  const verifyTotal = () => {
    const total = products.reduce((acc, item) => acc + item.price, 0);

    return formatValueToBRL(total);
  };

  return (
    <>
      {
        products.length !== 0 ? (
          <>
            <ContainerTotal>
              <TextTotal>Total</TextTotal>
              <NumberTotal>{verifyTotal()}</NumberTotal>
            </ContainerTotal>
            <Container horizontal>
              <ContainerProducts<React.ElementType>
                data={products}
                keyExtractor={(food: Product) => String(food.id)}
                // eslint-disable-next-line react/no-unused-prop-types
                renderItem={({ item }: { item: Product }) => (
                  <CardProduct
                    imageURI={item.imageUrl}
                    productName={item.name}
                    description={item.description}
                    price={item.price}
                  >
                    <Button onPress={() => { remove(item); }} background="danger" enabled>
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
