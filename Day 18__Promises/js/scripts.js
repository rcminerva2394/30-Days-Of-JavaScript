




//Exercise: Level 1





  //1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

  const countriesAPI = 'https://restcountries.com/v3.1/all'

/*

 // using promise

  fetch(countriesAPI)
     .then(response => { 
       return response.json()
     })
     .then(data => 
      data.map((country) => {
        let countObj = {}
        countObj.name = country.name
        countObj.capital = country.capital
        countObj.languages = country.languages
        countObj.population = country.population
        countObj.area = country.area
        console.log(countObj)
      }))
     .catch(error => console.error(error))

 
*/



// using async await

  
  const fetchData = async () => {
      try {
          const response = await fetch(countriesAPI)
          const data = await response.json()
          const countries = data.map((country) => {
            let countObj = {}
            countObj.name = country.name
            countObj.capital = country.capital
            countObj.languages = country.languages
            countObj.population = country.population
            countObj.area = country.area
            return countObj
          })
          console.log(countries)
      } catch (err) {
          console.error(err)
      }
  }

  fetchData()
    






//Exercise: Level 2


  //1. Print out all the cat names in to catNames variable.


  
// using Promise

/*
  let catNames = []

  fetch('https://api.thecatapi.com/v1/breeds')
     .then(response => { 
       return response.json()
      })
     .then((data) => {
       data.forEach((name) => {
         catNames.push(name.name)
       })
     })
     .then(console.log(catNames))
     .error(error => console.error(error))

  
*/



//using async await

  const catsAPI = 'https://api.thecatapi.com/v1/breeds'

  const fetchName = async () => {
    try {
      const response = await fetch(catsAPI)
      const data = await response.json()
      let catNames = data.map((name) => {
         return name.name
      })
      console.log(catNames)

    } catch (err) {
      console.error(err)
    }

  }

  fetchName()






//Exercise: Level 3


  //1. Read the cats api and find the average weight of cat in metric unit.
  
  /*
  const catWeight = async () => {
    try {
      const response = await fetch(catsAPI)
      const data = await response.json()
      const weight = data.map((cat) => {
        return cat.weight.metric
      })
      let averages = weight.map((avg) => {
        return (parseInt(avg[0]) + parseInt(avg[avg.length - 1]) ) / 2
      })
      let averageWeight = averages.reduce((prev, curr) => {
        return prev + curr
      }) / averages.length

      console.log(averageWeight)

    } catch(err) {
      console.error(err)

    }
  }

catWeight()








/*
  //2. Read the countries api and find out the 10 largest countries


  const tenLargestCountries = async () => {
    try{

      const response = await fetch(countriesAPI)
      const data = await response.json()
      let countriesArea = data.sort((a, b) => {
        return b.area - a.area

      })
      let tenLargest = countriesArea.slice(0, 10)
      console.log(tenLargest)

    } catch (err) {
      console.error(err)

    }

  }

  tenLargestCountries();




//3. Read the countries api and count total number of languages in the world used as officials.



const fetchLang = async () => {
  try {
      const response = await fetch(countriesAPI)
      const data = await response.json()
      const countriesLang = data.map((country) => {
        return country.languages
      })
      const countriesLanguages = countriesLang.reduce(function(result, current) {
        return Object.assign(result, current)
      }, {});
      const languages = Object.values(countriesLanguages)
      const uniqueLangs = new Set(languages)
      console.log(uniqueLangs)
     
      
  } catch (err) {
      console.error(err)
  }
}

fetchLang()


*/
   
