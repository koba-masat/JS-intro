let Member = function (firstName, lastName) {
    if (!(this instanceof Member)) {
        return new Member(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () =>  this.lastName + this.firstName;
}

let mem = new Member('taro', 'yamada');
console.log(mem.getName());