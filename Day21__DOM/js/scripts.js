






//Exercise: Level 1



/*1. Create an index.html file and put four p elements as above: 
Get the first paragraph by using document.querySelector(tagname) and tag name */

let firstParagraph = document.querySelector('p')
console.log(firstParagraph)

/* 2. Get get each of the the paragraph using document.querySelector('#id') 
and by their id*/


console.log(document.querySelector('#one'))
console.log(document.querySelector('#two'))
console.log(document.querySelector('#three'))
console.log(document.querySelector('#four'))
 

/* 3. Get all the p as nodeList using 
document.querySelectorAll(tagname) and by their tag name */

let paragraphs = document.querySelectorAll('p')
console.log(paragraphs)


/* 4. Loop through the nodeList and get the text content of each paragraph */

for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent)
}


/* 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph */
paragraphs[3].textContent = "Fourth Paragraph"


/* 6. Set id and class attribute for all the paragraphs using
 different attribute setting methods */

  //set attribute
    paragraphs[0].setAttribute('class', 'parStyle')

  //adding attribute without setAttribute
    paragraphs[1].className = 'parStyle'
    paragraphs[2].className = 'parStyle'
    paragraphs[3].className = 'parStyle'
  
  //class list
    paragraphs[1].classList.add('color')







//Exercise: Level 2

 //1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)


paragraphs.forEach((paragraph) => {
  paragraph.style.fontSize = '16px';
})

paragraphs.forEach((paragraph) => {
  paragraph.style.fontFamily = 'Arial';
})

paragraphs.forEach((paragraph) => {
  paragraph.style.border = 'thin solid blue'
})

paragraphs.forEach((paragraph) => {
  paragraph.style.padding = '5px'
})


paragraphs[0].style.color = 'green'
paragraphs[0].style.background = '#ccffcc'
paragraphs[1].style.color =  'blue'
paragraphs[1].style.background = '#9999ff'
paragraphs[2].style.color = 'orange'
paragraphs[2].style.background  = '#ffedcc'
paragraphs[3].style.color = 'red'
paragraphs[3].style.background  = '#ff9999'





/*2. Select all paragraphs and loop through each elements and
 give the first and third paragraph a color of green, and the second 
 and the fourth paragraph a red color */


for (let i = 0; i < paragraphs.length; i++){
  if (i % 2 === 0) {
    paragraphs[i].style.color = 'green'
  } else {
    paragraphs[i].style.color = 'red'
  }
}






//Exercise: Level 3

/* 1.

Develop the following application, use the following HTML elements
 to get started with. You will get the same code on starter folder. 
 Apply all the styles and functionality using JavaScript only.



*/





/*The year color is changing every 1 second*/

let headingOne = document.querySelector('h1')
headingOne.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020</span>'

let year = document.querySelector('#year')
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






//The date and time background color is changing every on seconds



let wrapper = document.querySelector('div')

let date = document.createElement('p')
date.id = 'clock';

wrapper.insertBefore(date, wrapper.children[2])
wrapper.style.display = 'grid';
wrapper.style.justifyContent = 'center';


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
    if (hour.toString().length === 1 && hour !== 0) {
      hour = `0${hour}`
    } else if (hour === 0) {
      hour = 12
    } else if(hour >= 13) {
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






//Completed challenge has background green
//Ongoing challenge has background yellow
//Coming challenges have background red


let list = document.querySelectorAll('li')


for (let i = 0; i < list.length ; i++) {
  if(list[i].innerHTML.includes('Done')) {
    list[i].style.backgroundColor = 'green'
  }else if (list[i].innerHTML.includes('Ongoing')){
    list[i].style.backgroundColor = 'yellow'
    list[i].style.color = 'black'
  } else if (list[i].innerHTML.includes('Coming')){
    list[i].style.backgroundColor = 'red'
  }

  list[i].setAttribute('class', 'dot')
  list[i].style.padding = '5px'
  list[i].style.marginBottom = '5px'
}


let ul = document.querySelector('ul')
ul.style.listStyle = 'none'