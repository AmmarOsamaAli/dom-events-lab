/*------------------------ Cached Element References ------------------------*/

const numberBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const displayBar = document.querySelector('.display')
console.log(numberBtn)
console.log(operatorBtn)
console.log(equalsBtn)
console.log(displayBar)

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let num1 = null
let num2 = null
let result = null
let operator = null

/*-------------------------------- Functions --------------------------------*/

function handleNumber() {
    console.log('Number Clicked = ' + event.target.textContent)
    if (!num1 && !num2 && !operator) {
        num1 = event.target.textContent
        displayBar.textContent = num1
    }
    else if (num1 && !num2 && !operator) {
        num1 += event.target.textContent
        displayBar.textContent = num1
    }
    else if (num1 && !num2 && operator) {
        num2 = event.target.textContent
        displayBar.textContent += num2
    }
    else if (num1 && num2 && operator) {
        num2 += event.target.textContent
        displayBar.textContent += event.target.textContent
    }

    // console.log('Number 1 = ' + num1)
    // console.log('Number 2 = ' + num2)
    // console.log('Operator = ' + operator)

}

function handleOperator() {
    console.log('Operator Clicked = ' + event.target.textContent)
    if (num1 && !num2 && !operator) {
        operator = event.target.textContent
        displayBar.textContent += operator
    }
    else if (num1 && !num2 && operator) {
        operator = event.target.textContent
        displayBar.textContent = operator
    }
    else if (num1 && num2 && operator) {
        operator = event.target.textContent
        displayBar.textContent = num1 + operator + num2
    }
    
    if(event.target.textContent === 'C'){
        num1 = null
        num2 = null
        operator = null
        result = null
        displayBar.textContent = null
    }

    // console.log('Number 1 = ' + num1)
    // console.log('Number 2 = ' + num2)
    // console.log('Operator = ' + operator)

}

function handleEquals() {
    if (operator === '+') {
        result = Number(num1) + Number(num2)
        displayBar.textContent = result
    }
    else if(operator === '-'){
        result = Number(num1) - Number(num2)
        displayBar.textContent = result
    }
    else if(operator === '*'){
        result = Number(num1) * Number(num2)
        displayBar.textContent = result
    }
    else if(operator === '/'){
        result = Number(num1) / Number(num2)
        displayBar.textContent = result
    }
    console.log(result)
}


/*----------------------------- Event Listeners -----------------------------*/

equalsBtn.addEventListener('click', handleEquals)

for (let oneNumber of numberBtn) {
    oneNumber.addEventListener('click', handleNumber)
}

for (let oneOperator of operatorBtn) {
    oneOperator.addEventListener('click', handleOperator)
}
