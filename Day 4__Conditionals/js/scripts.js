
//Exercise: Level 1

//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

let yourAge = prompt('Enter your age');
if(yourAge >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('You are left with ' + (18 - yourAge) + 'years to drive');
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 27,
    yourAge = parseInt(prompt('Enter your age'));
if(myAge > yourAge) {
    console.log(`I'm  ${myAge - yourAge} years older than you.`)
} else if (myAge === yourAge) {
    console.log(`We're the same age`)
} else {
    console.log(`I'm ${yourAge - myAge} years younger than you.`)
}


/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator. */

    //if else

    let a = parseInt(prompt('Enter a number')),
    b = parseInt(prompt('Enter another number'));

    if(a > b){
        console.log(`${a} is greater than ${b}`)
    } else {
        console.log(`${a} is less than ${b}`)
    }

    //ternary

    let a = parseInt(prompt('Enter a number')),
        b = parseInt(prompt('Enter another number'));
    a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

   let num = parseInt(prompt('Enter a number'))
    if(num % 2 === 0 ) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`)
    }

    //ternary operator
    let num = parseInt(prompt('Enter a number'));
    num % 2 === 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`)
    
    


    
    
//Exercise: Level 2

/* 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

//Switch
let score = parseInt(prompt('Enter your score'))
  switch(true) {
      case score >= 80:
           console.log(`Your grade is A`);
           break;
      case score >= 70:
           console.log(`Your grade is B`);
           break;
      case score >= 60:
           console.log(`Your grade is C`);
           break;
      case score >= 50:
           console.log(`Your grade is D`);
           break;
      case score >= 0:
           console.log(`Your grade is F`);
           break;
      default:
           console.log('Not a valid score');
           break;
  }

//If Else
let score = parseInt(prompt('Enter your score'))
if (score >= 80){
    console.log(`Your grade is A`);
} else if (score >= 70){
    console.log(`Your grade is B`);
} else if (score >= 60) {
    console.log(`Your grade is C`);
} else if (score >= 50) {
    console.log(`Your grade is D`);
} else if (score >= 0){
    console.log(`Your grade is F`);
} else {
    console.log(`Not a valid score`);
}


//Ternary
let score = parseInt(prompt('Enter your score'))
let grade = score >= 80 ? 'A'
    : score >= 70 ? 'B'
    : score >= 60 ? 'C'
    : score >= 50 ? 'D'
    : score >= 0? 'F'
    : 'invalid'

    console.log(`Your grade is ${grade}`);


/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

//If else
let month = prompt(`Enter the month`);
let season;
  if (month === 'September' || month === 'October' || month === 'November' ){
    season = 'autumn';
} else if (month === 'December' || month === 'January' || month === 'February'){
    season = 'winter';
} else if (month === 'March' || month === 'April' || month === 'May') {
    season = 'spring';
} else if(month === 'June' || month === 'July' || month === 'August') {
    season = 'summer';
} else {
    season = 'invalid';
}
console.log(`The season is ${season}`);


//ternary
let month = prompt(`Enter the month`);
let season = month === ('September' || 'October' || 'November') ? 'autumn'
    :  month === ('December' || 'January' || 'February') ? 'winter'
    : month === ('March' || 'April' || 'May') ? 'spring'
    :  month === ('June' || 'July' || 'August') ?'summer'
    : 'invalid';

console.log(`The season is ${season}`);


//switch
let month = prompt(`Enter the month`);
let season; 
switch(season) {
    case month === ('September' || 'October' || 'November'):
        console.log( 'The season is ' + ' autumn');
        break;
    case month === ('December' || 'January' || 'February'):
        console.log( 'The season is ' + ' winter');
        break;
    case month === ('March' || 'April' || 'May'):
        console.log( 'The season is ' + ' spring');
        break;
    case month === ('June' || 'July' || 'August'):
        console.log( 'The season is ' + ' summer');
        break;
    default:
        console.log( 'The season is ' + ' invalid');
        break;   
}

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

let dayToday = prompt('What day is it today?')
let day = dayToday === ('Saturday' || 'Sunday') ? 'weekend.'
    : 'working day.';
    console.log(`${dayToday} is a ${day}`);






//Exercise: Level 3
//1 & 2. Write a program which tells the number of days in a month.
/* 31 days= Jan, MArch, May, July, August, Oct, Dec
30 days= April, June, Sept, Nov
28/29= February */
let month = prompt('Write the month in letters to check the number of days it has')
if (month ==='January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month ==='December') {
    console.log(`${month} has 31 days`);
} else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    console.log(`${month} has 30 days`);
} else if (month == 'February') {
    let year = parseInt(prompt('Enter the year YYYY'));
      if ((((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))){
         console.log(`It's leap year. ${month} has 29 days`);
      } else {
         console.log(`${month} has 28 days`);
      }
} else {
    console.log(`You put an invalid month`);
}
    
