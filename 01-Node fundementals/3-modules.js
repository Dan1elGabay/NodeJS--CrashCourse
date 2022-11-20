//*Moduls
//!  every JS  file is a module (by default)
//! Modules are encapsulated Code - we decide what part of the code we share (only share minimum)

const names = require('./4-names') //* i can also distructing the obj = const {yakir,sara}
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')


 //! if we run a module that inside of him there is an execute function it will run also here
//* it happaned because nodeJS wrap all the code inside the module where there a function execute.

require('./7-mind-grenade')

//! it help us when we want call a module that behind the secnes run and do a complex staff;

//*You can chhose any name you want 
console.log(data.singlePerson);

//* yo can write JS regular
for (let [key,value] of Object.entries(data.singlePerson)){
    console.log(`${key} : ${value}`);
}

sayHi(names.sara);
sayHi('Adi');
sayHi(names.yakir);

