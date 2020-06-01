const sum = require('../src/js/sum');

test('sum', () => {
  // expect(1+1).toBe(2); // <-- primjer koji prolazi
  expect(sum(1,2)).toBe(3);
});