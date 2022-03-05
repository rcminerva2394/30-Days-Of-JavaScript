//Exercise: Level 1

//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript';
console.log(challenge);

//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0,2));

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,22));

//8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//9. Split the string into an array using split() method
console.log(challenge.split());

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let techCo =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCo.split(' '));

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

/* 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

/* 18. Use lastIndexOf to find the position of the last occurrence of the word because 
in the following sentence:'You cannot end a sentence with because because because is a conjunction' */

console.log(sentence.lastIndexOf('because'));

/*19. Use search to find the position of the first occurrence of the word because in the 
following sentence:'You cannot end a sentence with because because because is a conjunction' */

console.log(sentence.search(/because/gi));
console.log(sentence.search('because'));

/*20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '. */
let challengeOne =  ' 30 Days Of JavaScript ';
console.log(challengeOne.trim());
console.log(challengeOne.trim(' '));

/*21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true*/
console.log(challenge.startsWith(30));

/*22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true */
console.log(challenge.endsWith('JavaScript'));

//23. Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match(/a/gi));

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let chal  = '30 Days of';
console.log(chal.concat(' JavaScript'));

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));





//Exercise: Level 2

//1.  Using console.log() print out the following statement:
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

//2. Using console.log() print out the following quote by Mother Teresa:
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = '10';
console.log(typeof num);

let newNum = parseInt(num);
console.log(newNum);

let numOne = Number(num);
console.log(numOne);

let numTwo = +(num);
console.log(numTwo);

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let number = '9.8';
let numberOne = parseFloat(number);
console.log(numberOne);

console.log(Math.ceil(numberOne));

//5. Check if 'on' is found in both python and jargon

let pythonName = 'python';
let jargonName = 'jargon';

console.log((pythonName, jargonName).includes('on'));

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.

let anotherSentence = 'I hope this course is not full of jargon';
console.log(anotherSentence.includes('jargon'));

//7. Generate a random number between 0 and 100 inclusively.
let number0to100 = Math.round((Math.random()) * 100);
console.log(number0to100);

//8. Generate a random number between 50 and 100 inclusively.
let number50to100 = Math.round(((Math.random()) * 50 + 50));
console.log(number50to100);

//9. Generate a random number between 0 and 255 inclusively.
let number0to255 = Math.round((Math.random()) * 255);
console.log(number0to255);

//10. Access the 'JavaScript' string characters using a random number.
let num1to10 = Math.floor(Math.random() * 10);
let jsName = 'JavaScript';
console.log(jsName[num1to10]);

//11. Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

/*12. Use substr to slice out the phrase because because because from the following sentence:'
You cannot end a sentence with because because because is a conjunction' */

let sliceSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sliceSentence.indexOf('because'));
console.log(sliceSentence.substr(31, 23));






//Exercise: Level 3

/*1. 'Love is the best thing in this world. Some found their love and some are still 
looking for their love.' Count the number of word love in this sentence. */

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.match(/love/gi));

/*2. Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */

let allSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(allSentence.match(/because/g));

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/%|\$|@|#|&|;/g,''));
//OR
console.log(sentence.replace(/[%$@#&;]/g, ''));

const newSentence = sentence.replace(/%|\$|@|#|&|;/g,'');

console.log(newSentence.match(/love/gi));
console.log(newSentence.match(/teaching/gi));
console.log(newSentence.match(/teacher/gi));

/* 4. Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'*/

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let multipleIncome = income.match(/\d+/g);
let totalIncome = (Number(multipleIncome[0]) + Number(+multipleIncome[2])) * 12  + Number(multipleIncome[1]);
console.log(totalIncome);


