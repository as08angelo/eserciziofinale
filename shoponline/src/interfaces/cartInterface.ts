import { Product } from "./productInterface";

export default interface Cart {
    product: Product;
    amount: number;
}