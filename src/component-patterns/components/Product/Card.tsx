import { createContext } from "react";

import useProduct from "../../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from "../../interfaces/products.interfaces";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  product: Product;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: Props) => {
  const { counter, handleIncrease } = useProduct({ onChange, product });

  return (
    <Provider value={{ counter, handleIncrease, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
