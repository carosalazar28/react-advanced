import { useEffect, useRef, useState } from "react";
import {
  Product,
  OnChangeArgs,
  InitialValues,
} from "../interfaces/products.interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  // Validate if the product is controlled by onchange
  const isControlled = useRef(Boolean(onChange));

  const handleIncrease = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });
    const newCounter =
      initialValues?.maxCount && counter === 10 && value === 1
        ? counter
        : Math.max(counter + value, 0);

    setCounter(newCounter);
    onChange && onChange({ count: newCounter, product });
  };

  const handleReset = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if (isMounted.current) setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    handleReset,
    handleIncrease,
  };
};

export default useProduct;
