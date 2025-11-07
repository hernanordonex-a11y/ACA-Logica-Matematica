// --- Variables de Estado de la Calculadora ---
let currentNumber = '0'; 
// totalAccumulated almacena el resultado parcial de las operaciones.
let totalAccumulated = 0; 
let waitingForNewNumber = true; 
// pendingOperator almacena el operador pendiente ('+', '*') para la siguiente operación.
let pendingOperator = null; 

const display = document.getElementById('display');

// --- Lógica del Motor de la Calculadora ---

/**
 * Muestra el número actual en pantalla, manejando números grandes y decimales.
 */
function updateDisplay() {
    const num = parseFloat(currentNumber);
    // Limita la precisión y evita errores de NaN
    if (isNaN(num)) {
        display.textContent = 'Error';
    } else {
        // toLocaleString asegura que se muestren los decimales correctamente
        display.textContent = num.toLocaleString('en-US', { maximumFractionDigits: 10, useGrouping: false });
    }
}

/**
 * Agrega un dígito o punto decimal al número actual.
 */
function appendNumber(number) {
    if (number === '.') {
        if (currentNumber.includes('.')) return;
    }

    if (waitingForNewNumber || currentNumber === '0') {
        currentNumber = number === '.' ? '0.' : number;
        waitingForNewNumber = false;
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
 * Ejecuta la operación pendiente almacenada en 'pendingOperator'.
 * @param {number} nextValue El valor a operar con totalAccumulated.
 */
function performPendingOperation(nextValue) {
    // Si es la primera vez que se presiona un operador, solo inicializa totalAccumulated
    if (pendingOperator === null) {
        totalAccumulated = nextValue;
        return;
    }
    
    // Ejecuta la operación que estaba pendiente
    if (pendingOperator === '+') {
        totalAccumulated += nextValue;
    } else if (pendingOperator === '*') {
        totalAccumulated *= nextValue;
    }
}

/**
 * Maneja los operadores (+, *).
 * @param {string} nextOperator El operador que acaba de ser presionado.
 */
function setOperator(nextOperator) {
    const inputValue = parseFloat(currentNumber);
    
    // 1. Ejecuta la operación anterior si hay una pendiente y se ha introducido un nuevo número
    if (!waitingForNewNumber) {
        performPendingOperation(inputValue);
    } else if (pendingOperator === null) {
        // Caso inicial: si solo se ha tipeado un número y se pulsa el operador.
        totalAccumulated = inputValue;
    }
    
    // 2. Almacena el nuevo operador
    pendingOperator = nextOperator;
    
    // 3. Prepara la pantalla para el siguiente número (muestra el resultado parcial)
    currentNumber = totalAccumulated.toString();
    waitingForNewNumber = true; 
    
    updateDisplay();
}

/**
 * Calcula el resultado final al presionar el botón '='.
 */
function calculateResult() {
    const inputValue = parseFloat(currentNumber);
    
    // Ejecuta la última operación pendiente
    if (pendingOperator !== null && !waitingForNewNumber) {
        performPendingOperation(inputValue);
    } else if (pendingOperator === null) {
        // Si no hay operador pendiente, el resultado es el número actual
        totalAccumulated = inputValue;
    }
    
    // Muestra el resultado final
    currentNumber = totalAccumulated.toString();
    
    // Restablece el estado para una nueva serie de cálculos
    totalAccumulated = 0;
    pendingOperator = null;
    waitingForNewNumber = true; 
    
    updateDisplay();
}

/**
 * Resetea completamente la calculadora (Botón C).
 */
function clearDisplay() {
    currentNumber = '0';
    totalAccumulated = 0;
    waitingForNewNumber = true;
    pendingOperator = null;
    updateDisplay();
}

// Inicializa la pantalla
clearDisplay();
