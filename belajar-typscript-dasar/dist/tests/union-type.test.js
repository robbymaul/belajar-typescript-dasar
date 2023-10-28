"use strict";
describe('Union Type', () => {
    it('should be union type typescript', () => {
        let sample = "Robby";
        sample = 100;
        sample = false;
        console.info(sample);
    });
});
describe('Union Type Checking Type Data', () => {
    it('should be union type checking typescript', () => {
        function process(value) {
            if (typeof value === "string")
                return value.toUpperCase;
            else if (typeof value === "number")
                return value + 2;
            else
                return !value;
        }
        expect(process("Eko")).toBe("EKO");
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);
    });
});
