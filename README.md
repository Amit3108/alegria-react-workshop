# Javascript Introduction

**Javascript**

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

**Javascript Variables**

Variables are containers for storing data (storing data values).

JavaScript has three kinds of variable declarations.

**var**

Declares a variable, optionally initializing it to a value.

**let**

Declares a block-scoped, local variable, optionally initializing it to a value.

**const**

Declares a block-scoped, read-only named constant.

**Example**

```
var a;
console.log('The value of a is ' + a); // The value of a is undefined
a=25;
console.log('The value of a is ' + a); // The value of a is 25
```

**Variable Declaration Rule**

-> Names can contain letters, digits, underscores, and dollar signs.

-> Names must begin with a letter.

-> Names can also begin with $.

-> Names are case sensitive (y and Y are different variables).

-> Reserved words (like JavaScript keywords) cannot be used as names.


**JavaScript Array**

An array is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets []. When you create an array , it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

Example

The following example creates the cars array with three elements and a length of three:

```
var cars=['Maruti','BMW','Skoda']; // Here length of the array is 3

```

There are different methods in Array. Above mentioned methods are widely used in react :

1. **push()** -> adds one or more elements to the end of an array and returns the resulting length of the array.

```

let myArray = new Array('1', '2')
myArray.push('3')  // myArray is now ["1", "2", "3"]

```

2. **pop()** -> removes the last element from an array and returns that element.

```
let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray is now ["1", "2"], last = "3"
```

3. **map()** -> returns a new array of the return value from executing callback on every array item.

```
let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase() })
console.log(a2) // logs ['A', 'B', 'C']

```

4. **filter()** -> returns a new array containing the items for which callback returned true.

```
let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // logs [10, 20, 30]
```

**JavaScript Object**

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces {}.

Example:

```
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

```

The following is an example of an object literal. The first element of the car object defines a property, myCar, and assigns to it a new string, "Saturn"; the second element, the getCar property, is immediately assigned the result of invoking the function (carTypes("Honda")); the third element, the special property, uses an existing variable (sales).

**JavaScripts Function**

A JavaScript function is a block of code designed to perform a particular task and executed when "something" invokes it (calls it).

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

->The name of the function.

-> A list of parameters to the function, enclosed in parentheses and separated by commas.

->The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```
function square(number) {
  return number * number;
}

```

The following example function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. The statement return specifies the value returned by the function


**JavaScript Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data.One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class

The constructor method is a special method of a class for creating and initializing an object instance of that class.

Example

```
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

```

