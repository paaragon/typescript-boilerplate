import exampleModule from '../src/example-module';

describe('Testing example module', () => {
    it('Should return true', () => {
        const result = exampleModule.helloWorld();
        expect(result).toBe('Hello World!');
    });
});