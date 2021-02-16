import IProductInList from '../../models/IProductInList';

export const LIST_ADD_PRODUCTS = 'LIST_ADD_PRODUCTS';
export const LIST_ADD_PRODUCT_TO_CART = 'LIST_ADD_PRODUCT_TO_CART';
export const LIST_REMOVE_PRODUCT_TO_CART = 'LIST_REMOVE_PRODUCT_TO_CART';

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

export const addProductsToList = (products: IProductInList[]): ActionProduct => ({
  type: LIST_ADD_PRODUCTS,
  payload: products,
});

export const listAddProductToCart = (product: IProductInList[]): ActionProduct => ({
  type: LIST_ADD_PRODUCT_TO_CART,
  payload: product,
});

export const listRemoveProductToCart = (product: IProductInList[]): ActionProduct => ({
  type: LIST_REMOVE_PRODUCT_TO_CART,
  payload: product,
});
