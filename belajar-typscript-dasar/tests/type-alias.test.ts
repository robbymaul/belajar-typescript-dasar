import { Category, Product } from "../src/type-alias"

describe('type alias', () => { 
    it('type alias typescript', ()=> {
        const category: Category = {
            id: 1,
            name: "Handphone"
        }

        const product: Product = {
            id: 1,
            name: "Samsung S20",
            price: 10_000_000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
 })