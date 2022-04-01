var pet_prev = { type: "hamu", name: "pochi" };
var pet_seal = { type: "hamu", name: "pochi" };
var pet_freeze = { type: "hamu", name: "pochi" };

var changeProps = (object)=> {
    object.name = "hachi";
    delete object.type;
    object.weight = 42;
};

Object.preventExtensions(pet_prev);
Object.seal(pet_seal)
Object.freeze(pet_freeze)

changeProps(pet_prev)
changeProps(pet_seal)
changeProps(pet_freeze)

console.log("preventExtensions = ");
console.log(pet_prev);
console.log("seal = ");
console.log(pet_seal);
console.log("freeze = ");
console.log(pet_freeze);