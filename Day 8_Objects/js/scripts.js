





//Exercise: Level 1

   //1. Create an empty object called dog
     let dog = {}
   
   //2. Print the the dog object on the console
     console.log(dog);

   //3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
   dog.name = 'Chokoy'
   dog.legs = 4
   dog.color = 'white'
   dog.age = 4
   dog.bark = function() {
       return  `woof woof`
   }

   console.log(dog);
   console.log(dog.bark());

   //4. Get name, legs, color, age and bark value from the dog object
   console.log(Object.values(dog));

   //5. Set new properties the dog object: breed, getDogInfo
   dog.breed = 'Half-labrador'
   dog.getDogInfo = function() {
       return `${this.name} is a dog and he is ${this.breed}. He has ${this.legs} legs. \nHis color is ${this.color}. He is ${this.age} years old. \nHe likes to say ${this.bark()} \n `
   }

   console.log(dog.getDogInfo());








//Exercise: Level 2
   
   //1. Find the person who has many skills in the users object.

   const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const userNames = Object.keys(users);
  let numberOfSkills = 0;
  let mostSkilled;
  for (i = 0; i < userNames.length; i++) {
      if(users[userNames[i]].skills.length > numberOfSkills) {
          numberOfSkills = users[userNames[i]].skills.length;
          mostSkilled = userNames[i];
      }
  }







  //2. Count logged in users, count users having greater than equal to 50 points from the following object.
     //count logged in users
     

  const userNames = Object.keys(users);
  let numberOfLoggedInUsers = 0;
  let numberOfUsersWith50OrMorePoints = 0;
  for(i = 0; i < userNames.length; i++) {
      if(users[userNames[i]].isLoggedIn === true){
          numberOfLoggedInUsers++
      }

      if(users[userNames[i]].points >= 50) {
          numberOfUsersWith50OrMorePoints++
      }

  }

  console.log(numberOfLoggedInUsers);
  console.log(numberOfUsersWith50OrMorePoints);



  //3. Find people who are MERN stack developer from the users object

  
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const userNames = Object.keys(users);
  let peopleWithMern = []
  for(i = 0; i < userNames.length ; i++) {
      if(users[userNames[i]].skills.includes('MongoDB') && 
         users[userNames[i]].skills.includes('Express') && 
         users[userNames[i]].skills.includes('React') && 
         users[userNames[i]].skills.includes('Node')){
           peopleWithMern.push(userNames[i]);
      }
  } console.log(peopleWithMern);


  //4. Set your name in the users object without modifying the original users object

    
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

    const usersClone = Object.assign({}, users);
      usersClone.Rose = {
      email: 'rose@minerva.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 27,
      isLoggedIn: false,
      points: 30
    };
    
    console.log(usersClone);


    //5. Get all keys or properties of users object

    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }

    let keysOfUsers = Object.keys(users);
    console.log(keysOfUsers);


    //6. Get all the values of users object

    const usersValues = Object.values(users);
    console.log(usersValues);

    //7. Use the countries object to print a country name, capital, populations and languages.

    const countries = {
         Albania: {
            capital: 'Tirana',
            populations: 2873280,
            languages: ['Albanian']
         },
        Bolivia: {
            capital: 'Sucre',
            populations: 11902109,
            languages: ['Spanish', 'Aymara', 'Quechua'],
        },
        Canada: {
            capital: 'Ottawa',
            populations: 38246108,
            languages: ['English', 'French'],

        },
        Denmark: {
            capital: 'Copenhagen',
            populations:  5821574,
            languages: ['Danish'],

        },
        Egypt: {
            capital: 'Cairo',
            populations:  105109751,
            languages: ['Arabic'],

        },
        Finland: {
            capital: 'Helsinki',
            populations:   5553116 ,
            languages: ['Finnish', 'Swedish'],
        }
      
    }

    


let capital,
populations,
bigPopulations,
languagesWithoutTheLastOne,
lastLanguage,
languages;
function printCountryDetails (i) {
    capital = countries[i].capital;
    populations = countries[i].populations;
    languages = countries[i].languages;
   
    if(languages.length > 1) {
        languagesWithoutTheLastOne = languages.slice(0, languages.length - 1).join(', ');
        lastLanguage = languages.slice(languages.length - 1);
        return `${i}'s capital is ${capital} which has a total population of ${populations} and the languages spoken are ${languagesWithoutTheLastOne} and ${lastLanguage}`
    } else if(languages.length === 1 ) {
        return `${i}'s capital is ${capital} which has a total population of ${populations} and the languages spoken is ${languages}`
    }

}

printCountryDetails(prompt(`Write the country name`));





//Exercise: Level 3


/**1. Create an object literal called personAccount. It has firstName, lastName, incomes, 
expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses 
is a set of incomes and its description. **/


const personAccount = {
     firsName: 'Miaka',
     lastName: 'Yuuki',
     incomes: {
          mainjob: 500,
          freelance: 300,
          business: 1000
        },
     expenses: {
          bills: 300,
          food: 500,
          supplies: 200,
          transportation: 100
        },
     totalIncome: function() {
          const incomeArray = Object.keys(this.incomes) // [mainjob, freelance, business]
          let totalIncomes = 0
          for (i = 0 ; i < incomeArray.length ; i++) {
          totalIncomes += this.incomes[incomeArray[i]];
        }
          return totalIncomes
        },
     totalExpense: function() {
          const totalExpenseArray = Object.keys(this.expenses) // [ bills, food, supplies, transportation]
          let totalExpenses = 0
          for (i = 0; i < totalExpenseArray.length; i++) {
            totalExpenses += this.expenses[totalExpenseArray[i]];
        }
          return totalExpenses;
        },
    
     addIncome: function(additionalIncome, incomeValue) {
          let newIncomeName = additionalIncome
          let newIncomeValue = incomeValue
          this.incomes[newIncomeName] = newIncomeValue
     },
     addExpense: function(additionalExpense, expenseValue){
          let newExpense = additionalExpense
          let newExpenseValue = expenseValue
          this.expenses[newExpense] = newExpenseValue
     },
     accountBalance: function() {
          let balance = this.totalIncome() - this.totalExpense()
          return balance
     },
     accountInfo: function() {
      return `This is ${this.firsName} ${this.lastName}'s account. Her total income is ${this.totalIncome()} while her total expenses is ${this.totalExpense()}. That gives her a balance of ${this.accountBalance()}`
    }
}



personAccount.addIncome();
personAccount.incomes;
personAccount.addExpense();
personAccount.expenses;
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());




/**2.
 * **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
   
Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application
 * 

**/


const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];


/** a. Create a function called signUp which allows user to add to the collection.
 *  If user exists, inform the user that he has already an account. **/


///REGULAR LOOP AND BOOLEAN
let signUp = (email, username, password) => {
     
    let emailExists = false
    for(i = 0; i < users.length; i++) {
      if(users[i].email === email) {
        emailExists = true;
      }
    }
    
    if(emailExists === true) {
      return `This email has already been registered.`;
    } else if(emailExists === false) {
      function IDgenerator() {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomID = '';
        for( var i = 0; i < 6; i++) {
          randomID += characters.charAt(Math.floor(Math.random() * characters.length));
        } 
        return randomID
      };
      
      function currentTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
           if(month.toString === 1) {
             month = `0{month}`
           }
        let date = now.getDate();
           if(date.toString() === 1) {
             date = `0{date}`
           };
        let hours = now.getHours();
        let pmhours;
           if(hours > 12) {
             pmhours = hours - 12
           }
           if(hours.length === 1) {
             hours = `0{hours}`
           }
        let minutes = now.getMinutes();
           if(minutes.length === 1) {
             minutes =  `$0{minutes}`
           }
    
        if( hours < 12) {
          return `${month}/${date}/${year} ${hours}:${minutes} AM`
        } else {
          return `${month}/${date}/${year} ${pmhours}:${minutes} PM`
        }
    
      };
        
      let newUser = {
          id: IDgenerator(),
          username: username,
          email: email,
          password: password,
          createdAt: currentTime(),
          isLoggedIn: false,
        };
    
      users.push(newUser);
      return `You are now registered`

    }
  
}
signUp('thomas@thomas.com', 'Thomas', '123333'); ///This email has already been registered
signUp('minerva@minerva.com', 'minerva', '123890'); //You are now registered
console.log(users);



///////// USING FOREACH LOOP and BOOLEAN

let signUp = (email, username, password) => {

  let emailExists = false
  users.forEach(user => {
    if(email === user.email) {
      emailExists = true  
    }
  }) 

  if(emailExists === true) {
    return  `This email has been registered already`
  } else if (emailExists === false) {
    function IDgenerator() {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomID = '';
      for( var i = 0; i < 6; i++) {
        randomID += characters.charAt(Math.floor(Math.random() * characters.length));
      } 
      return randomID
    };
    
    function currentTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
         if(month.toString === 1) {
           month = `0{month}`
         }
      let date = now.getDate();
         if(date.toString() === 1) {
           date = `0{date}`
         };
      let hours = now.getHours();
      let pmhours;
         if(hours > 12) {
           pmhours = hours - 12
         }
         if(hours.length === 1) {
           hours = `0{hours}`
         }
      let minutes = now.getMinutes();
         if(minutes.length === 1) {
           minutes =  `$0{minutes}`
         }
  
      if( hours < 12) {
        return `${month}/${date}/${year} ${hours}:${minutes} AM`
      } else {
        return `${month}/${date}/${year} ${pmhours}:${minutes} PM`
      }
  
    };
      
    let newUser = {
        id: IDgenerator(),
        username: username,
        email: email,
        password: password,
        createdAt: currentTime(),
        isLoggedIn: false,
      };
  
    users.push(newUser);
    return `You are now registered`

  }
     
  
} 

signUp('thomas@thomas.com', 'Thomas', '123333');  //This email has already been registered  
signUp('minerva@minerva.com', 'minerva', '123890'); //You are now registered
signUp('lorena@loreana.com', 'lorry', '120090'); //You are now registered
console.log(users);



// b. Create a function called signIn which allows user to sign in to the application

function signIn(username, password) {
  isLoggedIn = false;
  users.forEach(user => {
    if(username === user.username && password === user.password){
      isLoggedIn = true
      user.isLoggedIn = isLoggedIn;
    }
  }) 

  if(isLoggedIn === true) {
    return `You are now logged in`
  } else if (isLoggedIn === false) {
    return `You can't log in because either your username or password is wrong or you are not yet registered`
  }
}


signIn('Thomas', '123333');
signIn('Lola', '17899'); // `You can't log in because either your username or password is wrong or you are not yet registered`



/**3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct
  which rates the product b. Create a function called averageRating which calculate the average rating of a product
 */


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  },
]

   //a. a. Create a function called rateProduct which rates the product

   function rateProduct(productID, userId, rating) {

      products.forEach(product => {
        if(product['_id'] === productID) {
          product.ratings.push({userId: userId, rate: rating})
        }
      })
   }

   rateProduct('eedfcf', 'glhbf', 3.5 );
 
   //b. Create a function called averageRating which calculate the average rating of a product


function averageRating(productID) {
  let productRatingSum = 0,
      productRatingLength = 0;
  products.forEach(product =>{
    if(product['_id'] === productID) {
      product.ratings.forEach(rating => {
        productRatingSum += rating.rate
        productRatingLength ++
      })
    }
  })
  return productRatingSum / productRatingLength;
}


averageRating('eedfcf');


/***4. Create a function called likeProduct. This function will
 helps to like to the product if it is not liked and remove like if it was liked.**/


 
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  },
]


 function likeProduct(productID, userId) {

   products.forEach(product => {
     if(productID === product['_id']) {
       if(product.likes.indexOf(userId) === -1) {
          product.likes.push(userId); 
       } else if(product.likes.indexOf(userId) !== -1) {
        product.likes.splice(product.likes.indexOf(userId), 1);
       }
     }
   })

 }

 likeProduct('eedfcf', 'fg12cy');
 likeProduct('hedfcg', 'fg12cy');

 
