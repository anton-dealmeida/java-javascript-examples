// Code Examples (or ways of writing code that can be replicated in Java for your Gr 11 project.)

// declaring a string, imagine this let says string.
let someString = "This is a string.";

// This next for loop will allow us to take the length of the string to iterate through
// each character in the string array.
// Java has .length() property for strings.
// https://www.javatpoint.com/java-string
console.log(someString); //prints: This is a string.
console.log(someString.length); //prints: 17

// Declaring a new string at a global level, if it's inside the for loop, the value won't be available outside of that scope.
// JavaScript requires me to give a value to assign it's type, Java let's me say "string newString;" without a blank value.
let reversedString = "";

// I'm using the length of someString as the actual string can be different lengths, so I'm fetching that at run time.
// I'm using .length - 1 (because arrays start at 0. ;-) )
for (i = someString.length - 1; i >= 0; i--) {
    // Here I'm accessing each individual character of the character array (string) someString on line 10.
    reversedString += someString[i];
}

// This will print the reverse of someString
console.log(reversedString); // prints: .gnirts a si sihT