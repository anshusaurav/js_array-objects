// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;
//x = 10, y = "abc", a = 10, b = "abc"
// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";
//x = 10, y = "abc", a = 5, b = "def"
// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
//arr = [1,2], arrCopy = [1,2]
// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };
//only surname property will retain in obj, there will be no property named name
// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);
//true
// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);
//Both false
//What's the output
console.log([10] === [10]);
//false
// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // Object { name: "Alex", age: 25 }  
console.log(personObj2); // Object { name: "John", age: 50 }

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
//true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);
//10
//5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a);
console.log(b);
//{"a": 1}
//{"a": 1}


// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);
//Array [ 1 ]
//Array [ 1 ]
//true



// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {...person};
console.log(clone);

// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};

// Output of the below code and why?
user.house === user2.house; // true     Both Primitive, type(string) with same value so true 
user.house == user2.house; // true      Both primitive with same value so true 
user.brothers === user2.brothers; // true //Non primitive data type but with same refenrence
user.brothers == user2.brothers; // true  //Non primitive data type but with same refenrence
user.name == user2.name; // true        Both Primitive, type(string) with same value so true 
user.name === user2.name; // true       Both primitive with same value so true 
user.brothers == user3.brothers; // false   Non-Primitive data-type goes by reference and here we have two different refences
user.brothers === user3.brothers; // false  Non-Primitive data-type goes by reference and here we have two different refences
user.house === user2.house; // true       Both Primitive, type(string) with same value so true 
user.house === user3.house; // true       Both primitive with same value so true 
user.brothers[0] === user2.brothers[0]; // true   Both Primitive, type(string) with same value so true 
user.brothers[0] === user3.brothers[0]; // true   Both primitive with same value so true 
