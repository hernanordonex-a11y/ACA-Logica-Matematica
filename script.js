function calcular() {
    // 1. OBTENER VALORES DEL HTML
    // Usamos .value para obtener lo que el usuario escribió
    const num1_str = document.getElementById('num1').value;
    const num2_str = document.getElementById('num2').value;
    const operacion = document.getElementById('operacion').value;
    
    const resultadoDiv = document.getElementById('resultado');
    const errorDiv = document.getElementById('mensaje-error');

    // Limpiar mensajes de error previos
    errorDiv.textContent = '';
    resultadoDiv.textContent = 0; 

    // 2. VALIDACIÓN RIGUROSA (RF5: Solo Enteros)
    // Convertimos a número para validar. 
    // Si el campo está vacío, la conversión será NaN o un número flotante.
    const num1 = Number(num1_str);
    const num2 = Number(num2_str);

    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1_str === '' || num2_str === '') {
        errorDiv.textContent = 'ERROR: Ingrese dos números enteros válidos. No se permiten decimales o texto.';
        return; // Detiene la función
    }

    // 3. CÁLCULO (RF3)
    let resultado;
    
    if (operacion === '+') {
        resultado = num1 + num2;
    } else if (operacion === '-') {
        resultado = num1 - num2;
    } else {
        // Esto es poco probable si usas el <select>, pero es buena práctica
        errorDiv.textContent = 'ERROR: Operación no reconocida.';
        return;
    }

    // 4. SALIDA (RF4)
    resultadoDiv.textContent = resultado;
}