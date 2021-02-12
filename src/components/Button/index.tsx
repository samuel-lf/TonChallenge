import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler/dist/src/handlers/gestureHandlerTypesCompat';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string,
}

const Button:React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => (
  <Container {...rest}>
    <ButtonText>
      { children }
    </ButtonText>
  </Container>
);

export default Button;
