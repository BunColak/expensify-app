const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error(`The result should be 7 it is not. Result: ${result}`)
  // }
  expect(result).toBe(7);
});

test ('should contain name', () => {
  const name = 'Bünyamin';

  expect(generateGreeting(name)).toBe(`Hello Bünyamin!`)
});