const { greet } = require('../src/index');
const { nongao } = require('../src/index');
const { add } = require('../src/index');

test('greet returns correct greeting message', () => {
    expect(greet('John')).toBe('Hello, John!');
});

test('nongao returns correct age message', () => {
    expect(nongao('18')).toBe('Age, 18');
});

test('add function adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
});
