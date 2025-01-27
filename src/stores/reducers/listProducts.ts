import { LIST_ADD_PRODUCTS, LIST_ADD_PRODUCT_TO_CART, LIST_REMOVE_PRODUCT_TO_CART } from '../actions/listProducts';
import IProductInList from '../../models/IProductInList';

const INITIAL_STATE:IProductInList[] = [];

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

const listProducts = (state = INITIAL_STATE, action: ActionProduct): IProductInList[] => {
  switch (action.type) {
    case LIST_ADD_PRODUCTS:
      const products = action.payload.map((item) => ({
        ...item,
        addedToCart: false,
      }));
      return [...products];
    case LIST_ADD_PRODUCT_TO_CART:
      return state.map((cartItem: IProductInList) => {
        if (cartItem.id === action.payload[0].id) {
          cartItem.addedToCart = true;
        }
        return cartItem;
      });
    case LIST_REMOVE_PRODUCT_TO_CART:
      return state.map((cartItem: IProductInList) => {
        if (cartItem.id === action.payload[0].id) {
          cartItem.addedToCart = false;
        }
        return cartItem;
      });
    default:
      return state;
  }
};

export default listProducts;
