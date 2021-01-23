import { Product } from "./product.model";

export interface Cart {
    productIds: string[],
    productMap: {
        [productId: string]: {
            product: Product,
            count: number
        }
    },
    totalProducts: number,
    totalCost: number
}

export const initialCart: Cart = {
    productIds: [],
    productMap: {},
    totalProducts: 0,
    totalCost: 0
}