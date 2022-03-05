

//Exercise: Level 1



//1. Declare a function fullName and it print out your full name.

//function without parameter and return
function printFullName() {
    let firstName = 'Rose'
    let lastName = 'Minerva'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName();


//function without argument but with return
function printFullName() {
    let firstName = 'Rose'
    let lastName = 'Minerva'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName

}
printFullName();


//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

//function with parameters
function printFullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
printFullName('Rose', 'Minerva');


  // OR

  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
printFullName('Rose', 'Minerva');

//Using Arrow Function

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printFullName('Rose', 'Minerva'));


//With explicit return


const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Rose', 'Minerva'));



//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
    return num1 + num2
}
addNumbers(2, 3);

//

const addNumbers = (num1, num2) => num1 + num2
addNumbers(4, 4);



//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaRectangle = (length, width) => length * width 
areaRectangle( 4, 5);

//

function areaOfRectangle(length, width) {
    return length * width
}

console.log(areaOfRectangle( 3, 20));


/*5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
Write a function which calculates perimeterOfRectangle. */

function perimeterRec(length, width) {
    return 2 * (length + width)
}

perimeterRec(10, 5);

//

const perimeter = function( length, width) {
    return 2 * (length + width)
}

console.log(perimeter( 2, 2));

//

const perimeter = (length, width) => 2 * (length + width)
perimeter(3, 2);




/*6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
 Write a function which calculates volumeOfRectPrism. */

 const volumePrism = (length, width, height) => length * width * height
 volumePrism( 2, 3, 5);

//

function volumePrism(length, width, height) {
   return length * width * height
}

volumePrism(2, 2, 2);

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaCirc = (r) => {
    let area = Math.PI * r * r
    return area;
}
areaCirc(2);

//

function areaCirc(r) {
    return Math.PI * r *r
}

areaCirc(2);

//

let areaCirc = (r) => Math.PI * r * r
areaCirc(2);


//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

let circumOfCircle = (r) => 2 * Math.PI * r
circumOfCircle(3);

//

function circumOfCircle(r) {
    return 2 * Math.PI * r
}
circumOfCircle(3);


//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass, volume) => mass / volume
density (5, 2);

//

function density(mass, volume) {
    return mass / volume
}

density(4, 2);


/*10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
Write a function which calculates a speed of a moving object, speed.*/


function speed (distance, time) {
    let actualSpeed = distance / time
    return `The speed is ${actualSpeed} km/hr `
} 
speed(50, 5)


//

const speed = function(distance, time) {
    let actualSpeed = distance / time
    return `The speed is ${actualSpeed} km/hr `
} 
speed(50, 5)


//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weight = (mass, gravity) => mass * gravity
weight(2, 6);

//

function weight(mass, gravity) {
    let realWeight = mass * gravity
    return `The weight is ${realWeight}`
}

weight (30, 3)


/*12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
Write a function which convert oC to oF convertCelciusToFahrenheit.*/

const convertCelciusToFahrenheit = function(celcius) {
    let fahrenheit = (celcius * 9 / 5) + 32
    return `It is ${fahrenheit} degree fahrenheit`
}
convertCelciusToFahrenheit(29);



/*13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal,
 overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function getBMI(weight, height) {
    let BMI = weight / (height ** 2)
    if(BMI >= 30) {
        return `You are obese. You need to slim down`
    }else if (BMI >= 25) {
        return `You are overweight`
    }else if(BMI >= 18.5) {
        return `You have a normal weight`
    }else if(BMI < 18.5) {
        return `You are underweight`;
    }
}
    
getBMI(prompt(`Enter your weight in kilos`), prompt(`Enter your height in meters`));


//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

//Spring march-may, summer june - august, autumn sept-nov, winter dec-feb

function month(m) {
    if(m === 'March' || m === 'April' || m === 'May') {
        return `The season is spring`
    }else if(m === 'June' || m === 'July' || m === 'August') {
        return `The season is summer`
    }else if(m === 'September' || m === 'October' || m === 'November') {
        return `The season is autumn`
    } else {
        return `The season is winter`
    }
}

month(prompt(`Enter the month to know the season`));


/*15. Math.max returns its largest argument. Write a function findMax that takes 
three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

function numbers (n1, n2, n3) {
    let biggestNumber = 0;
    for(i = 0; i < arguments.length; i++) {
        if(arguments[i] > biggestNumber) {
            biggestNumber = arguments[i];
        }
    } return `The biggest number is ${biggestNumber}`
}

numbers(prompt(`Enter the first number`), prompt(`Enter the second number`), prompt(`Enter the third number`));













//Exercise: Level 2

/* 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which 
calculates value of a linear equation, solveLinEquation. */


/*1. Enter the linear equation */
let xIntercept
let yIntercept
let slope
function solveLinEquation(A, B, C) {
    let x1 = 0
    y1 = (-A * x1 - C) / B;
    yIntercept = `(${x1},${y1})`
    let y2 = 0
    x2 = (-B * y2 - C) / A;
    xIntercept= `(${x2},${y2})`
    slope = (y2-y1) / (x2-x1);
    
} 

solveLinEquation(-2, 1, -1);
console.log(`The x-intercept is ${xIntercept}, the y-intercept is ${yIntercept}, while the slope is ${slope}`);


/* 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates 
value or values of a quadratic equation, solveQuadEquation. */


function solveQuadEquation(A, B, C) {
    let mainEquation =  Math.sqrt((B ** 2) - (4 * A * C))
    let denom = 2 * A;
    let root1 = (-B + mainEquation) / denom;  
    let root2 = (-B - mainEquation )/ denom;
    return `The value of x is either ${root1} or ${root2}`
 
}

console.log(solveQuadEquation(prompt(`Enter the value for A`), prompt(`Enter the value for B`),  prompt(`Enter the value for C`)));


//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.


const printArray = function(arr)  {
    for(i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    } 
}

const sampleArray = ['Rose', 'Alice', 'Laura', 'Nicole'];
printArray(sampleArray);


/*4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08 */


const showDateTime = () => {
    let now = new Date()
    let month = (now.getMonth() + 1).toString()
    let date = now.getDate().toString()
    let year = now.getFullYear().toString()
    let hours = now.getHours().toString()
    let minutes = now.getMinutes().toString()
    if  (month.length === 1 || date.length === 1 || hours.length === 1 || minutes.length ===1){
        month = `0${month}`
        date = `0${date}`
        hours = `0${hours}`
        minutes =`0${minutes}`
    }
    return `${month}/${date}/${year} ${hours}:${minutes}`
}

showDateTime();


/*5. Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4 */

const swapValues = (x, y) => {
    [x, y] = [y, x];
    return `${x} ${y}`;
}

swapValues(3, 5);



/*6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A'] */

const reverseArray = (array) => {
    let reversedArray =[]
    for(i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
let array = [23, 24, 25, 26, 27];
reverseArray(array);



//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

//Using Array map
function capitalizeArray(arr) {
     capitalizedCountries = arr.map(function(x) { 
        return x.toUpperCase();
    }); return capitalizedCountries;
  } 

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
  
  ]

  capitalizeArray(countries);


//Using loop

function capitalizeArray(arr) {
    let capitalizedCountries = [];
    for(i = 0; i < arr.length; i++) {
        capitalizedCountries.push(arr[i].toUpperCase());
    } return capitalizedCountries;
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
  
  ]

  capitalizeArray(countries);

  
//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


let array = [];
const addItem = (item) => {
    array.push(item)
    return array;
}

addItem(1);


//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

let array = [0, 1, 2, 3, 4, 5];
function removeItem(index) {
    array.splice(index, 1)
    return array
}

removeItem(3);


//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(n) {
    let sumOfAll = 0;
    for(i= n; i > 0; i--) {
        sumOfAll += i;
    }
    return sumOfAll;

}

sumOfNumbers(6);


//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (n) => {
    let sumOdds = 0;
    for(i = n; i > 0; i--) {
        if(i % 2 !== 0) {
            sumOdds += i;
        }
    } return sumOdds
}

sumOfOdds(3);



//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEvens = (n) => {
    let sumEven = 0;
    for(i = n; i > 0; i--) {
        if(i % 2 == 0) {
            sumEven += i
        }
    } return sumEven;
}


sumOfEvens(10);


/*13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51. */

let odds = 0;
let evens = 0;
function evensAndOdds(integer) {
    for(i = integer; i >= 0; i--){
        if(i % 2 === 0) {
            odds++;
        } else if (i % 2 !== 0) {
            evens++;
        }
    } return [odds, evens];
}

evensAndOdds(100);
console.log(`The number of odds are ${odds}`);
console.log(`The number of evens are ${evens}`);


/*14. Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10 */

//regular function
let sumArguments = 0;
function sumOfArguments () {
    for (i = 0; i < arguments.length; i++) {
        sumArguments += arguments[i];
    } return sumArguments;
} 

sumOfArguments(1, 2, 3, 4, 5);
sumOfArguments(6, 7, 8, 9, 10);

//arrow function using spread operator

let sum = 0;
const sumArguments = (...args) => {
    for (i = 0; i < args.length; i++) {
        sum += args[i];
    } return sum;
}

sumArguments(0, 1, 2, 3, 4, 5, 6, 7);


//15. Writ a function which generates a randomUserIp.

function randomUserIP() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let fourth = Math.floor(Math.random() * 256);
    return `${first}.${second}.${third}.${fourth}`
}

randomUserIP();


//16. Write a function which generates a randomMacAddress

"xx:xx:xx:xx:xx:xx".replace(/x/g, function() {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
});


//

let alphaNumeric = '0123456789ABCDEF'
function makeMac() {
    let aa = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    let bb = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    let cc = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    let dd = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    let ee = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    let ff = alphaNumeric.charAt(Math.floor(Math.random() * 16)) + alphaNumeric.charAt(Math.floor(Math.random() * 16));
    return `${aa}:${bb}:${cc}:${dd}:${ee}:${ff}`;
}

makeMac()

//

let alphaNumeric = '0123456789ABCDEF';
let macAdd = "xx:xx:xx:xx:xx:xx";

macAdd.replace(/x/g, function() {
   return alphaNumeric.charAt(Math.floor(Math.random() * 16)) });



/*17. Declare a function name randomHexaNumberGenerator. When this function is called it
 generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df' */

let char = '0123456789ABCDEFabcdef';
let hexaNum = '#';
function randomHexaNumberGenerator(num) {
    for (i = 0; i < num; i++) {
        hexaNum += char.charAt(Math.floor(Math.random() * char.length));
    } return hexaNum;
}
randomHexaNumberGenerator(6);


/*18. Declare a function name userIdGenerator. When this function is called it generates seven character id. 
The function return the id.

console.log(userIdGenerator());
41XTDbE */

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let userID = '';
function makeID(num) {
    for (i = num; i > 0; i--) {
        userID += characters.charAt(Math.floor(Math.random() * characters.length));
    } return userID
}

makeID(7);
















//Exercise: Level 3


/* 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.

It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number 
of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
' 

*/


const userIdGeneratedByUser = (charNum, IdNum) => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userIDs ='';
    for (i = IdNum; i > 0; i-- ) {
        let tempID = '';
        for(j = charNum; j > 0; j--) {
            tempID +=  characters.charAt(Math.floor(Math.random() * characters.length));
        };
         userIDs += tempID + '\n';
    } return console.log(userIDs);
}
userIdGeneratedByUser(7, 4);


/*2. Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255) */


function rgbColorGenerator() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

rgbColorGenerator();

/*3. Write a function arrayOfHexaColors which return any number of hexadecimal colors
 in an array.*/



function arrayOfHexaColors(num) {
    let hexChar = '0123456789ABCDEF';
    let hexaArray = [];
    for (j = num; j > 0; j--) {
        let randomhexID = '#';
        for (i = 0; i < 6; i++) {
            randomhexID += hexChar.charAt(Math.floor(Math.random() * hexChar.length))
        } hexaArray.push(randomhexID);
    } return hexaArray; 
}

arrayOfHexaColors(7);


//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
    let arrayRGB = [];
    for(i = num; i > 0; i--) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let rgb = `rgb (${r}, ${g}, ${b})`
        arrayRGB.push(rgb);
    } return arrayRGB
 
}

arrayOfRgbColors(3);

//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = (hexaColor) => {
    let r = parseInt(hexaColor.substring( 1, 3), 16)
    let g = parseInt(hexaColor.substring( 3, 5), 16)
    let b = parseInt(hexaColor.substring( 5, 7), 16)
    return  `rgb (${r}, ${g}, ${b})`
}

convertHexaToRgb('#4287f5');  // r= 42 (4 * 16 + 2 *1 = 66, g = 8 * 16 + 7 = 135 , b = 15 * 16 + 5 = 245 )


//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = (h) => {
    let hex = h.toString(16);  //number.toString(radix) parses the number to a string using radix or base, if no specific radix, default is 10
    return h.length == 1 ? hex = '0' + hex : hex;
    
}

const RGB = (r,g,b) => {
    return '#' + convertRgbToHexa(r) + convertRgbToHexa(g) + convertRgbToHexa(b);

}

RGB(66, 135, 245);



/* 7. Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)' */


const generateColors = (colorType, number) => {

    if (colorType == 'hexa') {
        let hexaID = '0123456789ABCDEF';
        let hexaArray = [];
        for ( i = number; i > 0; i--){
            let hexCode = '';
            for (j = 0 ; j < 6; j++){
                hexCode += hexaID.charAt(Math.floor(Math.random() * hexaID.length));
            } hexaArray.push(hexCode);
        } return hexaArray;
        
    } else if (colorType == 'rgb') {
        let rgbArray = [];
        for (i = number; i > 0 ; i--) {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            rgb = `rgb(${r}, ${g}, ${b})`;
            rgbArray.push(rgb);
        } return rgbArray;
    } 
}

generateColors(prompt('Enter hexa or rgb'), prompt('Enter how many colors you want'));



//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Richard Durstenfeld -- The modern method of shuffling


array = [1, 2, 3]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { //reverse loop is used to avoid swapping random items in the whole array
        const j = Math.floor(Math.random() * (i + 1)); //// to avoid swapping the same items that were already swapped; the reason it is i + 1 and not array.length because to limit the random index based on the current number of items within the array when the reverse loop is running
        [array[i], array[j]] = [array[j], array[i]];  //// swaps two items remained in the loop using the random j and the current index or i,this is to avoid swapping items randomly from the whole array
    } return  array
}

shuffleArray(array);


//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (num) => {
    let result = num;
    for (i = num - 1; i > 0; i--) {
        result = result * i;
    } return result
}

factorial(10);

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(anything) {
    if(anything === undefined || typeof anything === 'undefined') {
        return 'It\'s empty';
    } else {
        return 'It\'s not empty.';
    }
}

isEmpty();


//11. Call your function sum, it takes any number of arguments and it returns the sum.

   //reg function
  
   function sumAll(){
    let sum = 0;
       for (i = 0; i < arguments.length; i++) {
           sum += arguments[i];
       } return sum;
   }

   sumAll(1, 2, 3, 4, 5);

   //arrow function
   const sumALL = (...args) => {
    let sum = 0;
    for (const num of args) {
        sum += num;
    } return sum
   }
   
   sumAll(1, 2, 3);


/*12. Write a function called sumOfArrayItems, it takes an array parameter and return
 the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.*/


 //if there is one non-number type, and if it will make the whole array invalid
function sumOfArrayItems(arr) {
    let sum = 0;
    
    for (i= 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        } else if (typeof arr[i] !== 'number') {
            return 'One of the items in the array is not a number type';
        }   
    } return sum
}
  
const nums = [ 1, 2, 3];
sumOfArrayItems(nums);



//if even there is a non-number type, the function will still give the total sum of the number type items within the array

function sumOfArrayItems(arr) {
    let sum = 0;
    let nonNumberType = false;
    for (i= 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        } else {
            nonNumberType = true;
        }
    } 
    
    if (nonNumberType === false) {
        return `All of the array items are number types. The total of the array items is ${sum}`
    } else if (nonNumberType === true) {
        return `The total sum of the number type items is ${sum}. Non-number types are present`
    }
      
}
  
const nums = [ 1, 2, 3, 'f', 2];
sumOfArrayItems(nums);


/*13. Write a function called average, it takes an array parameter and returns the average of the items. 
Check if all the array items are number types. If not give return reasonable feedback.*/

let total = 0;
let nonNumberType = false
let arrAverage;
let nonNumberItems = 0;

function average(arr) {
    for (i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            total += arr[i]
        } else {
            nonNumberType = true;
            nonNumberItems++;
        }
    } 

    if (nonNumberType === false) {
        arrAverage = total / arr.length;
        return `The average of the array items is ${arrAverage}. All items are number types`

    } else if (nonNumberType === true) {
        arrAverage = total / (arr.length - nonNumberItems);
        return `Non-number type is present. The average of the number types items is ${arrAverage}`
    }
}


nums = [20, 30, 40, 50];
average(nums);

numbers = [50, 20, 30, 'f', 40, 'g', false, 50];
average(numbers);


/*14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and 
return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'

*/

function modifyArray(arr) { 
    if(arr.length < 5) {
        return `item not found`
    } else if(arr.length >= 5) {
            arr[4] = arr[4].toUpperCase(); ///// just use assignment operator, and whatever expression on the right to modify your array item
            return arr;          
    } 
}

let arrayItems = ['Lora', 'Nora', 'Dora', 'Pora', 'Cora', 'Bora'];
let names = ['Lora', 'Nora', 'Pura', 'Sera', 'Nara'];

modifyArray(names);



//15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
    let nonPrime = false;
     for (i = 2 ; i <= num ; i++) {   
         if (num % i === 0 && i !== num) {    //check if the num is not prime by setting conditions (no remainder, and not number itself)
             nonPrime = true;
             return `${num} is not a prime number`
         } 
    } 

    if(nonPrime === false) {
        return `${num} is a prime number`
    } 
    

}

    
isPrime(169); ///answer is not prime


//OR but just the same solution

function isPrime(num) {
    let prime = true
     for (i = 2 ; i <= num ; i++) {   
        if (num % i === 0 && i !== num) {    //check if the num is not prime by setting conditions (no remainder, and not number itself) 
            prime = false;
            return `${num} is not a prime number`;
         }    
    } 
    if (prime === true) {
        return `${num} is a prime number`
    }
}

    
isPrime(169);
isPrime(143);
isPrime(817);




//16. Write a functions which checks if all items are unique in the array.

//using nested loop

function hasDuplicates(arr) {
    let noDuplicates = true;
    for(i= 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j] & i !== j)  { /// the value should be the same but index of i and j should not be the same to avoid comparing with thyself
              noDuplicates = false;
              return `Items contain duplicate elements`
            }
        
        }
    }
    if(noDuplicates === true) {
        return `All items are unique`
    }
}
let array = ['Lora', 'Dora', 'Nora','Lora'];
hasDuplicates(array);



//Using index and loop

function hasDuplicates(arr) {
    let result = false;
    for(i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) { //lastIndexOf givs the position of the last item in the array. So, if the index or position of the item is not equal with the indexOf of the item, it means there is a duplicate
            result = true
        }
    }

    if(result === true) {
        return `Items contain duplicate elements`
    } else if (result === false) {
        return `All of the items are unique`
    }

}
let array = ['Lora', 'Dora', 'Nora'];
hasDuplicates(array);



//using Set object, if it is true, it means there is a duplicate, if not, all of the values are unique.

function hasDuplicates(arr) {
    return ((new Set(arr)).size !== arr.length)  //Set store unique values of any type, size returns the number of unique elements in a set. .size is like the .length
}   


let array = ['Lora', 'Dora', 'Nora'];
hasDuplicates(array);


    //or to make it clear

        function hasDuplicates(arr) {
            let newArr = new Set(arr);
            if(newArr.size === arr.length) {
                return `All of the items are unique`
            } else {
                return `Items contain duplicate elements`
            }
        }

let array = ['Lora', 'Dora', 'Nora'];
hasDuplicates(array);



//17. Write a function which checks if all the items of the array are the same data type.

//Using Set and typeOf
   function allSameTypes(arr) {
       return new Set(arr.map(x => typeof x )).size <= 1
   }


   let array1 = [1, 'Nora', true]; //false
   allSameTypes(array1);

   //Still set and typeOf but with clear description

   function allSameTypes(arr) {
       let checkDataType = [];
       checkDataType = new Set(arr.map(x => typeof x));
       if(checkDataType.size !== 1) {
           return `The items don't have the same type`
       } else {
           return `They all have the same type`
       }
   }
   
   let array1 = [1, 'Nora', true]; //false
   allSameTypes(array1);


//using nested loop

  function allSameTypes(arr) {
      for (i= 0; i < arr.length; i++) {
          for (j = 0; j < arr.length; j++) {
              if(typeof arr[i] !== typeof arr[j]) {
                  return `The items don't have the same type`
              }
          }
      } return `All items have the same type`
  }

  let array = [1, 2, 3];
  allSameTypes(array);


  let array1 = [1, 'Nora', true]; //false
  allSameTypes(array1);



  /*18. JavaScript variable name does not support special characters or symbols except $ or _. 
  Write a function isValidVariable which check if a variable is valid or invalid variable. */

 /*

Basically, in regular expression form: [a-zA-Z_$][0-9a-zA-Z_$]*. In other words, the first character can be a letter or _ or $, 
and the other characters can be letters or _ or $ or numbers.

*/

const checkIfNameIsValid = (name) => {
    let validName = false
        if (name.search(/[a-z_$]/g) === 0) {
            for(i = 1; i < name.length; i++) {
               if(name[i].search(/[a-zA-Z_$0-9]/g) === -1 ) {
                 validName = false;
                 return `${name} is an invalid name`
               }
            } validName = true;
        } else if(name[0].search(/[a-z_$]/g) === -1 ) {
            return `${name} is an invalid name`
        }

        if (validName === true) {
            return `${name} is a valid name`
        }
    }
        
    checkIfNameIsValid('ela');    //valid  
    checkIfNameIsValid('%la');    //invalid   
    checkIfNameIsValid('e%la');   //invalid


/* 19. 
Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]

*/

let sevenRanNum= new Array();

function sevenRandomNumb() {
    while (sevenRanNum.length < 7) {
        var r = Math.floor(Math.random() * 10);
        if ( r !== 0 && sevenRanNum.indexOf(r)=== -1) {
            sevenRanNum.push(r);
        }
    } 
}

sevenRandomNumb();
console.log(sevenRanNum);



/*20
rite a function called reverseCountries, it takes countries array and first
 it copy the array and returns the reverse of the original array
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

//using reverse loop

let newCountries = []
function reverseCountries(arr) {
    for (i = arr.length - 1 ; i >= 0; i-- ) {
        newCountries.push(arr[i]);
    }
    return newCountries
}

reverseCountries(countries);


//using map function and reverse method
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


function reverseCountries(arr) {
    newCountries = arr.map(function(x){
        return x;})
    return newCountries.reverse()
}

reverseCountries(countries);


//using slice and reverse

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

let newCountries = [];
function reverseCountries(arr) {
    newCountries = arr.slice(0, arr.length);
    return newCountries.reverse();
}

reverseCountries(countries);
