// import { ProductCard } from "../components/ProductCard";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";
import { Product } from "../interfaces/products.interfaces";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Compound Destructure",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Control Props",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

export const ShoppingPage = () => {
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
          >
            <ProductImage className="custom-image" />
            <ProductTitle title="Compound HOC" className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
