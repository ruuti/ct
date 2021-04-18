const assert = require('assert'),
      functionality = require('../functionality');
/**
 * reverseStr
 */
describe('reverseStr', () => {
  it('should return reversed string', () => {
    const testStr = 'abc';
    const expectedStr = 'cba';
    assert.strictEqual(
      functionality.reverseStr(testStr),
      expectedStr
    );
  });
  it('should return the same string when only one char', () => {
    const testStr = 'f';
    const expectedStr = 'f';
    assert.strictEqual(
      functionality.reverseStr(testStr),
      expectedStr
    );
  });
  it('should return the same string when input is empty string', () => {
    const testStr = '';
    const expectedStr = '';
    assert.strictEqual(
      functionality.reverseStr(testStr),
      expectedStr
    );
  });
});
/**
 * switchKeysWithValuesAndReturnReversed
 */
describe('switchKeysWithValuesAndReturnReversed', () => {
  it('should return object with all keys/values switched and the (new) value reversed', () => {
    const testObj = {"person": "beans"};
    const expectedStr = {"beans": "nosrep"};
    assert.deepStrictEqual(
      functionality.switchKeysWithValuesAndReturnReversed(testObj),
      expectedStr
    );
  });
  it('should return object with all keys/values switched and the (new) value reversed when nested', () => {
    const testObj = {"key":{"child_key":"value"}};
    const expectedStr = {'{"value":"yek_dlihc"}': "yek"};
    assert.deepStrictEqual(
      functionality.switchKeysWithValuesAndReturnReversed(testObj),
      expectedStr
    );
  });
});
