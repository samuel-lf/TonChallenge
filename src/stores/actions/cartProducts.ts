import IProductInList from '../../models/IProductInList';

export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

interface ActionProduct {
  payload: IProductInList[];
  type: string;
}

export const cartAddProduct = (products: IProductInList[]): ActionProduct => ({
  type: CART_ADD_PRODUCT,
  payload: products,
});

export const cartRemoveProduct = (product: IProductInList[]): ActionProduct => ({
  type: CART_REMOVE_PRODUCT,
  payload: product,
});
