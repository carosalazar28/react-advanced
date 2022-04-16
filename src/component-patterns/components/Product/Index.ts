import { ProductCard as ProductCardHOC } from "./Card";

import { ProductImage } from "./Image";
import { ProductTitle } from "./Title";
import { ProductButtons } from "./Buttons";

export { ProductImage } from "./Image";
export { ProductTitle } from "./Title";
export { ProductButtons } from "./Buttons";

export const ProductCard = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});
