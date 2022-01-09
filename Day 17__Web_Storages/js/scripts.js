




//Exercise: Level 1

  //1. Store you first name, last name, age, country, city in your browser localStorage.
    localStorage.setItem('firstName', 'RC')
    localStorage.setItem('lastName', 'Minerva')
    localStorage.setItem('age', 27)
    localStorage.setItem('country', 'Minerland')
    localStorage.setItem('city', 'Minn' )


    console.log(localStorage)
    


//Exercise: Level 2


  /*1. Create a student object. The student object will have first name,
   last name, age, skills, country, enrolled keys and values for the keys.
    Store the student object in your browser localStorage. */

    let studentObj = {
        firstName: 'Nora',
        lastName : 'Cruz',
        age: 27,
        skills: ['HTML', 
                 'CSS', 
                 'JavaScript'
                ],
        country: 'Chocoland',
        enrolled: true
    }

   let studentObjString = JSON.stringify(studentObj, undefined, 2)
   localStorage.setItem('student', studentObjString)

   console.log(localStorage)

   let student = localStorage.getItem('student')
   let studentObject = JSON.parse(student, undefined, 4)
   console.log(studentObject)


