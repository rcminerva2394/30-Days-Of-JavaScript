









//Exercise: Level 1

   



   /*1.
   Calculate the total annual income of the person from the following text. ‘He earns 4000 euro 
   from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

   */

  const pattern = /\d+/g
  let income = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
  let incomeArray = income.match(pattern).map((num) => parseInt(num));
  let totalIncome = ((incomeArray.reduce((prev, curr) => prev + curr)) - incomeArray[1]) * 12 + incomeArray[1]
      console.log(totalIncome)




   /*2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
    0 at origin, 4 and 8 in the positive direction. Extract these numbers and find 
    the distance between the two furthest particles.
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12
   */

    let statement = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
    let points = statement.match(/-*\d+/g) //['-12', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints = points.map((num) => parseInt(num)) // [-12, -4, -3, -1, 0, 4, 8]
    distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]; //20
    




  /*3. Write a pattern which identify if a string is a valid JavaScript variable

   is_valid_variable('first_name') # True
   is_valid_variable('first-name') # False
   is_valid_variable('1first_name') # False
   is_valid_variable('firstname') # True


   rules: 
    1) cannot contain any chars except $ and underscore
    2) cannot start with a number
    

  */


    
    function is_valid_variable(string) {

        let pattern = /^(?![0-9_])\w+$/
        let check = pattern.test(string)
        return check

    }


    is_valid_variable('first_name')// # True
    is_valid_variable('first-name')// # False
    is_valid_variable('1first_name') //# False
    is_valid_variable('firstname') //# True







    




//Exercise: Level 2


  /*1. Write a function called tenMostFrequentWords 
  which get the ten most frequent word
from a string? 

    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python
     if you do not love something which can give you all the capabilities to develop an application
      what else can you love.`
    console.log(tenMostFrequentWords(paragraph))


    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

    console.log(tenMostFrequentWords(paragraph, 10))


    [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}


]

*/





//USE SET AND FILTER TO FIND THE MOST FREQUENT WORDS

  
function mostFrequentWords (paragraph, number) {

  let arrOfChars = paragraph.match(/\w+/g) // ['I', 'love', 'teaching', 'If', 'you', 'do', 'not', 'love', 'teaching', 'what', 'else', 'can', 'you', 'love', 'I', 'love', 'Python', 'if', 'you', 'do', 'not', 'love', 'something', 'which', 'can', 'give', 'you', 'all', 'the', 'capabilities', 'to', 'develop', 'an', 'application', 'what', 'else', 'can', 'you', 'love']
  let uniqueArrOfChars = new Set(arrOfChars); //  {'I', 'love', 'teaching', 'If', 'you', …}
  let objArrOfWordCount = []


  for (const char of uniqueArrOfChars) {
    const filteredWords = arrOfChars.filter((word) => word === char)
    objArrOfWordCount.push({word: char, count: filteredWords.length })
  }
 
  let topWordCount = objArrOfWordCount.slice(0, number).sort((a, b) => b.count - a.count);
  return topWordCount

}

mostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python
 if you do not love something which can give you all the capabilities to develop an application
  what else can you love.`, 10)

 







//Exercise: Level 3


  /* 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


     sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as 
     educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs.
      %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

     console.log(cleanText(sentence))

      I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ```
  */




  let pattern = /[@#\$%\^\&*;]/g
  let newText;

  function cleanText (text) {

    newText = text.replace(pattern, '')
    return newText

  }

  cleanText(`%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`)



  /**function that counts the most frequent
     1. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

    ```js
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

 ```
  */

  mostFrequentWords(newText, 3) ///I used the same function above