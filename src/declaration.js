//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
const firstName = 'Koci'
const age = 29

// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
