import styled from 'styled-components/native';
import {
  Platform,
} from 'react-native';

export const Container = styled.View`
 padding: 5px;
 padding-left: ${Platform.OS === 'android' ? '20px' : '0px'};
 padding-top: ${Platform.OS === 'android' ? '10px' : '0px'};
 margin-left: ${Platform.OS === 'android' ? '5px' : '0px'};
`;

export const NumberBadge = styled.View`
 position: absolute;
 height: 20px; 
 width: 20px; 
 border-radius: 15px;
 background-color: 'rgba(95,197,123,0.8)';
 left: 38px; 
 top: 5px;
 align-items: center;
 justify-content: center;
 z-index: 2000;
`;

export const TextBadge = styled.Text`
  color: #FFF;
  font-weight: bold;
`;
