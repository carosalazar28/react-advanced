import { useContext } from "react";

import { ProductContext } from "./Card";

import noImage from "../../assets/no-image.jpg";
import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const source = img ? img : product?.img;

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={source || noImage}
      alt="Product card"
    />
  );
};
