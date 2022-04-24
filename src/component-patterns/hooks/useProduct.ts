import { useState } from "react";
import { Product, OnChangeArgs } from "../interfaces/products.interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
}

const useProduct = ({ onChange, product }: useProductProps) => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = (value: number) => {
    const newCounter = Math.max(counter + value, 0);
    setCounter(newCounter);

    onChange && onChange({ count: newCounter, product });
  };
  return {
    counter,
    handleIncrease,
  };
};

export default useProduct;
