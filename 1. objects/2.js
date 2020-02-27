// Using the different way of accessing and assigning a value to the object using `.` or `[]`

// 1. Define a variable named `user` and assign a blank object to it.
//Merged by mistake so added this line to push again
var obj={

};
var user = obj;

// 2. Add a key of `user name` and a value of `Black Panther` to that object.
var user = obj;
obj["user name"] = `Black Panther`;

// 3. Using `console.log` log the value of `user name` key from the user object.
console.log(obj["user name"]); //Cant write with . operator since key has white spaces.


// 4. Add a key of the value of variable `batch` in the object with the value of 10.
var batch = "myBatch";
obj[batch] = 10;
// 5. Using the alert function alert the value of the key added above.
alert(obj["myBatch"]);
alert(obj.myBatch);

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.
obj["42"] = `The answer to the meaning of life 🧸`;


// 7. Using the function console.log log the value of the key `42`.

console.log(obj["'42'"]); //Cant write with . operator since key name is starting with a number and have special characters

// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.
var city = prompt("Enter the city name you visited las time.");
obj[city] = true;

// 9. Uisng console.log log the value of the key defined above.
console.log(obj[city]); //Cant write with . operator since key name may contain spaces.

// 10. Can you define a key of `let or var` in any object? Reason.

//Tried defining key of 'let' in obj object.  
obj["let"] = 18;
alert(obj["let"]);

//There is no error. JavaScript string, or anything that can be converted to a 
//string, including the empty string can be used as object key