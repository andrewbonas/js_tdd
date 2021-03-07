const reverse = require('../code/reverse');

test('expect hello to return olleh', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('expect Hello to return olleh', () => {
  expect(reverse('Hello')).toBe('olleH');
  });

test('expect Hello World to return dlroW olleH', () => {
  expect(reverse('Hello World')).toBe('dlroW olleH');
    });

