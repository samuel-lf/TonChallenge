import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardProduct from '../../components/CardProduct';
import Button from '../../components/Button';
import { Container, ContainerProducts } from './styles';
import getFoods from '../../services/foods';
import IProduct from '../../models/IProduct';

const ListProducts: React.FC = () => {
  const [foods, setFoods] = useState<IProduct[]>([]);
  const dispach = useDispatch();

  useEffect(() => {
    async function requestGetFoods(): Promise<void> {
      const response = await getFoods();
      setFoods(
        response.data.map((food: IProduct) => ({
          ...food,
        })),
      );
    }
    requestGetFoods();
  }, []);

  const addProduct = (item: IProduct) => {
    dispach({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <>
      <Container horizontal>
        <ContainerProducts<React.ElementType>
          data={foods}
          keyExtractor={(item: IProduct) => String(item.id)}
          // eslint-disable-next-line react/no-unused-prop-types
          renderItem={({ item }: { item: IProduct }) => (
            <CardProduct
              imageURI={item.imageUrl}
              productName={item.name}
              description={item.description}
              price={item.price}
            >
              <Button onPress={() => { addProduct(item); }}>
                Adicionar ao carrinho
              </Button>
            </CardProduct>
          )}
        />
      </Container>
    </>
  );
};

export default ListProducts;
