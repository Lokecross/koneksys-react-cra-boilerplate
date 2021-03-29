import { createRandomString } from '@utils';

describe('createRandomStringTest tests', () => {
  test('createRandomStringTest works', () => {
    const monthNumber = createRandomString();
    expect(monthNumber.length > 0).toEqual(true);
  });
  test('createRandomStringTest error', () => {
    const monthNumber = createRandomString();
    expect(monthNumber.length < 0).toEqual(false);
  });
});
