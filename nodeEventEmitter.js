var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inhreits(Person, events.EventEmitter);

var james = new Person('James');
var KD = new Person('James');
var Steph = new Person('James');
var people = ['James', 'KD', 'Steph'];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + 'said, ' + msg);
    });
});

KD.emit('speak', "I'm a champion now!");
james.emit('speak', 'super team man.');
