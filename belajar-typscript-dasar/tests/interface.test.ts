import { Seller } from "../src/interface"

describe('Interface', () => { 
    it('Should be interface typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123456789",
            npwp: "123456789"
        }

        seller.name = "Toko Robby";

        console.info(seller)
    })
 })

 describe('Funtion Interface', () => { 
    it('Should be function interface typescript', ()=> {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(2, 2)).toBe(4)
    })
  })

describe('Indexable Interface', () => { 
    it('Should be indexable Array interface typescript', () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ['Robby', 'Maulana']

        console.info(names[0])
        console.info(names[1])

        expect(names[0]).toBe("Robby")
        expect(names[1]).toBe("Maulana")
    })

    it('Should be indexable Object interface typescript', () => {
        interface StringDictionary {
            [key: string]: string
        }

        const names: StringDictionary = {
            "name": "Robby Maulana",
            "address": "Indonesia"
        }

        console.info(names['name'])
        console.info(names['address'])

        expect(names['name']).toBe("Robby Maulana")
        expect(names['address']).toBe("Indonesia")
    })
})