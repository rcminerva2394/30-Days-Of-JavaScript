





//Exercise: Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//1. Explain the difference between forEach, map, filter, and reduce.

/**
 forEach iterates items in the array like a regular loop, but you still need to write some logic to achieve intended result. Doesn't alter the item. just looping
 Map iterates but return a new array with different result per item. It loops but can alter
 Filter creates a new array with all the elements that fulfilled certain conditions. 
 Reduce is like map, the difference it returns  a single value only unlike map that returns values. Reduce is 
 good for getting average or total sum or whatever Math you need from the array which only requires one value. See example
 below  
**/

 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

 //forEach to iterate just the items in the coutries array
  countries.forEach(country => {
      console.log(country)
  })

  //map to iterate with some changes (new array with changed items)
  const capitalizedCountries = countries.map(country => {
      return country.toUpperCase()
  });

  console.log(capitalizedCountries);

  //filter to check which countries are only six in length (new array as well)
  const countriesWith6AsLength = countries.filter(country => {
     if(country.length === 6) {
         return country
     }
  });

  console.log(countriesWith6AsLength);

  //reduce to get the total sum
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((total, newAmount) => {
     return total += newAmount;
  })

  console.log(sum);


//2. Define a call function before you them in forEach, map, filter or reduce.
   /**A callback function is a function that is being passed as a parameter. It is being called for every element or item in a forEach loop, map, filter,
   or reduce.**/


//3. Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(country => {
  console.log(country);
})

//4. Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(name => {
  console.log(name);
})

//5. Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => {
  console.log(number);
})


//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(country => {
  console.log(country);
})



//7. Use map to create an array of countries length from countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newCountriesLength = countries.map((country) => {
  return country.length
});
console.log(newCountriesLength);



//8. Use map to create a new array by changing each number to square in the numbers array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumber = numbers.map((num) => {
  return num ** 2;
})
console.log(newNumber);


//9. Use map to change to each name to uppercase in the names array
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const upperCaseNames = names.map((name) => {
   name.toUpperCase()
}) 
console.log(upperCaseNames);



//10. Use map to map the products array to its corresponding prices.
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const prices = products.map((productPrice) => {
  return productPrice.price
})

console.log(prices);


//11. Use filter to filter out countries containing land.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesContainingLand = countries.filter(country => 
   country.includes('land')
);
console.log(countriesContainingLand);


//12. Use filter to filter out countries having six character.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesWithSixChar = countries.filter((country) =>
  country.length === 6
)
console.log(countriesWithSixChar);


//13. Use filter to filter out countries containing six letters and more in the country array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesWithSixCharOrMore = countries.filter((country) => {
  return country.length >= 6
})
console.log(countriesWithSixCharOrMore);



//14. Use filter to filter out country start with 'E';

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesThatStartWithE = countries.filter((country) => country[0] === 'E');
console.log(countriesThatStartWithE);


//15. Use filter to filter out only prices with values.

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const productsWithPriceValues = products.filter((product) => typeof product.price === 'number');
console.log(productsWithPriceValues);


//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists (arr) {
  const arrayString = arr.filter((item) => 
    typeof item === 'string'
  )
  return arrayString
}

getStringLists([1, 2, 3, 'long', 'short', true])


//17. Use reduce to sum all the numbers in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum)


/**18. Use reduce to concatenate all the countries and to produce this sentence:
 Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries ***/

 
 const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
 let countriesLast = countries.slice(-1);
 let countriesWithoutTheLast = countries.slice(0, -1)
 
 const concatCountries = countriesWithoutTheLast.reduce((country, current, i, array) => {  
  country += `, ${current}`
  if(i === array.length - 1) {
  country += ` and ${countriesLast} are north European countries`
  }
  return country
 })

console.log(concatCountries);
 

/*19.
 Explain the difference between some and every
 */

//Some returns true if one of the element in the array passes the condition, otherwise it is false while for Every, every element should pass the condition in order to return true


//20. Use some to check if some names' length greater than seven in names array
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areSomeNamesGreaterThanSeven = names.some((name) => name.length > 7)
console.log(areSomeNamesGreaterThanSeven);



//21. Use every to check if all the countries contain the word land
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const areAllCountriesHaveTheWordLand = countries.every((country) => country.includes('land'))
console.log(areAllCountriesHaveTheWordLand);

//22. Explain the difference between find and findIndex.
  //find returns the first element's value that passes or satisfies the condition while findIndex returns the index of the first element that passes the condition



//23. Use find to find the first country containing only six letters in the countries array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryWith6Letters = countries.find((country) => country.length === 6);
console.log(countryWith6Letters);


//24. Use findIndex to find the position of the first country containing only six letters in the countries array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryWith6AsLength = countries.findIndex((country) => country.length === 6)
console.log(countryWith6AsLength);


//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const indexOfNorway = countries.findIndex((country) => country === 'Norway');
console.log(indexOfNorway);


//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const indexOfRussia = countries.findIndex((country) => country === 'Russia');
console.log(indexOfRussia);













//Exercise: Level 2
   
  //1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
 
  const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



const totalPrice = products.map((product) => product.price).filter((price) => typeof price === 'number').reduce((total, cur) => total + cur);
console.log(totalPrice);



//2. Find the sum of price of products using only reduce reduce(callback))

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function onlyNumber(value) {
  if(typeof value === 'number') {
    return value
  } else return 0
  
}

const totalPrice = products.reduce((total, cur) => total + onlyNumber(cur.price), 0);
console.log(totalPrice);


/**3.
 Declare a function called categorizeCountries which returns an array of countries which have 
 some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
**/



let filteredCountries;
function categorizeCountries(pattern) {
  filteredCountries = countries.filter((country) => {
  return country.name.includes(pattern)}).map((country) => country.name)
  return filteredCountries;
}

categorizeCountries('land');



/*4. Create a function which return an array of objects, which is the letter
and the number of times the letter use to start with a name of a country.
*/

let letterCount = []
function firstLetterCount (arr) {
   
   //Use map to create the input or source array
   const arrayOfFirstLetter = arr.map((country) => country.name[0]);

     //create the output array
         

     //iterate the original array for comparison
        arrayOfFirstLetter.forEach((letter) => {    
        
        //Check if there's any object in the output array that contains the same property 
          if(letterCount.some((element) => element.hasOwnProperty(letter))) {

          //if yes, increment the value of the property/letter
            letterCount.forEach((elementL) => {
               if(elementL.hasOwnProperty(letter) === true) {
                  elementL[letter]++
               }
              })
          } else {
              //if not, create and initialize a new object with a value 1 as the first count
                let letterProp = {}
                letterProp[letter] = 1
                letterCount.push(letterProp);
          } 
        })  
        return letterCount;
}

firstLetterCount(countries);



/* 5.
 Declare a getFirstTenCountries function and return an array of ten countries.
  Use different functional programming to work on the countries.js array

*/


function getFirstTenCountries(arr) {
    const firstTenCountries = arr.map((country) => country.name).splice(0, 10)
   return firstTenCountries;
}

getFirstTenCountries(countries);



/* 6.
Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
 */

function getLastTenCountries(arr) {
    const lastTenCountries = arr.map((country) => country.name).splice(-10)
    return lastTenCountries;
}
getLastTenCountries(countries);




//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


//create the output array
let letterCount = []  

function theMostUsedLetter (arr) {

//This is for the array of letter with count

   //Use map to create the input or source array
   const arrayOfFirstLetter = arr.map((country) => country.name[0]);

   //iterate the original array for comparison
  arrayOfFirstLetter.forEach((letter) => {    
      
      //Check if there's any object in the output array that contains the same property 
        if(letterCount.some((element) => element.hasOwnProperty(letter))) {

        //if yes, increment the value of the property/letter
          letterCount.forEach((elementL) => {
             if (elementL.hasOwnProperty(letter) === true) {
                elementL[letter]++
                }
             })
        } else {
            //if not, create and initialize a new object with a value 1 as the first count
              let letterProp = {}
              letterProp[letter] = 1
              letterCount.push(letterProp);
        } 

      return letterCount; 

  })  

//This is for iterating the letter count array to find the most used 

  ///Extract just the letters and put it in an array (used map and for in loop)
  let letters = letterCount.map((letterAndCount) => { 
      for (const property in letterAndCount) {
           return property                           
      }
  }); 

  //set a variable for the mostUsedLetter and value to compare
  let mostUsedLetter;
  let letterValue = 0;

  //Use forEach to iterate or use find
  letters.forEach((key) => {    
    letterCount.forEach((letter) => {
      if(letter[key] > letterValue) {
        letterValue = letter[key];
        mostUsedLetter = key;
      }
    })
  })

  return mostUsedLetter;
     
}

theMostUsedLetter(countries);














//Exercise: Level 3




  //1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

function sortCountries(category) {
  let countriesName;
  let countriesCapital;
  let countriesPopulation;
   if (category === 'name') {
      countriesName = countries.map((country) => country.name);
      return countriesName;
   } else if (category === 'capital') {
      countriesCapital= countries.map((country) => {
        let countryCap = {}
        countryCap[country.name] = country.capital;
        return countryCap;
      })
      return countriesCapital
   } else if (category === 'population') {
      countriesPopulation  = countries.map((country) => {
        let countryProp = {}
        countryProp[country.name] = country.population;
        return countryProp;

      }) 
      return countriesPopulation;
  }
}

sortCountries(prompt('Enter which category do you want to sort the countries, by name, capital or population'));




/* 2.

*** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```
 */


function getTheMostSpokenLanguages (arr, number) {


//THIS IS TO SORT THE COUNTRIES AND CREATE ARRAY OF LANGUAGES AND COUNT

    //sort the languages first - [['Pashto', 'Uzbek', 'Turkmen'], ['Swedish'], ['Albanian'], ['English', 'Samoan']]
      let unsortedLanguages = arr.map((country) => 
          country.languages
      )

    //create an output array for that
      let mostSpokenLanguages = []
    
    //Check if the language exists in the output array
      unsortedLanguages.map((unsorted) => {
          unsorted.forEach((language) => {

    //check if certain language exists in the output array using some  
             if (mostSpokenLanguages.some((oneLanguage) => oneLanguage.country === language)) {

    //if yes, use forEach to iterate because remember some will return items that passed the condition, then increment if it really exists
                  mostSpokenLanguages.forEach((language1) => {
                     if (language1.country === language) {
                         language1.count++
                        }
                  })

      //if it doesn't exists, create the object language and put count value as one
             } else {
                 let languageObject = {}
                 languageObject.country = language;
                 languageObject.count = 1;
                 mostSpokenLanguages.push(languageObject);
             }
       
           })
        return(mostSpokenLanguages)
      
      })

//THIS IS TO SORT THE LANGUAGES IN DESCENDING ORDER TO GET THE TOP 10

      let sortedSpokenLanguages = mostSpokenLanguages.sort((a, b) =>   b.count - a.count);  //descending order
      let topSpokenLanguages = sortedSpokenLanguages.slice(0, number);
      return topSpokenLanguages;


}

getTheMostSpokenLanguages(countries, 15);





/*3.
Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]


*/


function mostPopulatedCountries (arr, number) {

//THIS IS TO SORT THE COUNTRIES AND CREATE ARRAY OF country and populations
     
    //extract the population first - [['Pashto', 'Uzbek', 'Turkmen'], ['Swedish'], ['Albanian'], ['English', 'Samoan']]
     let unsortedPopulation = arr.map((populationNumber) => {
         let populationObject = {}
             populationObject.country = populationNumber.name
             populationObject.population = populationNumber.population
         return populationObject })
  

//THIS IS TO SORT THE LANGUAGES IN DESCENDING ORDER TO GET THE TOP 10

     let sortedPopulation = unsortedPopulation.sort((a, b) =>   b.population - a.population);  //descending order
     let highestPopulation = sortedPopulation.slice(0, number);
     return highestPopulation;

}

mostPopulatedCountries (countries, 10);






/*4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
 and measure of variability(range, variance, standard deviation). In addition to those measures find the min,
 max, count, percentile, and frequency distribution of the sample. You can create an object called statistics
 and create all the functions which do statistical calculations as method for the statistics object.
 Check the output below.


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2                                                                                                                                                                                                                                                                                                                                                                                
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), 
  (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), 
  (4.0, 38), (4.0, 29), (4.0, 25)]

   
*/



/*
CENTRAL TENDENCY
  mean- average
  median- middle number from set of numbers arranged lowest to highest
  mode- the number that is repeated often in the set

MEASURE OF VARIABILITY
  range -  The range of a dataset is the difference between the largest and smallest values in that dataset. 
         Consequently, use the range to compare variability only when the sample sizes are similar.
         highest value- lowest value
     a. interquantile range (Q3-Q1)
         -  is the middle half of the data that is in between the upper and lower quartiles. 
          (Q1- 25% of the dataset, contains lowest values, Q2-Q3 the 50% of the dataset, 
          Q4- 25% of the dataset, contains highest values)
  variance- the average squared difference between data values and the mean
  standard deviation- square root of variance, it uses it's own units
    
     which is the best
      - if data is same size, use range
      - if dataset is skewed, use median and interquantile
      - if normal dataset, use mean and std deviation

  MIN - the lowest value
  MAX - the highest value
  COUNT- number of items/values
  SUM-
  PERCENTILE- the percentage of the number of count and get the values

FREQUENCY DISTRIBUTION



*/


const ages =  [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
let sortedAges = ages.sort(); //  [24, 24, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 29, 31, 31, 32, 32, 32, 33, 33, 34, 34, 37, 37, 38]

let statistics = {
    
    min: function(arr) {
         return arr[0]
    },

    max: function(arr){
         return arr[arr.length - 1];
    },

    count: function(arr){
         return arr.length;
    },

    sum: function(arr) {
      
      let totalSum = arr.reduce((previous, curr) =>
        previous + curr )

      return totalSum
   
    },

    mean: function(arr) {
        return Math.round(this.sum(arr) / this.count(arr))

    },

    median: function(arr){
        return arr[Math.floor(this.count(arr) / 2)]

    },


    freqntDist : function(arr) {   

      let freqntDistOb = {}

        arr.forEach((val) => {

           if(freqntDistOb.hasOwnProperty(val) === true) {
             return freqntDistOb[val]++
           } else {
             freqntDistOb[val] = 1;
           }

          
        })

      return freqntDistOb;

    },


    mode: function(arr) {

      let freqntDist = [] // [{25: 7}, {28: 30}]
      
      //loop the input array and check if it exists in input array, if yes, increment, if not push it in the array of objects
        arr.forEach((val) => {

           if(freqntDist.some((number) => number.hasOwnProperty(val))) {

              freqntDist.forEach((numbr) => {
                if(numbr.hasOwnProperty(val) === true ) {
                   numbr[val]++
                }
              })
           } else {
             let numberValue = {}
             numberValue[val] = 1
             freqntDist.push(numberValue);
           }

          return freqntDist

        })

        let numberKeys = freqntDist.map((num) => {
            return parseInt(Object.keys(num))
        })


        let occurence = 0,
            mode;
        
        numberKeys.forEach((key) => {

          freqntDist.forEach((keyPair) => {
             if(keyPair[key] > occurence) {
                occurence= keyPair[key]
                mode = key
             } 
          })

        })

        return `(mode: ${mode}, count: ${occurence})`
        
        
    },

    range: function(arr) {
         let rangeData = arr[arr.length - 1] - arr[0]
         return rangeData;
    },

    variance: function(arr) {
         let finalVariance = (arr.map((data) => (data - this.mean(arr)) ** 2 ).reduce((prev, curr) => prev + curr ) ) / this.count(arr);
         return finalVariance;
  
    },

    stdDev: function(arr) {
         return Math.sqrt(this.variance(arr)).toFixed(2);
    },

    percentile: function(percentileRank, arr) {
         
        let result =  Math.round((percentileRank / 100 ) * this.count(arr))
        let percentileValueIndex = result + 1;
        let percentileValue = arr [percentileValueIndex];
        return `${percentileValue} is the ${percentileRank}th percentile or the age of ${percentileValue} is older than the ${percentileRank}th of the sample population `
      
    },

    describe: function(arr) {
      let frequencyDistri = JSON.stringify(this.freqntDist(arr));
      return `Count: ${this.count(arr)} \nSum: ${this.sum(arr)} \nMin: ${this.min(arr)} \nMax: ${this.max(arr)} \nRange: ${this.range(arr)} \nMean: ${this.mean(arr)} \nMedian: ${this.median(arr)} \nMode: ${this.mode(arr)} \nVariance: ${this.variance(arr)} \nStandard Deviation: ${this.stdDev(arr)} \nFrequency Distribution: ${frequencyDistri}` 
             
  
    }

}

console.log(statistics.min(sortedAges));
console.log(statistics.max(sortedAges));
console.log(statistics.count(sortedAges));
console.log(statistics.sum(sortedAges));
console.log(statistics.mean(sortedAges));
console.log(statistics.median(sortedAges));
console.log(statistics.freqntDist(sortedAges));
console.log(statistics.mode(sortedAges));
console.log(statistics.range(sortedAges));
console.log(statistics.variance(sortedAges));
console.log(statistics.stdDev(sortedAges));
console.log(statistics.percentile(30, sortedAges));
console.log(statistics.describe(sortedAges));
