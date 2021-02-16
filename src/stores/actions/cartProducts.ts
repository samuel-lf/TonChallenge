import IProductInList from '../../models/IProductInList';

export const ADD_TO_CART = 'ADD_PRODUCTS';
export const REMOVE_FROM_CART = 'ADD_PRODUCT_TO_CART';

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

export const addProductToCart = (products: IProductInList[]): ActionProduct => ({
  type: ADD_TO_CART,
  payload: products,
});

export const removeProductToCart = (product: IProductInList[]): ActionProduct => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
