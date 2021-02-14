import styled from 'styled-components/native';

export const Container = styled.View`
  width: 370px;
  height: 200px;
  align-items: center;
  flex-direction: row;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 5);
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const ImageProduct = styled.Image`
  width: 150px;
  height: 200px;
`;

export const ContainerDescription = styled.View`
  padding: 10px;
`;

export const TitleProduct = styled.Text`
  color: #3e3e3e;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold
`;

export const Description = styled.View`
  flex-direction: row;
  flex-shrink: 1; 
  width: 200px;
`;

export const TextDescription = styled.Text`
  color: #717171;
`;

export const TextPrice = styled.Text`
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #3e3e3e;
`;
