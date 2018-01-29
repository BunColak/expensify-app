const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);
  if (result !== 7) {
    throw new Error(`The result should be 7 it is not. Result: ${result}`)
  }
});