import { Customer, CustomerType } from "../src/enum"

describe('Enum', () => { 
    it('Enum Typescript', ()=> {
        const costumer: Customer = {
            id: 1,
            name: "Robby Maulana",
            type: CustomerType.GOLD
        }

        console.info(costumer)
    })

 })