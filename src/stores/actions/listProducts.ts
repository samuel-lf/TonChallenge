import IProductInList from '../../models/IProductInList';

export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

export const addProducts = (products: IProductInList[]): ActionProduct => ({
  type: ADD_PRODUCTS,
  payload: products,
});

export const addProductToCart = (product: IProductInList[]): ActionProduct => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductToCart = (product: IProductInList[]): ActionProduct => ({
  type: REMOVE_PRODUCT_TO_CART,
  payload: product,
});
