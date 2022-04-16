import { createContext } from "react";

import useProduct from "../../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../../interfaces/products.interfaces";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, handleIncrease } = useProduct();

  return (
    <Provider value={{ counter, handleIncrease, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
