




//Exercise: Level 1

  //1. Create a closure which has one inner function
  
   function outer() {
      let declaration = 'How you doin?'
      function inner() {
        console.log(declaration)
      }

      inner()
   }

   outer()




//Exercise: Level 2

  //2. Create a closure which has three inner functions

  function outerFunc(){
    let declare = 'How you doin?'

    function innerFunc(){
      let greet = 'I\'m good'
      console.log(declare)

      function innerOfInnerFunc() {
        let answer = 'and you?'
        console.log(declare, greet)

        function innerMost(){
          console.log(declare, greet, answer)
        }

        innerMost()
      }

      innerOfInnerFunc()
    }

    innerFunc()
  }

  outerFunc()



