let currentNumber = '0'; 
let totalAccumulated = 0; 
let waitingForNewNumber = true; 
let operatorPressed = false; 

const display = document.getElementById('display');

/**
 * Agrega un dígito al número actual en pantalla.
 */
function appendNumber(number) {
    if (waitingForNewNumber || currentNumber === '0') {
        currentNumber = number;
        waitingForNewNumber = false;
        operatorPressed = false; 
    }
    else if (currentNumber.length < 15) { 
        currentNumber += number;
    }
    
    updateDisplay();
}

/**
 * Cambia el signo del número actualmente en pantalla.
 */
function changeSign() {
    const num = parseFloat(currentNumber);
    
    if (num !== 0) {
        currentNumber = (num * -1).toString();
    }
    
    waitingForNewNumber = false; 
    
    updateDisplay();
}


/**
 * Maneja el operador SUMA (+). Acumula la suma.
 */
function setOperator(operator) {
    if (operator !== '+') return; 

    if (!waitingForNewNumber && !operatorPressed) {
        const inputValue = parseInt(currentNumber);
        totalAccumulated += inputValue;
        operatorPressed = true; 
    }
    
    currentNumber = totalAccumulated.toString(); 
    waitingForNewNumber = true; 
    
    updateDisplay();
}

/**
 * Calcula el resultado final al presionar el botón '='.
 */
function calculateResult() {
    if (!waitingForNewNumber && !operatorPressed) {
        const inputValue = parseInt(currentNumber);
        totalAccumulated += inputValue;
    }
    
    currentNumber = totalAccumulated.toString();
    
    totalAccumulated = 0;
    waitingForNewNumber = true; 
    operatorPressed = false;
    
    updateDisplay();
}

/**
 * Resetea completamente la calculadora (Botón C).
 */
function clearDisplay() {
    currentNumber = '0';
    totalAccumulated = 0;
    waitingForNewNumber = true;
    operatorPressed = false;
    updateDisplay();
}

/**
 * Actualiza el texto en la pantalla.
 */
function updateDisplay() {
    display.textContent = parseInt(currentNumber);
}

// Inicializa la pantalla
clearDisplay();
