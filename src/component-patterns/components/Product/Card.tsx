import { createContext } from "react";

import useProduct from "../../hooks/useProduct";
import {
  ProductContextProps,
  Product,
} from "../../interfaces/products.interfaces";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  product: Product;
  children?: React.ReactNode;
}

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, handleIncrease } = useProduct();

  return (
    <Provider value={{ counter, handleIncrease, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
