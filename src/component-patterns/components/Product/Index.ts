import { ProductCard as ProductCardHOC } from "./Card";

import { ProductImage } from "./Image";
import { ProductTitle } from "./Title";
import { ProductButtons } from "./Buttons";
import { ProductCardHOCProps } from "../../interfaces/products.interfaces";

export { ProductImage } from "./Image";
export { ProductTitle } from "./Title";
export { ProductButtons } from "./Buttons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});
