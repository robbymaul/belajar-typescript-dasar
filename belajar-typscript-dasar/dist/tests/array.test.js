"use strict";
describe('Array', () => {
    it('should same with javascript', () => {
        const names = ['robby', 'maulana'];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support  readonly array', () => {
        const hobbies = ["membaca", "menulis"];
        console.info(hobbies);
        // hobbies[0] = "maingame";
    });
    it('should support readonly tuple array', () => {
        const person = ["robby", "maulana", 25];
        console.info(person);
    });
});
