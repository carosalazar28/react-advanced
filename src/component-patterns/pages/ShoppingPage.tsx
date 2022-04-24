// import { ProductCard } from "../components/ProductCard";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";

import useShoppingCart from "../hooks/useShoppingCart";

import { products } from "../data/products";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { handleQuantityChange, shoppingCart } = useShoppingCart();

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
            value={shoppingCart[product.id]?.quantity || 0}
            onChange={handleQuantityChange}
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
            value={product.quantity}
            onChange={handleQuantityChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
