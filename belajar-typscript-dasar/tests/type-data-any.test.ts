describe('type data any', ()=> {
    it('shoul type data any suport in typescript', ()=> {
        const person: any = {
            id: 1,
            nama: "Robby Maulana",
            age: 25
        }

        person.age = 26
        person.address = "Indonesia"

        console.info(person)
    })
})