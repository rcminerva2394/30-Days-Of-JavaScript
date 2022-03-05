
//Exercise: Level 1


//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Rose';
let lastName = 'Minerva';
let country = 'Philippines';
let city = 'Marikina';
let age = 27;
let isMarried = false;
let year = 1994;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

//2. Check if type of '10' is equal to 10

let num = '10';
console.log(num === 10);

//OR

console.log(typeof '10'=== typeof 10);

//3. Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') === 10);

/*4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value. */

//truthy

let truthyString = 'Truthy';
let intNum = 1;
let girlBoolean = true;

//falsy

console.log( 0 === true);
let name
console.log(name === true);
let age = null;
console.log(age === true);


/*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/

let one = 4 > 3 === true;
console.log(one);

let two = 4 >= 3 === true;
console.log(two);

let three = 4 < 3 === false;
console.log(three);

let four = 4 <= 3 === false;
console.log(four);

let five = 4==4 === true;
console.log(five);

let six = 4===4 === true;
console.log(six);

let seven = 4 != 4 === false;
console.log(seven);

let eight = 4 !== 4 === false;
console.log(eight);

let nine = 4 != '4' === false;
console.log(nine);

let ten = 4 == '4'  === true;
console.log(ten);

let eleven = 4 === '4' === false;
console.log(eleven);

let pythonName = 'python',
    jargonName = 'jargon';

    console.log(pythonName.length > jargonName.length);

/*6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python */

console.log( 4 > 3 && 10 < 12 === true, 4 > 3 && 10 > 12 === false, 4 > 3 || 10 < 12 === true, 4 > 3 || 10 > 12 === true, !(4 > 3) === false);
console.log(!(4 < 3) === true, !(false) === true, !(4 > 3 && 10 < 12) === false, !(4 > 3 && 10 > 12) === true, !(4 === '4')=== true);

console.log(!('dragon'.includes('on') && 'dragon'.includes('on')));


/*7. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours(), now.getMinutes(), now.getTime());





//Exercise: Level 2

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter the base of the triangle'),
    height = prompt ('Enter the height of the triangle');
let areaOfTriangle = 0.5 * base * height;
console.log(areaOfTriangle);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/*Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12) */

let sideA = prompt('enter the value of side A', 'write \'5\'');
let sideB = prompt('enter the value of side B', 'write \'4\'');
let sideC = prompt('enter the value of side C', 'write \'3\'');
let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(perimeter);

/*3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter 
    of rectangle (perimeter = 2 x (length + width))*/

    let length = Number(prompt ('Enter the length of the rectangle')),
        width = Number(prompt('Enter the width of the rectangle'));
    let areaOfRectangle = length * width;
    let periOfRectangle = 2 * (length + width);
    console.log(areaOfRectangle, periOfRectangle);

/*4. Get radius using prompt and calculate the area of a circle 
(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

let radius = Number(prompt('Enter the raidus of the circle'));
const PI = 3.14;
let areaCircle = PI * (radius ** 2);
let circum = 2 * PI * radius;
console.log(Math.round(areaCircle), Math.round(circum));

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

let xIntercept;
let yIntercept;
let x1 = 0
y1 = 2 * x1 - 2;
xIntercept = `(${x1},${y1})`;
let y2 = 0
x2 = -2 / -2;
yIntercept = `(${x2}, ${y2})`;
let slope = (y2-y1)/(x2-x1);
console.log(xIntercept);
console.log(yIntercept);
console.log(slope);



//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 =  parseInt(prompt('Enter 2')),
    y2 =  parseInt(prompt('Enter 10')),
    x1 =  parseInt(prompt('Enter 2')),
    x2 =  parseInt(prompt('Enter 6'));
let slope = (y2 - y1) / (x2 - x1);
console.log('The slope is ' + slope);


//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = Number(prompt('Enter any number'));
let y = (x ** 2) + (6 * x) + 9;
console.log('the value of y is ' + y);


//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hoursOfWork = parseInt(prompt('Enter the number of hours you worked')),
    ratePerHour = parseInt(prompt('Enter your rate per hour'));
let yourSalary = hoursOfWork * ratePerHour;
console.log('Your weekly earning is $' + yourSalary);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = prompt('Enter your name');
if(myName.length > 7 ) {
    'Your name is long' 
} else {
    'Your name is short'
}

//11. Compare your first name length and your family name length and you should get this output.
let yourFirstName = prompt('Enter your first name'),
    yourLastName = prompt('Enter your last name');
if(yourFirstName.length > yourLastName.length) {
    'Your first name is longer than your last name';
} else { 
    'Your last name is longer than your first name';
}

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 27,
    yourAge = 29;
if(myAge > yourAge) {
    'I am ' + (myAge - yourAge) + ' years older than you';
} else {
    'I am ' + (yourAge - myAge) + ' years younger than you';
}

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

const birthYear = parseInt(prompt('Enter your birth year'));
let now = new Date();
let yearNow = now.getFullYear();
let age = yearNow - birthYear
if(age >= 18) {
    'You are ' + age + ' .' + ' You are old enough to drive. ';
} else {
    'You are ' + age + ' .' + 'You will be allowed to drive after ' + (18 - age ) + ' years';
}

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let lifeExpect = parseInt(prompt('Enter your own life expectancy by years'));
let secondsOfyourlife = lifeExpect * 365 * 24 * 60 * 60;
console.log(`You will be living for ${secondsOfyourlife} seconds`);

/* 15. Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

    console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
    console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`);





//Exercise: Level 3
/*1. Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

let now = new Date();
let year = now.getFullYear();
let month = (now.getMonth() + 1).toString();
let date = (now.getDate()).toString();
let hours = (now.getHours()).toString();
let minutes = (now.getMinutes()).toString();

if (hours.length < 1 || minutes.length <= 1 ){
    console.log(`${year}-${month}-${date} 0${hours}:0${minutes}`);
} else {
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}
