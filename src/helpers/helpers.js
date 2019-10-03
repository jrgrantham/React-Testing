import uuid from 'uuid';

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (somethingNotNumber) {
    throw new Error('I want numbers');
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(a, b) {
  if (arguments.length !== 2) {
    return null
  } else
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('numbers required');
  }
  return a * b;
}

export function personMaker(name, age) {
  if (arguments.length !== 2) return null;
  return {
    id: uuid(),
    name,
    age,
  };
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!

export function multiplyNumbers(...numbers) {
  let result = 1;
  numbers.forEach(number => {
    result = result * number;
  });
  return result;
}