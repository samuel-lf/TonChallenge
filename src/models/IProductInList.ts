import IProduct from './IProduct';

interface Product extends IProduct {
  addedToCart?: boolean
}

export default Product;
