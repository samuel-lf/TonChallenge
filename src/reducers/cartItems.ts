import IProduct from '../models/IProduct';

const INITIAL_STATE:IProduct[] = [];

interface ActionProduct {
  payload: IProduct;
  type: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const cartItems = (state = INITIAL_STATE, action: ActionProduct) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItem: IProduct) => cartItem.id !== action.payload.id);
    default:
      break;
  }

  return state;
};

export default cartItems;
