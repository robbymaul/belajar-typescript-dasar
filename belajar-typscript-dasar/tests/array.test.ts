describe('Array', ()=> {
    it('should same with javascript', ()=> {
        const names: string[] = ['robby', 'maulana']
        const values: number[] = [1,2,3]

        console.info(names)
        console.info(values)
    })
    
    it('should support  readonly array', ()=> {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"]

        console.info(hobbies)

        // hobbies[0] = "maingame";
    })

    it('should support readonly tuple array', () => {
        const person: readonly [string, string, number] = ["robby", "maulana", 25]

        console.info(person)
    })
})