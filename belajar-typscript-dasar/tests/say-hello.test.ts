import { sayHello } from "../src/say-hello";

describe('sayHello', (): void => {
    it('should return hello eko', (): void => {
        expect(sayHello('Robby')).toBe("Hello Robby");
    });
});