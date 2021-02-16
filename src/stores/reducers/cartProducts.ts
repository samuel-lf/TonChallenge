import IProductInList from '../../models/IProductInList';
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from '../actions/cartProducts';

const INITIAL_STATE:IProductInList[] = [];

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

const cartProducts = (state = INITIAL_STATE, action: ActionProduct): IProductInList[] => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return [...state, action.payload[0]];
    case CART_REMOVE_PRODUCT:
      return state.filter((cartItem: IProductInList) => cartItem.id !== action.payload[0].id);
    default:
      break;
  }

  return state;
};

export default cartProducts;
