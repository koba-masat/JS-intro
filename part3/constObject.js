'use strict';
var pet = { type: "hamu", name: "pochi" };

Object.preventExtensions(pet);
// Object.seal(pet)
// Object.freeze(pet)

pet.name = "hachi";
delete pet.type;
pet.weight = 42;