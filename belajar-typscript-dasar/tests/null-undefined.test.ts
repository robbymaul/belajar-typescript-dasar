describe('Null and Undefined', () => { 
    it('Undifined in Typescript', () => {
        function sayHello(name?: string) {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info('Hello')
            }
        }

        sayHello("Robby")

        const name: string | undefined = undefined;
        sayHello(name)
    })
 })

 describe('Null and Undefined', () => { 
    it('Null in Typescript', () => {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info('Hello')
            }
        }

        sayHello("Robby")

        const name: string | undefined = undefined;
        sayHello(name)
        sayHello(null)
    })
 })