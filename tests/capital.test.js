const capital = require('../code/capital');

test('expect dog to equal Dog', () => {
  expect(capital('dog')).toBe('Dog');
});