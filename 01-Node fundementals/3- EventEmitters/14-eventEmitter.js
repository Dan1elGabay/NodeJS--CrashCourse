const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//* ON - listen for an event
//* emit =  emit(=לפלוט) an event
//* response is the name of the event
customEmitter.on('response', ((name, age) => {
    console.log(`Data received: My name is ${name} and i'm ${age} old `);

}))

customEmitter.on('response', (() => {
    console.log(`New Data received `);
}))
//* we can add parameters for the arrow function
customEmitter.emit('response', 'Daniel', 30)

//*////////////////////////////////////////////////////////////////////////*/
const singer = 'Coldplay';

customEmitter.on('start', function (singer) {
    console.log(`OMG ${singer}!`);
});

customEmitter.on('finish', function () {
    console.log(`It was the best concert in my life...`);
});

//* we can add variable for the arrow function
customEmitter.emit('start', singer);
customEmitter.emit('finish');