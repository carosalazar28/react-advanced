import { useContext } from "react";

import { ProductContext } from "./Card";

import noImage from "../../assets/no-image.jpg";
import styles from "../../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  const source = img ? img : product?.img;

  return (
    <img
      className={styles.productImg}
      src={source || noImage}
      alt="Product card"
    />
  );
};
