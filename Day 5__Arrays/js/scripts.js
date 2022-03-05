

//Exercise: Level 1


  //1. Declare an empty array;
   let array = [];
   let array = new Array();
  
  //2. Declare an array with more than 5 number of elements and 3. Find the length of your array
   let array = [1, 2, 3, 4, 5]
   console.log(array.length);

  //4. Get the first item, the middle item and the last item of the array
    console.log(array[0]);
    console.log(array[(array.length - 1) / 2])
    console.log(array[array.length - 1]);
 
  /*5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
  The array size should be greater than 5)*/

    let profile = ['Rose', 27, 'Philippines', '6', 'Poland', 9]
    console.log(profile.length);


  //6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon 
  //7. Print the array using console.log()
  //8.Print the number of companies in the array
  //9. Print the first company, middle and last company
  //10. Print out each company
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    console.log(itCompanies);
    console.log(itCompanies.length);
    console.log(itCompanies[0], itCompanies[(itCompanies.length - 1 )/ 2], itCompanies[itCompanies.length - 1]);
    console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);

  //11. Change each company name to uppercase one by one and print them out
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  
  let newCompanies = itCompanies.join(' ');
  console.log(newCompanies.toUpperCase());
  
  //OR

  console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase());

  //12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  let sentence = itCompanies.pop();
  console.log(`${itCompanies.join(', ')} and Amazon are big IT Companies`) ;

  //13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  let company = prompt('Enter a tech company  name');
    if (itCompanies.includes(company)) {
        `Yes, ${company} exists`;
    } else {
        `No, ${company} is not found`
    }

    
  //14. Filter out companies which have more than one 'o' without the filter method



let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let arrayNumber = parseInt(prompt('Enter any array index from 0-6'));
let techCompany;
itCompanies[arrayNumber].includes('o') 
   ? techCompany = ((itCompanies[arrayNumber].toString()).match(/o/g)).length > 1 ?  `${itCompanies[arrayNumber]} has ${((itCompanies[arrayNumber].toString()).match(/o/g)).length} 'o'` : `It has 1 'o' in it`
   : `${itCompanies[arrayNumber]} doesn't have 'o' in it`;


//OR


let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let arrayNumber = parseInt(prompt('Enter any array index from 0-6'));
let techCompany;
if (itCompanies[arrayNumber].includes('o')) {
   if (techCompany = ((itCompanies[arrayNumber].toString()).match(/o/g)).length > 1) {
    `${itCompanies[arrayNumber]} has ${((itCompanies[arrayNumber].toString()).match(/o/g)).length} 'o'`
   } else {
    `${itCompanies[arrayNumber]} has 1 'o' in it`
   }
} else {
    `${itCompanies[arrayNumber]} doesn't have 'o' in it`;
}


  //15. Sort the array using sort() method
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  itCompanies.sort();
  console.log(itCompanies);

  //16. Reverse the array using reverse() method
  itCompanies.reverse();
  console.log(itCompanies);

  //17.Slice out the first 3 companies from the array
 itCompanies.slice(0, 3);

  //18. Slice out the last 3 companies from the array
itCompanies.slice(-3);

 //19. Slice out the middle IT company or companies from the array
 let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
 itCompanies.splice(((itCompanies.length -1 )/ 2), 1);


//20. Remove the first IT company from the array
itCompanies.splice(0, 1);  
//or
itCompanies.shift();


//21. Remove the middle IT company or companies from the array
itCompanies.splice(((itCompanies.length -1 )/ 2), 1);

//22. Remove the last IT company from the array
itCompanies.pop();

//23. Remove all IT companies
itCompanies.splice();






//Exercise: Level 2

/*1. Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

/*2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)


["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

*/

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = (text.replace((/[,.]/g),'')).split(' ');
console.log(words);
console.log(words.length);

/*3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);

let allergyHoney = prompt("I'm allergic to honey- True or False")
allergyHoney === 'True' 
 ? console.log(`Remove ${shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)}. The list will be ${shoppingCart}`)
 : console.log(`I like honey.`);


 console.log(shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea'));

 //4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(country_list.includes('Ethiopia')){
  console.log('ETHIOPIA')
} else {
  country_list.push('Ethiopia');
  console.log(country_list.sort());
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

if(webTechs.includes('Sass')) {
  'Sass is a CSS preprocess'
} else {
  webTechs.push('Sass')
  console.log(webTechs);
}


/*6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] */

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);







//Exercise: Level 3

/*1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
1.Slice the first ten countries from the countries array

*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortedAges = ages.sort();
const minimum = sortedAges[0];
const max = sortedAges[sortedAges.length - 1];
sortedAges = [19, 19, 20, 22, 24, 24, 24, 25, 25, 26];

//median/middle
let middle;
if((sortedAges.length - 1) % 2 !== 0) {
  middle = (sortedAges[Math.floor((sortedAges.length - 1) / 2)] + sortedAges[Math.floor((sortedAges.length - 1) / 2) + 1]) / 2;
} else {
  middle = sortedAges[(sortedAges.length - 1) / 2];
}

//average of all array values

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
var agesAverage = ages.reduce(function (a,b) {
  return a + b;
}, 0) / ages.length;
console.log(agesAverage);

//Find the range of the ages(max minus min)
let sortedAges = ages.sort();
const minimum = sortedAges[0];
const max = sortedAges[sortedAges.length - 1];
const rangeAge = max - minimum;

//Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs((minimum - agesAverage), max - agesAverage));

//1.Slice the first ten countries from the countries array

console.log(country_list.slice(0, 10));



//2. Find the middle country(ies) in the countries array
let middleCountries;
if((country_list.length - 1) % 2 !== 0) {
    middleCountries = country_list[Math.floor((country_list.length - 1) / 2 )] + ' and ' + country_list[Math.floor((country_list.length - 1) / 2 ) + 1];
} else {
    middleCountries = country_list[(country_list.length - 1) / 2];
}


//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
var country_list =  [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda"
  ]
  
let firstHalfCountries;
let secondHalfCountries;
if((country_list.length - 1) % 2 !== 0) {
  console.log(firstHalfCountries = country_list.splice(0, country_list.length / 2));
  console.log(secondHalfCountries = country_list);
}else { 
firstHalfCountries = country_list.splice(0, Math.floor(country_list.length / 2));
console.log(firstHalfCountries.push('Canada'));
}

//OR

let halfCountries = Math.floor(country_list.length / 2);
let firstHalfCountries;
let secondHalfCountries;
if((country_list.length - 1) % 2 !== 0) {
  console.log(firstHalfCountries = country_list.splice(0, halfCountries));
  console.log(secondHalfCountries = country_list.splice(-halfCountries));
} else {
  firstHalfCountries = country_list.splice(0, Math.floor(country_list.length / 2));
  console.log(firstHalfCountries.push('Another Country'));
}
