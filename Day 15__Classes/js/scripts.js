


//Exercise: Level 1



   //1. Create an Animal class. The class will have name, age, color, legs properties and create different methods



    class Animal {

        constructor (name, type, age, color, legs) {
          this.name = name
          this.type = type
          this.age = age
          this.color = color
          this.legs = legs
          this.skills = []

        }

        getDescription() {
          const description = 'Its name is ' + this.name + '. It is a ' + this.type + ' whose color is ' + this.color + ' and has ' + this.legs + ' legs.'
          return description
        }


        get getSkills() {
          return this.skills
        }

        set setSkill(skill) {
          this.skills.push(skill)
        }

        getCompleteInfo() {
          let skills = this.skills.slice(0, this.skills.length - 1).join(', ') 
          let lastSkill = this.skills.slice(this.skills.length - 1)
          let completeInfo = this.getDescription() + ' Its skills are ' + skills + ' and ' + lastSkill
          return completeInfo 
        }

        static statement(){
          return `Animals are the little angels sent from heaven to teach us to love`
        }

    }

    const animal = new Animal('Chokoy', 'dog', 5, 'white', 4)
    const animal1 = new Animal('Baby', 'cat', 7, 'white', 4)
    const animal2 = new Animal('Lemon', 'cat', 1, 'orange', 4)

    console.log(animal);
    console.log(animal1);
    console.log(animal2);
    console.log(animal.getDescription());
    console.log(animal1.getDescription());
    console.log(animal2.getDescription());

    animal.setSkill = 'jumping'
    animal.setSkill = 'sitting'
    animal.setSkill = 'photobombing'
    animal1.setSkill = 'sleeping'
    animal1.setSkill = 'rubbing'
    animal1.setSkill = 'purring'
    animal2.setSkill = 'sleeping'
    animal2.setSkill = 'eating'
    animal2.setSkill = 'running'

    console.log(animal.skills)
    console.log(animal1.skills)
    console.log(animal2.skills)
    
    console.log(animal.getCompleteInfo())
    console.log(animal1.getCompleteInfo())
    console.log(animal2.getCompleteInfo())
    console.log(Animal.statement())



  
    //2. Create a Dog and Cat child class from the Animal Class.

    class Dog extends Animal {
       intro() {
         console.log(`I am a child of the Animal class`)
       }
    }

    let d1 = new Dog ('Blacky', 'dog', 3, 'black', 4)
    console.log(d1)
    console.log(d1.intro())
    console.log(d1.getDescription())
    d1.setSkill = 'biting'
    d1.setSkill = 'barking'
    d1.setSkill = 'eating'
    console.log(d1.skills)
    console.log(d1.getCompleteInfo())

   class Cat extends Animal {
     intro(){
       console.log(`I'm a cute cat`)
     }
   }

   let c1 = new Cat('Sweetie', 'cat', 5, 'white and black', 4)
   console.log(c1)
   console.log(c1.intro())
   console.log(c1.getDescription())
   c1.setSkill = 'purring'
   c1.setSkill = 'meowing'
   c1.setSkill = 'loving'
   console.log(c1.getSkills)
   console.log(c1.skills)
   console.log(c1.getCompleteInfo())













//Exercise: Level 2



   //1. Override the method you create in Animal class
     
   
   class Dog extends Animal {
     constructor (name, type, age, color, legs, gender) {
       super(name, type, age, color, legs)
       this.gender = gender

     }
    
     intro() {
      console.log(`I am a child of the Animal class`)
    }

    getDescription() {
      let pronoun = this.gender == 'female' ? 'She' : 'He'
      const description =  pronoun + ' is ' + this.name + '. ' + pronoun + ' is a ' + this.type + ' whose color is ' + this.color + ' and has ' + this.legs + ' legs.'
      return description
    }

    getCompleteInfo() {
      let skills = this.skills.slice(0, this.skills.length - 1).join(', ') 
      let lastSkill = this.skills.slice(this.skills.length - 1)
      let pronoun1 = this.gender == 'female' ? 'Her': 'His'
      let completeInfo = this.getDescription() + ' ' + pronoun1 + ' skills are ' + skills + ' and ' + lastSkill
      return completeInfo 
    }


   }

   let d1 = new Dog ('Blacky', 'dog', 3, 'black', 4, 'male')
   console.log(d1)
   console.log(d1.intro())
   console.log(d1.getDescription())
   d1.setSkill = 'biting'
   d1.setSkill = 'barking'
   d1.setSkill = 'eating'
   console.log(d1.skills)
   console.log(d1.getCompleteInfo())


   ///cat


   
   class Cat extends Animal {

    constructor (name, type, age, color, legs, gender) {
      super(name, type, age, color, legs)
      this.gender = gender

    }
    intro(){
      console.log(`I'm a cute cat`)
    }

    getDescription() {
      let pronoun = this.gender == 'female' ? 'She' : 'He'
      const description =  pronoun + ' is ' + this.name + '. ' + pronoun + ' is a ' + this.type + ' whose color is ' + this.color + ' and has ' + this.legs + ' legs.'
      return description
    }

    getCompleteInfo() {
      let skills = this.skills.slice(0, this.skills.length - 1).join(', ') 
      let lastSkill = this.skills.slice(this.skills.length - 1)
      let pronoun1 = this.gender == 'female' ? 'Her': 'His'
      let completeInfo = this.getDescription() + ' ' + pronoun1 + ' skills are ' + skills + ' and ' + lastSkill
      return completeInfo 
    }


  }

  let c1 = new Cat('Sweetie', 'cat', 5, 'white and black', 4, 'male')
  console.log(c1)
  console.log(c1.intro())
  console.log(c1.getDescription())
  c1.setSkill = 'purring'
  c1.setSkill = 'meowing'
  c1.setSkill = 'loving'
  console.log(c1.getSkills)
  console.log(c1.skills)
  console.log(c1.getCompleteInfo())

  














//Exercise: Level 3

   /*
    1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
    and measure of variability(range, variance, standard deviation). In addition to those measures find the min, 
    max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics 
    and create all the functions which do statistical calculations as method for the Statistics class. 
    Check the output below.

    ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), 
(8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


// you output should look like this
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
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34),
   (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


   */


   

class Statistics {

   constructor (arr) {
     this.arr = arr.sort()
     this.percentileRank = 0
   }

   get getMin() {
     return this.arr[0]
   }

   get getMax() {
     return this.arr[this.arr.length - 1]
   }

   get getCount() {
     return this.arr.length
   }
  
   get getSum() {
     let totalSum = this.arr.reduce((prev, curr) => prev + curr)
     return totalSum
   }

   get getMean() {
     return Math.round(this.getSum / this.getCount)
   }

   get getMedian() {
     return this.arr[Math.floor(this.getCount / 2)]
   }

   get getFreqntDist() {

    //will use set and filter
     
     let uniqueArr = new Set(this.arr) //  [24, 25, 26, 27, 29, 31, 32, 33, 34, 37, 38]

     let freqntDistArr = []

      for (const num of uniqueArr) {
        let filteredNum = this.arr.filter((number) => number === num)
        freqntDistArr.push(`(${num} : ${filteredNum.length})`)
      }

      return freqntDistArr;

   }

   get getMode() {

   
     let uniqueArr = new Set(this.arr) //  [24, 25, 26, 27, 29, 31, 32, 33, 34, 37, 38]

      let modeValue = 0
      let mode;
      for (const num of uniqueArr) {
        let filteredNum = this.arr.filter((number) => number === num)
        if(filteredNum.length > modeValue) {
          modeValue = filteredNum.length
          mode = num
        }
      }

      return `(${mode}, ${modeValue})`

   }

   get getRange(){
    let rangeData = this.arr[this.arr.length - 1] - this.arr[0]
    return rangeData;

   }

   get getVariance() {
    let finalVariance = (this.arr.map((data) => (data - this.getMean) ** 2 ).reduce((prev, curr) => prev + curr ) ) / this.getCount
    return finalVariance
   }

   get getStdDev() {
    return Math.sqrt(this.getVariance).toFixed(2);
   }

   set setPercentileRank(percentileRank){
     this.percentileRank = percentileRank
   }

   get getPercentile() {
     let result =  Math.round((this.percentileRank / 100 ) * this.getCount)
     let percentileValueIndex = result + 1;
     let percentileValue = this.arr [percentileValueIndex];
     return `${percentileValue} is the ${this.percentileRank}th percentile or the age of ${percentileValue} is older than the ${this.percentileRank}th of the sample population `


   }

   get getSummary(){
    return `Count: ${this.getCount} \nSum: ${this.getSum} \nMin: ${this.getMin} \nMax: ${this.getMax} \nRange: ${this.getRange} \nMean: ${this.getMean} \nMedian: ${this.getMedian} \nMode: ${this.getMode} \nVariance: ${this.getVariance} \nStandard Deviation: ${this.getStdDev} \nFrequency Distribution: ${this.getFreqntDist} \nPercentile: ${this.getPercentile}` 
   }
  
}




let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
let stat1 = new Statistics(ages)
stat1.setPercentileRank = 30;
console.log(stat1.getMin)
console.log(stat1.getMax)
console.log(stat1.getCount)
console.log(stat1.getSum)
console.log(stat1.getMean)
console.log(stat1.getMedian)
console.log(stat1.getFreqntDist)
console.log(stat1.getMode)
console.log(stat1.getRange)
console.log(stat1.getVariance)
console.log(stat1.getStdDev)
console.log(stat1.getPercentile)
console.log(stat1.getSummary)







/*2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome,
 totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/


class PersonAccount {
  constructor(firstName, lastName, incomes, expenses ) {
    this.firstName = firstName
    this.lastName = lastName
    this.incomes = incomes
    this.expenses = expenses
  }

  getfullName () {
    let fullName = this.firstName + ' ' + this.lastName
    return fullName
  }

  set addIncome(income) {
    this.incomes.push(income)
  }

  get totalIncome() { 
    let totalIncome = this.incomes.reduce((total, curr) => total + curr.amount, 0)
    return totalIncome
  }

  set addExpense(expense) {
    this.expenses.push(expense)
  }

  get totalExpenses() {
    let totalExpenses = this.expenses.reduce((total, curr) => total + curr.amount, 0)
    return totalExpenses
  }

  get accountBalance() {
    let balance = this.totalIncome - this.totalExpenses
    return balance
  }

  getPersonInfo() {
    return `The client's name is ${this.getfullName()}. The client has a total income of ${this.totalIncome} with a total expenses of ${this.totalExpenses}, which gives him or her a remaining balance of ${this.accountBalance}`
  }
}



let person1 = new PersonAccount('Lora', 'Finora', [{ type: 'mainjob', amount : 500}, { type: 'freelance', amount: 300}, {type: 'business', amount: 1000}], 
 [{ type: 'bills', amount: 300}, {type: 'food', amount: 500}, {type: 'supplies', amount: 200}, {type: 'transportation', amount: 100}])




console.log(person1)
console.log(person1.getfullName())
person1.addIncome = {type: 'tutoring', amount: 700}
console.log(person1.incomes);
console.log(person1.totalIncome)
console.log(person1.expenses)
person1.addExpense = {type: 'dental', amount: 100}
console.log(person1.totalExpenses)
console.log(person1.accountBalance)
console.log(person1.getPersonInfo())

