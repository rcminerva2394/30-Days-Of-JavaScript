





//Exercise: Level 1
    
   
   //1. Display the countries array as a table

    console.table(countries);

   //2. Display the countries object as a table

    countries.forEach((country) => console.table(country))

  //3. 

    console.group('Countries')
    console.log(countries)
    console.groupEnd()   






////Exercise: Level 2
 

   //1. 10 > 2 * 10 use console.assert()
     
     console.assert(10 > 2 * 10)


   //2. Write a warning message using console.warn()

     console.warn(`Beware of malware`)

   //3. Write an error message using console.error()

     console.error(`Please disregar this error`)


 


//Exercise: Level 3


   //1. Check the speed difference among the following loops: while, for, for of, forEach

   let sample = [ ['Rose', 23] , ['Laura', 27], ['Nora', 30]]

     
      console.time('While loop')
      let i = 0;
      while (i < sample.length) {
          console.log(sample[i][0], sample[i][1])
          i++
      }
      console.timeEnd('While loop') // 1.203125 ms



      console.time('For loop')    
      for(i = 0 ; i < sample.length; i++) {
          console.log(sample[i][0], sample[i][1])
      }
      console.timeEnd('For loop')     //// 0.72802734375 ms


   
      console.time('For of loop')
      for (const [name, age] of sample) {
          console.log(name, age)

      }
      console.timeEnd('For of loop')  //  0.4521484375 ms


  
      console.time('ForEach loop')
      sample.forEach(([name, age]) => console.log(name, age))
      console.timeEnd('ForEach loop')  //1.136962890625 ms


//Based on the time recorded above, for of loop is faster than other loops, the slowest one is the while loop, second by forEach loop