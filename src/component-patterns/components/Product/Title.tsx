import { useContext } from "react";

import { ProductContext } from "./Card";

import styles from "../../styles/styles.module.css";

// When the definition of the types is from more than one prop, we can use the interface
export interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);

  const titleToRender = title || product?.title;

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {titleToRender}
    </span>
  );
};
