// import { ProductCard } from "../components/ProductCard";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/Product/Index";

import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

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

        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({
            count,
            maxCount,
            isMaxCountReached,
            handleReset,
            handleIncrease,
          }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle title="Compound HOC" className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={handleReset}>Reset</button>
              <button onClick={() => handleIncrease(-2)}> -2 </button>
              {!isMaxCountReached ? (
                <button onClick={() => handleIncrease(2)}> +2</button>
              ) : null}
              <span>
                {count} - {maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
