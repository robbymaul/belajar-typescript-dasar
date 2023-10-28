describe('Operational Properties', () => { 
    it('Operational Properties Typescript', () => {
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "robby maulana"
        }

        console.info(person)

        person.id = "2"
        person.name = "ameng"
        person.hobbies = ["membaca", 'menulis']

        console.info(person)
    })
 })