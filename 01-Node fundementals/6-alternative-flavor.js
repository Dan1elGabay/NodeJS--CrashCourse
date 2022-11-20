'use strict'

//* another way to exports variables:

//*Option 1
module.exports.items = ['item1', 'item2', 'item3'];

const person = {
    name: 'Bob',
    lname: 'Goiala',
    age: 24,
    gender:'male'
}
//*Option 2 = choose th name you want to exports
module.exports.singlePerson = person;

//* module = it's like the window on JS files running in the browser.
//* exports = it's an object {}, the syntax can be exports.'name'. like we calling a key/value inside an Obj. 