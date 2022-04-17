// import { ProductCard } from "../components/ProductCard";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Compound Destructure",
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* Define compound components from diferentes components and with arguments */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title="Compound HOC" className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#43a8f0" }}>
          <ProductImage style={{ boxShadow: "0px 2px 20px 0px" }} />
          <ProductTitle title="Compound HOC" style={{ fontWeight: 600 }} />
          <ProductButtons style={{ justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
