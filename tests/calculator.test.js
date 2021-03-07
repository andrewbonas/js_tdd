const calculator = require('../code/calculator');

const sum = calculator.sum;
const subtract = calculator.subtract;
const multiply = calculator.multiply;
const divide = calculator.divide;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('subtract 5 - 1 to equal 4', () => {
  expect(subtract(5,1)).toBe(4);
})

test('multiply 5 * 5 to equal 25', () => {
  expect(multiply(5,5)).toBe(25);
})

test('divide 10 / 2 to equal 5', () => {
  expect(divide(10,2)).toBe(5);
})