import { useContext } from "react";

import { ProductContext } from "./Card";

import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { handleIncrease, counter } = useContext(ProductContext);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => handleIncrease(1)}>
        +
      </button>
    </div>
  );
};
