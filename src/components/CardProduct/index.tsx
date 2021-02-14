import React, { ReactNode } from 'react';
import formatValueToBRL from '../../utils/formatValueToBRL';
import {
  Container,
  ImageProduct,
  ContainerDescription,
  TitleProduct, Description, TextDescription, TextPrice,
} from './styles';

interface CardProps {
  children: ReactNode;
  imageURI: string;
  productName: string;
  description: string;
  price: number
}

const CardProduct:React.FC<CardProps> = ({
  children, imageURI, productName, description, price,
}: CardProps) => {
  const formatedPrice = formatValueToBRL(price);
  return (
    <Container>
      <ImageProduct
        source={{
          uri: imageURI,
        }}
      />
      <ContainerDescription>
        <TitleProduct>
          {productName}
        </TitleProduct>
        <Description>
          <TextDescription>{description}</TextDescription>
        </Description>
        <TextPrice>
          {formatedPrice}
        </TextPrice>
        {children}
      </ContainerDescription>
    </Container>
  );
};

export default CardProduct;
