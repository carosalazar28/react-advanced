import { useState } from "react";

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = (value: number) =>
    setCounter((previous) => Math.max(previous + value, 0));

  return {
    counter,
    handleIncrease,
  };
};

export default useProduct;
