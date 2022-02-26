// This example shows how to create a method/function that can count a word.

// Java is an OOP based language. That means you have a lot of extra functionality/powers that you wouldn't have
// built in in functional programming languages, specifically - strongly typed things and inheritance.
// However, some functional languages can have them if they use frameworks. (TypeScript is JavaScript but almost OOP)

// JavaScript does not need a "main" method or a void method to do things, like Java would. It's a "scripting" language.
// I can run the following code in my browsers console.
// Press F11 or Ctrl + I in Chrome/your browser, and in the Dev Tools, go to Console to try out the code examples.
// (I'm writing these in a way that you can directly use them in Java with small tweaks!)

// Note, Java will require you to specify the below as: count_words(string sentence) { //code }
function countWords(sentence = "") {
    // declaring an int count = 0;
    let count = 0;

    // declaring a char ch[] = new char[sentence.length()];
    let ch = new Array;

    console.log(ch)

    // you'd say: for (int i = 0; i < sentence.length(); i++) { // code }
    for (i = 0; i < sentence.lenght; i++) {
        // Java & JavaScript have the string.charAt() method. It's a method on the String object class.
        ch[i] = sentence.charAt(i);
        console.log(ch[i]);
        if (((i > 0) && (ch[i] != ' ') && (ch[i - 1] == ' ')) || ((ch[0] != ' ') && (i == 0)))
            count++;
    }
    return count;
}

// imagine this is the public static void main(String[] args) { // code }
function main() {
    // this is String sentence instead of let...
    let sentence = "Hello, World!";

    // Technically, this is System.out.println and not console.log ;-)
    console.log(countWords(sentence) + " words");

    // I believe Java allows for fancier string manipulation than above
}

// technically, Java just hides the execution part from you, JavaScript doesn't..
main();