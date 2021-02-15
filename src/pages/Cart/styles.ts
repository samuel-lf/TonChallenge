import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled(ScrollView)`
  margin-bottom: 10px;
`;

export const ContainerProducts = styled.FlatList`
  padding: 10px;
  margin-top: 10px;
`;

export const ContainerTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
`;

export const TextTotal = styled.Text`
  font-size: 18px;
  color: #52b788;
`;

export const NumberTotal = styled.Text`
  font-size: 24px;
  color: #52b788;
  font-weight: bold;
`;

export const ContainerNoHasItens = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextNoHasItens = styled.Text`
  color: #bbbb;
  font-size: 30px;
`;
