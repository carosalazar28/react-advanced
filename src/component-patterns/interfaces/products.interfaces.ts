import { Props as ProductCardProps } from "../components/Product/Card";
import { Props as ProductTitleProps } from "../components/Product/Title";
import { Props as ProductImageProps } from "../components/Product/Image";
import { Props as ProductButtonsProps } from "../components/Product/Buttons";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  handleIncrease: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}
