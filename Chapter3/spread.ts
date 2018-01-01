var newItem = 3;

var oldArray = [1, 2];

var newArray = [...oldArray, newItem];
console.log(newArray);

var oldPerson = { name: "Chris" };
var newPerson = { ...oldPerson, age: 37 };
console.log(newPerson);
