import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  background: string;
  enabled: boolean
}

// eslint-disable-next-line consistent-return
const handleBackgroundType = (background: string, enabled:boolean) => {
  if (!enabled) {
    return '#e5e5e5';
  }

  switch (background) {
    case 'primary':
      return '#52b788';
    case 'danger':
      return '#ec4646';
    default:
      break;
  }
};

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 30px;
  background: ${({ background, enabled }) => handleBackgroundType(background, enabled)};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px
`;
