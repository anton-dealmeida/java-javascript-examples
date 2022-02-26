// This example will count the amount of distinct vowels in a sentence.

function main() {
    // Imagine let was String here...
    let sentence = "This is my unique sentence"; // There are 3 vowels in here, I'm expecting 3 to be counted.

    // Imagine this was: System.out.println(countDistinctVowels(sentence));
    console.log(`The distinct vowels were : ${getDistinctVowels(sentence)}`);
    console.log(`Number of Distinct Vowels: ${countDistinctVowels(sentence)}`);
}

// Declaring sentence with a default value of Empty string, it'll allow me to use string methods on it within the code block while I code.
function getDistinctVowels(sentence = "") {
    // Java also supports String.toLowerCase() method.
    // I'm replacing sentence with itself in a lower case only format, so I only have check for lower case letters.
    sentence = sentence.toLowerCase();
    let vowels = "aeiou"; // Declaring what our vowels are.

    let vowelsFound = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (vowels.includes(char)) { // Similar to the Java String.contains method. If vowels includes the char we are looking at...
            if (!vowelsFound.includes(char)) { // Making sure vowel has NOT yet been found.
                vowelsFound += char;
            }
        }
    }

    return vowelsFound; // Return the number of vowels found.
}

// Using the .length property of the String value returned by getDistinctVowels.
function countDistinctVowels(sentence = "") {
    return getDistinctVowels(sentence).length;
}

main();