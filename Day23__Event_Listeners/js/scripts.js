




//generate numbers




let header = document.querySelector('.top-part')
header.style.display = 'grid'
header.style.justifyContent = 'center'
header.style.marginBottom = '4rem'


let numberGeneratorInput = document.querySelector('.number-generator-input')
numberGeneratorInput.style.display = 'flex'
numberGeneratorInput.style.justifyContent = 'center'
numberGeneratorInput.style.marginTop = '-1rem'
numberGeneratorInput.style.gap = '3px'



const generateNumbers = () => {

    let numberValue = document.getElementById("input-number").value;
    let pattern = /^\d+$/
    let result = pattern.test(numberValue)
    let wrongInputFeeback = document.querySelector('.validation-feedback')
    wrongInputFeeback.style.marginTop = '2rem'
    wrongInputFeeback.style.color = '#db1c07'
    wrongInputFeeback.style.textAlign = 'center'
    let text;
    
    if (result === true) {  

        let num = parseInt(numberValue)
        let generatedNumbers = document.getElementById('generated-numbers')
        generatedNumbers.innerHTML = ''
        generatedNumbers.style.display = 'flex'
        generatedNumbers.style.flexDirection = 'row'
        generatedNumbers.style.flexWrap = 'wrap'
        generatedNumbers.style.alignItems ='center'
        generatedNumbers.style.gap = '5px'
        generatedNumbers.style.marginTop = '2rem';

            for (let i = 0; i <= num; i++){
                let listOfNumbers = document.createElement('li')
                listOfNumbers.textContent = i
                generatedNumbers.appendChild(listOfNumbers)
                listOfNumbers.style.listStyle = 'none'
                listOfNumbers.style.color = 'white'
                listOfNumbers.style.fontWeight = '700'
                listOfNumbers.style.fontSize = '30px'
                listOfNumbers.style.width  = '50px'
                listOfNumbers.style.textAlign = 'center'
            let notPrime = false;
            
            for (let j = 2; j <= i; j++) {
                
                if (i % j === 0 && j !== i) {
                notPrime = true
                } 
            }
            
            if (notPrime === true){
                
                if (i % 2 === 0 ) {
                    listOfNumbers.style.background = '#81db8d'
                } else if (i % 2 !== 0) {
                    listOfNumbers.style.background ='#fffe82'
                }
            }
            
            if (notPrime === false) {
                
                listOfNumbers.style.background ='#f26455'
                
                if (i === 0) {
                    listOfNumbers.style.background ='#81db8d'
                }
                
                if (i === 1) {
                    listOfNumbers.style.background = '#fffe82'
                }
            }
        }

       text = ''
       wrongInputFeeback.innerHTML = text
    
    } else if (result === false) {
     

        if (numberValue === ''){
            text = 'Enter number value on the input field to generate numbers'
        } else if (isNaN(numberValue) === true){
           text = 'Enter value must be a number'
        }

        return wrongInputFeeback.innerHTML = text
    }


}


