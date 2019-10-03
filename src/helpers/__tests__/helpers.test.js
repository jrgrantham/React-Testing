import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('multiplies negative numbers correctly', () => {
    expect(helpers.multiply(-1, -4)).toBe(4);
  });
  it('multiplies a negative and positive number', () => {
    expect(helpers.multiply(-1, 4)).toBe(-4);
  });
  it('3 numbers returns null', () => {
    expect(helpers.multiply(-1, -4, 2)).toBe(null);
  });
  it('1 number returns null', () => {
    expect(helpers.multiply(-1)).toBe(null);
  })
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================
  it('return null if not enough arguements', () => {
    expect(helpers.personMaker(4))
      .toBe(null);
  });
});

describe('multiplyNumbers', () => {
  it('multiplies 2 numbers', () => {
    expect(helpers.multiplyNumbers(2, 5)).toBe(10)
  });
  it('multiplies 3 numbers', () => {
    expect(helpers.multiplyNumbers(2, 5, 3)).toBe(30)
  });
  it('multiplies 3 numbers', () => {
    expect(helpers.multiplyNumbers(2, -5, 1, 4)).toBe(-40)
  });
})
