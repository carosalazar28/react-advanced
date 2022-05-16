import { useCallback, useContext } from "react";

import { ProductContext } from "./Card";

import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { handleIncrease, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => {
    let isMaxCounter = false;
    if (counter === maxCount) isMaxCounter = true;

    return isMaxCounter;
  }, [counter, maxCount]);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : null
        }`}
        onClick={() => handleIncrease(1)}
      >
        +
      </button>
    </div>
  );
};
