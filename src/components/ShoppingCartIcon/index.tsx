import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, NumberBadge, TextBadge } from './styles';
// import { connect } from 'react-redux';
Icon.loadFont();

export const ShoppingCartIcon:React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <NumberBadge>
        <TextBadge>0</TextBadge>
      </NumberBadge>
      <Icon onPress={() => { navigation.navigate('Cart'); }} name="ios-cart" size={35} />
    </Container>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: state,
// });

// export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));
