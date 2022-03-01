






//Exercise: Level 1



/*1.
Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red

*/


let list;

for (let i = 0; i <= 100; i++){
    list = document.createElement('li')
    list.textContent = i
    document.getElementById('number-generator').appendChild(list)
    list.style.listStyle = 'none'
    list.style.width = '100px'
    list.style.display = 'flex'
    list.style.justifyContent = 'center'
    list.style.alignSelf= 'center'
    list.style.fontSize = '24px';
    list.style.padding = '30px 0 30px'
  
    



  let notPrime = false;

  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j !== i){
      notPrime = true
    } 
  }
  

  if (notPrime === true){
    if(i % 2 === 0 ) {
      list.style.background = 'green'
    }else if (i % 2 !== 0) {
      list.style.background ='yellow'
    }
  }

  if(notPrime === false){
    list.style.background ='red'

    if(i === 0) {
      list.style.background ='green'
    }

    if (i === 1) {
      list.style.background = 'yellow'
    }
    }
}
  


let divDesign = document.getElementById('number-generator')

divDesign.style.display = 'flex'
divDesign.style.flexDirection = 'row'
divDesign.style.flexWrap = 'wrap'
divDesign.style.alignItems = 'center'
//divDesign.style.marginLeft = '20%'
//divDesign.style.marginRight = '15%'
divDesign.style.gap = '5px'


let h2 = document.querySelector('h2')
h2.style.display = 'flex'
h2.style.justifyContent = 'center'
h2.style.marginBottom = '4rem'
h2.style.fontFamily = 'Georgia'










//Exercise: Level 2


//Use the countries array to display all the countries.See the design



let h3 = document.querySelector('h3')
h3.style.marginTop = '10rem'
h3.style.fontFamily = 'Georgia'
h3.style.display = 'flex'
h3.style.justifyContent = 'center'





let countryName;
for (const country of countries) {
  countryName = document.createElement('li')
  countryName.innerHTML = country.name
  document.querySelector('.list-of-countries').appendChild(countryName)
  countryName.style.listStyle = 'none'
  countryName.style.width = '100px'
  countryName.style.height = '80px'
  countryName.style.display = 'flex'
  countryName.style.justifyContent = 'center'
  //countryName.style.alignSelf= 'center'
  countryName.style.alignContent = 'center'
  countryName.style.fontSize = '12px';
  countryName.style.padding = '30px 10px 10px 10px'
  countryName.style.textTransform = 'uppercase'
  countryName.style.fontFamily = 'Georgia'
  countryName.style.border = 'solid'
  countryName.style.borderWidth = 'thin'
  countryName.style.borderColor = '#d7ded9'
  countryName.style.textAlign = 'center'
}

let numberOfCountries = document.querySelector(".total-number-of-countries")
numberOfCountries.textContent = countries.length

let listOfCountries = document.querySelector('.list-of-countries')

listOfCountries.style.display = 'flex'
listOfCountries.style.flexDirection = 'row'
listOfCountries.style.flexWrap = 'wrap'
listOfCountries.style.alignContent = 'center'
listOfCountries.style.gap = '3px'






//Exercise Level 3

/*
Check the requirement of this project from both images(jpg and gif). 
All the data and CSS has been implemented using JavaScript only. 
The data is found on starter folder project_3. 
The drop down button has been created using details HTML element.

*/


const asabenehChallenges2020 = {
  description: 'Asabeneh Yetayeh challenges',
  challengeTitle: 'Asabeneh Yetayeh challenges',
  challengeSubtitle: '30DaysOfJavaScript Challenge',
  challengeYear: 2020,
  keywords: [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
  ],
  author: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    titles: [
      ['🌱', 'Educator'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
      ['🔥', 'Motivator'],
      ['📔', 'Content Creator']
    ],
    qualifications: [
      'MSc. Computer Science Ongoing',
      'BSc. Information and Communication Eng.',
      'MSc. Food Technology',
      'BSc.Food Technology'
    ],
    socialLinks: [
      {
        social: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asabeneh/',
        fontawesomeIcon: '<i class="fab fa-linkedin">'
      },
      {
        social: 'Twitter',
        url: 'https://twitter.com/Asabeneh',
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
      },
      {
        social: 'Github',
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: 'https://github.com/Asabeneh'
      },
      {
        social: 'DEV.to',
        fontawesomeIcon: '',
        url: 'https://dev.to/asabeneh'
      }
    ],
    skills: [
      'Web Development',
      'Data Analysis',
      'Data Visualization',
      'Programming',
      'Databases',
      'Developing API'
    ],
    bio:
      'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
  },
  challenges: [
    {
      name: '30 Days Of Python',
      topics: [
        'Python',
        'Flask',
        'Numpy',
        'Pandas',
        'Statistics',
        'API',
        'MongoDB'
      ],
      days: 30,
      status: 'Done',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
    },
    {
      name: '30 Days Of JavaScript',
      topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
      days: 30,
      status: 'Ongoing',
      questions: 'Above 500',
      projects: 'About 30',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
    },
    {
      name: '30 Days Of HTML & CSS',
      topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
      days: 30,
      status: 'Coming',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of React',
      topics: [
        'React',
        'React Router',
        'Redux',
        'Context API',
        'React Hooks',
        'MERN'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of ReactNative',
      topics: ['ReactNative', 'Redux'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Fullstack',
      topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Machine Learning',
      topics: [
        'Python',
        'Numpy',
        'Pandas',
        'Scikit-learn',
        'Scipy',
        'Linear Algebra',
        'Statistics',
        'Visualization'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    }
  ]
}

let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.justifyContent = 'center'

//DESCRIPTION
let h4 = document.createElement('h4')
wrapper.appendChild(h4)
h4.innerHTML = `${asabenehChallenges2020.description} in <span class = 'year'>${asabenehChallenges2020.challengeYear}</span>`
h4.style.fontSize = '25px';
h4.style.textAlign = 'center'
h4.style.marginTop = '5rem'


//YEAR
let year = document.querySelector('.year')
year.style.fontSize = '70px'
year.style.fontWeight = 'bold';

function randomColor() {
  let char = 'ABCDEF0123456789';
  let randomHexId = '#';
  for (var i = 0; i < 6; i++) {
    randomHexId += char.charAt(Math.floor(Math.random() * char.length))
  }
  return randomHexId
}


function changeYearColor() {
  year.style.color = randomColor()
}

setInterval(changeYearColor, 1000)


//SUBTITLE 

let subTitle = document.createElement('p')
wrapper.appendChild(subTitle)
subTitle.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`
subTitle.style.textAlign = 'center'
subTitle.style.textDecoration = 'underline'
subTitle.style.fontSize = '16px'


//DATE


let date = document.createElement('p')
date.id = 'clock';
wrapper.appendChild(date)



const timeNow = () => {

  const now = new Date()
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = now.getMonth()
  let monthNow = monthNames[month];

  let dateNow = now.getDate()
    if (dateNow.toString().length === 1 ){
      dateNow = `0${dateNow}`
    }

  let yearNow = now.getFullYear();

  let hour = now.getHours()

  if (hour === 0) {
    hour = 12
  } 
  
  if (hour.toString().length === 1) {
      hour = `0${hour}`;
    } 
  
  if(hour >= 13) {
      hour -= 12;
    }

  let minute = now.getMinutes()
    if ( minute.toString().length === 1){
      minute = `0${minute}`
    }

  let seconds = now.getSeconds()
    if (seconds.toString().length === 1 ) {
      seconds = `0${seconds}`
    }
  

  
  if (new Date().getHours() < 13) {
    return `${monthNow} ${dateNow}, ${yearNow} ${hour}:${minute}:${seconds} AM`
  } else {
    return `${monthNow} ${dateNow}, ${yearNow} ${hour}:${minute}:${seconds} PM`
  }


 
}



let updateClock = () => {
  date.innerHTML = timeNow()
  date.style.backgroundColor = randomColor()
  date.style.padding = '10px';
  date.style.display = 'flex';
  date.style.justifyContent = 'center';
}


setInterval(updateClock, 1000)




//Courses

//let ul = document.createElement('ul')
//wrapper.appendChild(ul)


let divForChallenges = document.createElement('div')
divForChallenges.setAttribute('class', 'listOfChallenges')
divForChallenges.style.display = 'grid'
divForChallenges.style.justifyContent = 'center'
wrapper.appendChild(divForChallenges)



for (const challenge of asabenehChallenges2020.challenges){

//FILTERING OUT THE NAME OF THE CHALLENGE
  let challengeName = challenge.name.split(' ')
  let indexOfChallengeName = 1
  let indexOfOFWord = challengeName.indexOf('Of')
  indexOfChallengeName += indexOfOFWord

  let finalName = challengeName.slice(indexOfChallengeName, challengeName.length).join(' ')


//one div for one language
  let divForOneChallenge = document.createElement('div')
  divForOneChallenge.setAttribute('class', `${finalName}`)

     //course name
     let courseName = document.createElement('p')
     courseName.innerHTML =  challenge.name
     courseName.style.marginLeft = '2rem'
     divForOneChallenge.appendChild(courseName)

     //details about the course using <details>
       let moreDetails = document.createElement('details')
       moreDetails.style.marginTop = '1rem'
       //<summary>
       let summary = document.createElement('summary')
       summary.innerHTML = `${finalName}`
       moreDetails.appendChild(summary)
       divForOneChallenge.appendChild(moreDetails)

       // <dropDown of summary
       let topicLanguages = document.createElement('ul')
       
       for (let i = 0; i < challenge.topics.length ; i++){
           //list of topicNames
           let topicName = document.createElement('li')
           topicName.innerHTML = challenge.topics[i]
           topicName.style.listStyle = 'none'
           topicLanguages.appendChild(topicName)
           moreDetails.appendChild(topicLanguages)
          }

  
     //status
     let statusOftheCourse = document.createElement('p')

     if(challenge.status === 'Done'){
       statusOftheCourse.innerHTML = 'Done'
       statusOftheCourse.style.marginRight = '2rem'
       divForOneChallenge.appendChild(statusOftheCourse)
       divForChallenges.appendChild(divForOneChallenge)
       divForOneChallenge.style.backgroundColor = 'green'

     }else if (challenge.status === 'Ongoing'){
      statusOftheCourse.innerHTML = 'Ongoing'
      statusOftheCourse.style.marginRight = '2rem'
      divForOneChallenge.appendChild(statusOftheCourse)
      divForChallenges.appendChild(divForOneChallenge)
      divForOneChallenge.style.backgroundColor = 'yellow'

     }else if (challenge.status === 'Coming'){
      statusOftheCourse.innerHTML = 'Coming'
      statusOftheCourse.style.marginRight = '2rem'
      divForOneChallenge.appendChild(statusOftheCourse)
      divForChallenges.appendChild(divForOneChallenge)
      divForOneChallenge.style.backgroundColor = 'red'

     }
     

     divForOneChallenge.style.display = 'flex'
     divForOneChallenge.style.justifyContent = 'space-between'
     divForOneChallenge.style.alignContent = 'center'
     

}
 





//AUTHOR NAME AND DETAILS AT THE BOTTOM


let authorDetails = document.createElement('div')
wrapper.insertAdjacentElement('afterend', authorDetails)
authorDetails.setAttribute('class', 'authorInfo')

  let authorFullName = document.createElement('p')
  authorFullName.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName} `
  authorDetails.appendChild(authorFullName)
  authorFullName.style.fontSize = '20px'

  let socialMediaLinks = document.createElement('div')
  socialMediaLinks.setAttribute('class', 'socialMedia')
  authorDetails.appendChild(socialMediaLinks)



