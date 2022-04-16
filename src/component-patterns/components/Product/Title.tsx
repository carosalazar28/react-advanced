import { useContext } from "react";

import { ProductContext } from "./Card";

import styles from "../../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  const titleToRender = title || product?.title;

  return <span className={styles.productDescription}>{titleToRender}</span>;
};
