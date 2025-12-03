/* 
Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/

function Animal(){
}

Animal.prototype.speak=function(){
    return`Animal Speaking`;
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
console.log(Dog.speak()); //Animal Inherited Methods
console.log(Dog.bark()); // Own Method


console.log(Object.getPrototypeOf(myDog)=== Dog.prototype);//Does myDog's direct prototype = Dog.prototype?
console.log(Object.getPrototypeOf(Dog.prototype));






