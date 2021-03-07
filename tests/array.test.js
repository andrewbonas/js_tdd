const array = require('../code/array');

const testArray = [1,2,3,4,5,6,7,8]

test('Returns average of array', () => {
  expect(array(testArray).average).toBe(4.5);
});

test('Returns min of array', () => {
  expect(array(testArray).min).toBe(1);
});

test('Returns max of array', () => {
  expect(array(testArray).max).toBe(8);
});

test('Returns length of array', () => {
  expect(array(testArray).length).toBe(8);
});