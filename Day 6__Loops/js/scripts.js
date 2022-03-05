

//Exercise: Level 1


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop

   //for loop
   for (let i = 0; i <= 10; i++) {
     console.log(i);
   }

   //while loop
  let i = 0;
  while (i <= 10){
    console.log(i);
    i++;
  }

  //do while loop
  let i = 0;
  do {
    console.log(0);
    i++;
  } while (i <= 10);


//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
  //for loop
  for(let i = 10; i >= 0; i--) {
    console.log(i);
  }

  //while loop
  let i = 10;
  while (i >= 0) { 
    console.log(i);
    i--;
  }

  //do whileloop
  let i = 10;
  do {
    console.log(i);
    i--;
  } while( i >= 0);


//3. Iterate 0 to n using for loop
let i = 0;
let n = Number(prompt('Enter any number'));
do {
  console.log(i);
  i++;
} while ( i <= n);

/* 4. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    ####### */
    
  let numberSymbol = '#'
  for (i = 1; i <= 7; i++) {
    console.log(numberSymbol);
    numberSymbol += "#";
  }
  
  //
  let numberSymbol = '#'
  let i = 1;
  while ( i <= 7) {
    console.log(numberSymbol);
    numberSymbol += '#';
    i++;
  }

  //
  let numberSymbol = '#'
  let i = 1;
  do {
    console.log(numberSymbol);
    numberSymbol += '#';
    i++;
  } while (i <= 7);

  /*5. Use loop to print the following pattern:
  0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}
   /*6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
  for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i**2}   ${i**3}`);
  }
  // 
  let i = 0;
  while (i <= 10) {
    console.log(`${i}   ${i**2}   ${i**3}`)
    i++;
  }
  //
  let i = 0;
  do {
    console.log(`${i}   ${i**2}   ${i**3}`);
    i++;
  } while(i <= 10);

  //7. Use for loop to iterate from 0 to 100 and print only even numbers
for ( let i = 0; i <= 100; i++ ) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

 //8. Use for loop to iterate from 0 to 100 and print only odd numbers
 for(let i = 0; i <= 100; i++) {
   if(i % 2 !== 0) {
     console.log(i);
   }
 }

 //9. Use for loop to iterate from 0 to 100 and print only prime numbers

 //prime numbers are numbers that canbe divided by itself and just one

let primeArray = [];
for (let i = 2; i <= 100; i++) {    // i is the number iterating from 2-100, as we know 0 and 1 are not prime numbers
  let notPrime = false;
  for(let j = 2; j <= i ; j++) {    // j is the divisor we need to check if a certain number(i) is not a prime number;
    if (i % j === 0 && j !== i) {   // here if i and j don't have a remainder, and if j is not the same as i, it is not a prime number. Prime number is divisible to only to its own number and 1.
      notPrime = true;
    }
  }
  if(notPrime === false) {
      primeArray.push(i);
  }
}
console.log(primeArray);



 //10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
 var sum = 0;
 for (i = 0; i <= 100; i++) {
 console.log( sum += i);
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
var even = 0,
    odd = 0;
    for (i = 0; i <= 100; i++) {
      if(i % 2 === 0) {
        console.log(even += i);
      } else {
        console.log( odd += i);
      }
    }
console.log(`The sum of all evens from 0 to 100 is ${even} while the sum of all odds from 0 to 100 is ${odd}`);




/*12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
Print sum of evens and sum of odds as array*/

var sumsOfEvensOdds = [even, odd];
var even = 0,
    odd = 0;
    for (i = 0; i <= 100; i++) {
      if(i % 2 === 0) {
        console.log(even += i);
      } else {
        console.log(odd += i);
      }
    }
console.log(sumsOfEvensOdds);

//13. Develop a small script which generate array of 5 random numbers

let randomArray = new Array();
for (i = 1; i <= 5; i++){
  randomArray.push(Math.floor(Math.random() * 100));
}
console.log(randomArray);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = new Array();
for (i= 1; i <= 5; i++){
  var r = Math.floor(Math.random() * 100);
  if ( r!== 0 && arr.indexOf(r)=== -1) {
    arr.push(r);
  }
}
console.log(arr);

//

let arr = new Array();
while (arr.length < 5){
  var r = Math.floor(Math.random() * 100);
  if ( r !== 0 && arr.indexOf(r)=== -1) {
    arr.push(r);
  }
}
console.log(arr);


//15. Develop a small script which generate a six characters random id:
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
for( var i = 0; i < 6; i++) {
  randomID += characters.charAt(Math.floor(Math.random() * characters.length));
} 
console.log(randomID);







//Exercise: Level 2


//1. Develop a small script which generate any number of characters random id:
function makeRanID(number) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';
  for( var i = 0; i < number; i++) {
    randomID += characters.charAt(Math.floor(Math.random() * characters.length));
} 
  return randomID;
}
console.log(makeRanID(10));


//2. Write a script which generates a random hexadecimal number.

let char = 'ABCDEF0123456789';
let randomHexId = '#';
for (var i = 0; i < 6; i++) {
  randomHexId += char.charAt(Math.floor(Math.random() * char.length));
}
console.log(randomHexId);


//3. Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = `rgba(${r}, ${g}, ${b})`;
console.log(rgb);


/* 4. Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

for ( var i= 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
}
console.log(countries);

//5. Using the above countries array, create an array for countries length'.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


let countriesLength = new Array();
for( var i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}

console.log(countriesLength);





/*6. Use the countries array to create the following array of arrays:


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countryCode = new Array();
let country = [];

for (var i = 0; i < countries.length; i++) {
  countryCode.push(countries[i].substr(0,3).toUpperCase());
  country.push([countries[i], countryCode[i], countries[i].length]);
}
  
console.log(country);



//





/*7. In above countries array, check if there is a country or countries containing the word 'land'.
 If there are countries containing 'land', print it as array. If there is no country containing the word 'land', 
 print 'All these countries are without land'.

['Finland','Ireland', 'Iceland'] */

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countryLand = new Array();
for (i = 0; i < countries.length; i++) {
  if(countries[i].search('land') === -1) {
    console.log(`All these countries are without land`)
  } else {
    countryLand.push(countries[i]);
  }
}

console.log(countryLand);



/* 8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. If there is no country containing the word 'ai', print 
'These are countries ends without ia'. 

['Albania', 'Bolivia','Ethiopia']

*/

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesEndWithIA = [];
for (i= 0; i < countries.length; i++) {
  if(countries[i].endsWith('ia') === true) {
    countriesEndWithIA.push(countries[i]);
  } else {
    'These are countries end without ia';
  }
}

console.log(countriesEndWithIA);



/*9. Using the above countries array, find the country containing the biggest number of characters.

Ethiopia */


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


let length = 0;
let biggestCountry;
for (i = 0; i < countries.length; i++) {
  if(countries[i].length > length) {
  length = countries[i].length;
  biggestCountry = countries[i];
  }
}


console.log(biggestCountry);




/*10. Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya'] */



const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesFiveChar = [];

for (i = 0; i < countries.length; i++) {
  if(countries[i].length === 5) {
    countriesFiveChar.push(countries[i]);
  }

}

console.log(countriesFiveChar);

//11. Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


let length = 0;
let longestWord;
for (i = 0; i < webTechs.length; i++) {
  if(webTechs[i].length > length) {
    length = webTechs[i].length;
    longestWord = webTechs[i];
  }
}
console.log(longestWord);



/*12. Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

*/

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let webTechsArray = [];
for (i = 0; i < webTechs.length; i++) {
  webTechsArray.push([webTechs[i], webTechs[i].length]);
}
console.log(webTechsArray);






/* 13. An application created using MongoDB, 
Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack */

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let firstLetter;
let acronym = '';
for (i = 0; i < mernStack.length; i++) {
  firstLetter = mernStack[i].substr(0, 1).toUpperCase();
  acronym += firstLetter;
}

console.log(acronym);


/* 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
 using a for loop or for of loop and print out the items.*/

 const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

  //for loop
  for(i = 0; i < webTechs.length; i++){
    console.log(webTechs[i]);
  }
 
  //for of
  for( const web of webTechs) {
    console.log(web);
  }


//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}


/*16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB */
  

//This is what we call as nested for loops or multidimensional array.
  
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for (var i = 0; i < fullStack.length; i++) {
    for(var j = 0; j < fullStack[i].length; j++){
     console.log(fullStack[i][j]);
    }
  }






//Exercise: Level 3

//1. Copy countries array(Avoid mutation)
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesCopy= [];
for(i = 0; i < countries.length; i++) {
  countriesCopy.push(countries[i]);
}

console.log(countries);

/*2. Arrays are mutable. Create a copy of array which does not modify the original. 
Sort the copied array and store in a variable sortedCountries */

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


let sortedCountries = []
for(i = 0; i < countries.length; i++) {
  sortedCountries.push(countries[i]);
}
sortedCountries.sort()
console.log(sortedCountries);

//3. Sort the webTechs array and mernStack array const
 webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


  console.log(webTechs.sort());
  console.log(mernStack.sort());


//4. Extract all the countries contain the word 'land' from the countries array and print it as array
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesLand = []
for(i = 0; i < countries.length; i++) {
  if(countries[i].includes('land') === true) {
    countriesLand.push(countries[i]);
  } 
}
console.log(countriesLand);


//5. Find the country containing the hightest number of characters in the countries array --- same as level 2, number 9

//6. Extract all the countries contain the word 'land' from the countries array and print it as array--- Same as Level 3, number 4.

//7. Extract all the countries containing only four characters from the countries array and print it as array

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesFourChar = [];
for( i = 0; i < countries.length; i++) {
  if(countries[i].length == 4) {
    countriesFourChar.push(countries[i])
  } else {
    "All countries have more than four characters";
  }

}

//8. Extract all the countries containing two or more words from the countries array and print it as array

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesWithTwo = [];
for(i = 0; i < countries.length; i++) {
  if(countries[i].split(' ').length >= 2) {
    countriesWithTwo.push(countries[i]); 
  } else {
    "No countries have two or more words";
  }
}

//9. Reverse the countries array and capitalize each country and stored it as an array

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries.reverse();
let capitalizedCountries = []
for (i = 0; i < countries.length; i++) {
  capitalizedCountries.push(countries[i].toUpperCase());
}
console.log(capitalizedCountries);
