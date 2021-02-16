import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct';
import Button from '../../components/Button';
import getFoods from '../../services/foods';
import { addProductsToList, listAddProductToCart } from '../../stores/actions/listProducts';
import IState from '../../models/IState';
import Product from '../../models/IProductInList';

import { Container, ContainerProducts, LoadingText } from './styles';
import { cartAddProduct } from '../../stores/actions/cartProducts';

const ListProducts: React.FC = () => {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const listProducts = useSelector((state:IState) => state.listProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    function requestGetFoods(): void {
      getFoods().then((response) => {
        dispatch(addProductsToList(response.data));
        setLoadingScreen(false);
      });
    }
    requestGetFoods();
  }, [dispatch]);

  const addProductToCart = (item: Product) => {
    dispatch(listAddProductToCart([item]));
    dispatch(cartAddProduct([item]));
  };

  return (
    <>
      <Container>
        {
          loadingScreen === false ? (
            <ContainerProducts<React.ElementType>
              data={listProducts}
              keyExtractor={(item: Product) => String(item.id)}
              // eslint-disable-next-line react/no-unused-prop-types
              renderItem={({ item }: { item: Product }) => (
                <CardProduct
                  imageURI={item.imageUrl}
                  productName={item.name}
                  description={item.description}
                  price={item.price}
                >
                  <Button onPress={() => { addProductToCart(item); }} background="primary" enabled={!item.addedToCart}>
                    {!item.addedToCart ? 'Adicionar ao carrinho' : 'Adicionado ao carrinho'}
                  </Button>
                </CardProduct>
              )}
            />
          ) : (
            <LoadingText>Carregando...</LoadingText>
          )
        }
      </Container>
    </>
  );
};

export default ListProducts;
