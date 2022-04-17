import { useContext } from "react";

import { ProductContext } from "./Card";

import noImage from "../../assets/no-image.jpg";
import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext);

  const source = img ? img : product?.img;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={source || noImage}
      alt="Product card"
    />
  );
};
