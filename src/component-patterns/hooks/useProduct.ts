import { useEffect, useRef, useState } from "react";
import { Product, OnChangeArgs } from "../interfaces/products.interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState(value);

  // Validate if the product is controlled by onchange
  const isControlled = useRef(Boolean(onChange));

  const handleIncrease = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });

    const newCounter = Math.max(counter + value, 0);
    setCounter(newCounter);
    onChange && onChange({ count: newCounter, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    handleIncrease,
  };
};

export default useProduct;
