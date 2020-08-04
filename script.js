class Calculator {
    constructor(prevOperTextElement, curOperTextElement) {
        this.prevOperTextElement = prevOperTextElement
        this.curOperTextElement = curOperTextElement
        this.clearFunc()
    }

    clearFunc() {
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    deleteFunc() {

    }

    appendNumbFunc(number) {
        this.curOperTextElement = number
    }

    chooseOperFunc(operation) {

    }

    computeFunc() {

    }

    updateDisplayFunc() {
        this.curOperTextElement.innerText = this.curOperTextElement
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperTextElement = document.querySelector('[data-prev-operand]')
const curOperTextElement = document.querySelector('[data-cur-operand]')

const calculator = new calculator(prevOperTextElement, curOperTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumbFunc(button.innerText)
        calculator.updateDisplayFunc()
    })
})