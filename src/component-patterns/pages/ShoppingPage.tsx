// import { ProductCard } from "../components/ProductCard";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";

const product = {
  id: "1",
  title: "Coffee Mug - 1",
  img: "./coffee-mug.png",
};

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
        {/* Define the compound components for give more flexibilitie for the developers and do it more scalable */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="joe" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Define compound components from diferentes components and with arguments */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="joe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
