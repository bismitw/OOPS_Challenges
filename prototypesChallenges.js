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

/* 
Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving".
Then, override the move() method in the Car class to return "The car is driving".
*/

/* 
Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. 
The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/



class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    getDetails(){
        return`Make:${this.make}, Model:${this.model}`

    }

    move(){
        return `The vehicle is moving`;
    }
    static isVehicle(obj){
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle{
    startEngine(){
        return `Engine Started`
    }
    move(){
        return `The car is driving`
    }
}

const myCar= new Car("Volkswagan","Polo")
console.log(myCar.getDetails());
console.log(myCar.startEngine());

/* 
Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). 
Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/

    class BankAccount {
    #balance = 0; //private field
    // deposit and withdraw must use the setter logic
    deposit(amount) {
        if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
        }
        this.balance = this.#balance + amount; // use setter
    }

    withdraw(amount) {
        if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
        }
        this.balance = this.#balance - amount; // use setter (will throw if negative)
    }

    get balance() {
        return this.#balance;
    }
    // setter enforces "never negative" rule
    set balance(newBalance) {
        if (newBalance < 0) {
        throw new Error("Balance cannot be negative");
        }
        this.#balance = newBalance;
    }
    }

/* 
Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. 
Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
class Shape{
    area(){
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
    super();
    this.radius = radius;
    }
    area() {
    return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    }
    area() {
    return this.width * this.height;
    }
}

