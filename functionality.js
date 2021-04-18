/**
 * Returns reversed string from input
 * @param {string} inputStr String to reverse
 * @returns {string}        Reversed string
 */
const reverseStr = inputStr =>
  inputStr.toString().split("").reverse().join("");
/**
 * Takes a JSON object as input and returns it
 * with all keys/values switched and the (new)
 * value reversed.
 * @param {object} inputObj JSON object to modify
 * @returns {object}
 */
const switchKeysWithValuesAndReturnReversed = inputObj => {
  const newObj = {};
  // Iterate through all object keys
  Object.keys(inputObj).forEach(key => {
    const currentValue = inputObj[key];
    let newKey;
    // Check if currentValue is an object and recursively
    // handle children
    if(currentValue && typeof currentValue === 'object'){
      newKey = switchKeysWithValuesAndReturnReversed(currentValue);
      // Stringify the new key to avoid [Object object]
      newKey = JSON.stringify(newKey);
    } else {
      newKey = currentValue;
    }
    newObj[newKey] = reverseStr(key);
  });
  return newObj;
}
module.exports = {
  switchKeysWithValuesAndReturnReversed,
  reverseStr
};
