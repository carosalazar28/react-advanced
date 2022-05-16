import { createContext } from "react";

import useProduct from "../../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
} from "../../interfaces/products.interfaces";

import styles from "../../styles/styles.module.css";
import { ProductCardHandlers } from "../../interfaces/products.interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  product: Product;
  // children?: React.ReactNode;
  children: (args: ProductCardHandlers) => JSX.Element;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, maxCount, isMaxCountReached, handleReset, handleIncrease } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, handleIncrease, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          handleIncrease,
          handleReset,
        })}
      </div>
    </Provider>
  );
};
