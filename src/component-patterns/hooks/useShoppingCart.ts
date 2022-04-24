import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/products.interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleQuantityChange = (event: { count: number; product: Product }) => {
    const { count, product } = event;
    const { id } = product;

    const newProductInCart = { ...shoppingCart };

    // Add quantity when the count is positive or negative
    newProductInCart[id] = {
      ...product,
      quantity: shoppingCart[id]
        ? Math.max(shoppingCart[id].quantity + count, 0)
        : Math.max(count, 0),
    };

    // Remove product from cart when the quantity is 0
    newProductInCart[id].quantity === 0 && delete newProductInCart[id];

    setShoppingCart(newProductInCart);

    // Old logic when the count is equal to quantity
    // const newShoppingCart = { ...shoppingCart };

    // newShoppingCart[id] = { ...product, quantity: count };
    // if (count === 0) {
    //   delete newShoppingCart[id];
    // }
    // setShoppingCart(newShoppingCart);
  };

  return { handleQuantityChange, shoppingCart };
};

export default useShoppingCart;
