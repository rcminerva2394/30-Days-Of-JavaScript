





//Exercise: Level 1

   


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


//1. create an empty set

  let numOneToTen = new Set()


//2. Create a set containing 0 to 10 using loop

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (const num of nums) {
      numOneToTen.add(num)
  }

  console.log(numOneToTen)

//3. Remove an element from a set

  console.log(numOneToTen.delete(5))
  console.log(numOneToTen.size)


//4. Clear a set

  console.log(numOneToTen.clear())


//5. Create a set of 5 string elements from array

let arrSample = ['Rosa', 'Bosa', 'Cosa', 'Dosa', 'Losa'];
let setSample = new Set(arrSample);
console.log(setSample);


//6. Create a map of countries and number of characters of a country

const countries = ['Finland', 'Sweden', 'Norway']
  

let countriesChar = new Map();
for (const country of countries) {
     let charCount = country.length
     countriesChar.set(country, charCount)

}
console.log(countriesChar);








//Exercise: Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
   
 //1. Find a union b

const c = [...a, ...b]

const A = new Set(a)
const B = new Set(b)
const C = new Set(c)

console.log(C)


//2. Find a intersection b

let intersection = a.filter(num => B.has(num))
let intersectionSet = new Set(intersection);
console.log(intersectionSet);


//3. Find a with b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const A = new Set(a)
const B = new Set(b)

let abDifference = a.filter(num => !B.has(num))
let abDifferenceSet = new Set(abDifference)
console.log(abDifferenceSet);








//Exercise: Level 3



  //1. How many languages are there in the countries object file.

  //first, extract the language objects first by iterating the array of objects. Then, 
  //Use set to check the unique items only


  let countriesArray = countries.map((country) => country.languages ) // extracted the languages from the raw variable countries
  let countriesLanguages = [].concat.apply([], countriesArray) // combine all array of arrays into one using .apply()
  let languages = new Set(countriesLanguages)
  console.log(languages); // there are 112 languages in total




  /*2. Use the countries data to find the 10 most spoken languages:
     // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]

  */

   //1st, filter the countriesLanguages if it has the same language from the languages Set,
      //if yes, put it in the variable, then push it in the array


function mostWidelySpokenLanguages (arr, number) {

  let countriesArrayOfLanguages = arr.map((country) => country.languages ) // extracted the languages from the raw variable countries
    
  let countriesLanguages = [].concat.apply([], countriesArrayOfLanguages)
  let languages = new Set(countriesLanguages)
  
  let arrayOfLanguagesAndItsCount = [] //check if the particular array of object language exists already

  for (const language of languages) {
      const filteredLang = countriesLanguages.filter((lng) => lng === language)
      arrayOfLanguagesAndItsCount.push({language, count: filteredLang.length})
  }


 //This is to sort them in descending order
   let sortedSpokenLanguages = arrayOfLanguagesAndItsCount.sort((a, b) => b.count - a.count);


//this is to follow the template whichis [{lang:count}]
 let sortedMostSpokenLanguages = sortedSpokenLanguages.map((lang) => {
     let langObject = {}
     langObject[lang.language] = lang.count
     return langObject
    })

//to get the top most spoken languages

let mostSpokenLanguages = sortedMostSpokenLanguages.slice(0, number);
return mostSpokenLanguages

}

mostWidelySpokenLanguages(countries, 10);