import IProductInList from '../../models/IProductInList';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartProducts';

const INITIAL_STATE:IProductInList[] = [];

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

const cartItems = (state = INITIAL_STATE, action: ActionProduct): IProductInList[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload[0]];
    case REMOVE_FROM_CART:
      return state.filter((cartItem: IProductInList) => cartItem.id !== action.payload[0].id);
    default:
      break;
  }

  return state;
};

export default cartItems;
