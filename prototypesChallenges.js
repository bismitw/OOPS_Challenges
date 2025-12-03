/* 
Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/
function Animal(){
}

Animal.prototype.speak=function(){
    return`Animal speaking`;
}

function Dog(){
        Animal.call(this); //Gives dog Animal Properties
}
Dog.prototype = Object.create(Animal.prototype); // Gives Dog Animals Methods.
Dog.prototype.constructor= Dog; //Fix Constructor Pointer

Dog.prototype.bark= function(){
    return `Woof`
}

let myDog = new Dog();
console.log(myDog.speak()); //Animal Inherited Methods
console.log(myDog.bark()); // Own Method
console.log(Object.getPrototypeOf(myDog)=== Dog.prototype);//Does myDog's direct prototype = Dog.prototype?
console.log(Object.getPrototypeOf(Dog.prototype));

/* 
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]". 
Modify the Person constructor to throw an error if the age is not a positive number.
*/

function Person(name, age){
    if (typeof age !=="number" || age <=0) {
        throw new Error("Age Must be a Positive Number"); 
    }
    this.name = name
    this.age = age
}

Person.prototype.greet= function(){
    return `Hello, my name is ${this.name}`;
}

let p = new Person("Alice", 25);
console.log(p.greet()); 
/*   
Class Inheritance
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]".
Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
*/

class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    getDetails(){
        return`Make:${this.make}, Model:${this.model}`

    }
}

class Car extends Vehicle{
    startEngine(){
        return `Engine Started`
    }
}

const myCar= new Car("Volkswagan","Polo")
console.log(myCar.getDetails());
console.log(myCar.startEngine());


