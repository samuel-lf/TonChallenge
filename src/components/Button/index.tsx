import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler/dist/src/handlers/gestureHandlerTypesCompat';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string,
  background: string,
}

const Button:React.FC<ButtonProps> = ({ children, background, ...rest }: ButtonProps) => (
  <Container {...rest} background={background}>
    <ButtonText>
      { children }
    </ButtonText>
  </Container>
);

export default Button;
