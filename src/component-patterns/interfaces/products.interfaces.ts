export interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleIncrease: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}