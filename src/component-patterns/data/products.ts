import { Product } from "../interfaces/products.interfaces";

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

export const products: Product[] = [product1, product2];
