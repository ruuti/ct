const functionality = require('./functionality');

const inputData = {
  'person': 'beans',
  'cool': 'max',
  'nested': {
    'obj1': 'res',
    'obj12': {
      'res2': 'res3'
    }
  },
  'another': null
}
// Print input data
console.log('Code test', inputData);
// Switch all input data keys/values and reverse the new value.
const outputData = functionality.switchKeysWithValuesAndReturnReversed(inputData)
// Print output data
console.log('Code test', outputData)
