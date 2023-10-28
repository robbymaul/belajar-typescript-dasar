describe('Object Type', () => { 
    it('Object type typescript', () => {
        const person: {id : string, name: string} = {
            id: "1",
            name: "robby maulana"
        }

        console.info(person)

        person.id = "2"
        person.name = "ameng"

        console.info(person)
    })
 })