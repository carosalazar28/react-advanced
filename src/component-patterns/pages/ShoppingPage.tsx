// import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";

import { Product } from "../interfaces/products.interfaces";

import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: "Compound Destructure",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Control Props",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  quantity: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = (event: { count: number; product: Product }) => {
    const { count, product } = event;
    const { id } = product;

    const newShoppingCart = { ...shoppingCart };

    newShoppingCart[id] = { ...product, quantity: count };
    if (count === 0) {
      delete newShoppingCart[id];
    }
    setShoppingCart(newShoppingCart);
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Define the compound components for give more flexibilitie for the developers and do it more scalable
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {/* Define compound components from diferentes components and with arguments */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title="Compound HOC" className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
