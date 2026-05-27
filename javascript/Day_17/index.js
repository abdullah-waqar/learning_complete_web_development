//* This keyword is the special keyword that refers to the context in which the current code is being executed.

//* Implicit Binding (The Dot Rule)
// When a function is called as a method of an object, this points to the object to the left of the dot.


const user = {
    name: "Tom",
    greet: function() {
        console.log(this.name)
    }
}

user.greet()


//* Explicit Binding (call, apply, bind)

const student = {
    name: "Student Tom",
    greet: function () {
        console.log(`Hi, I am ${this.name} and i like ${this.color}`)
    }
}

const colorChoice = {color: "Pink"}

student.greet.call(colorChoice)

//*The new Binding (Constructor Functions)

function Person(name) {
    // Behind the scenes, JavaScript sets: this = {}
    this.name = name; 
    // Returns the object automatically
}

const bob = new Person("Bob");
console.log(bob.name); // Output: Bob


//* Default Binding (Global Context)
// If a function is called standalone—without a dot, without a new keyword, and without call/apply/bind—JavaScript defaults this to the global scope.

function test() {
    console.log(this); 
}

//test(); 
// In a browser: prints the 'window' object
// In Node.js: prints the 'global' object
// In 'strict mode': prints 'undefined' (to catch bugs!)



const greet = () => {
    console.log(this)
}
console.log("This in arrow function")
greet()



const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    console.log(this)
  }
};

person.myFunction()

/*
In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
In methods like call(), apply() and bind(), this can refer to any object.

*/

// * This in class
//? Here this is refer to the instance of the object being created

class PersonClass
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

  
}


let a = new PersonClass("Tom" , 13)

