# =======================================================
# CALCULADORA DE ENTEROS - VERSIÓN CON MÚLTIPLES SUMANDOS
# =======================================================

def calcular_enteros_repetitivo_multiple():
    """Función principal que maneja la lógica de la calculadora repetidamente,
    permitiendo la suma de múltiples enteros."""
    
    print("\n=== Calculadora de Enteros (Suma Múltiple y Resta de Dos) ===")
    print("💡 Para la SUMA, ingrese los números separados por comas (ej: 5, -10, 2).")
    print("💡 Ingrese 'salir' para terminar.")
    
    # ---------------------------------------------------
    # BUCLE PRINCIPAL: Permite repetir la operación
    # ---------------------------------------------------
    while True: 
        print("\n-------------------------------------------")
        
        # 1. SELECCIÓN DE OPERACIÓN
        operacion = input("Seleccione la operación: Suma (+) o Resta (-): ")

        # --- Opción de Salida ---
        if operacion.lower() in ('salir', 'exit', 'q'):
            print("¡Gracias por usar la calculadora! 👋")
            break  # Sale del bucle y termina el programa

        # 2. LÓGICA DE CÁLCULO
        resultado = None
        
    # Lógica para SUMA de múltiples números
        if operacion == '+':
            entrada_str = input("Ingrese los números a sumar (separados por comas, ej: 10, -5, 2): ")
            
            # --- Opción de Salida para la entrada de números ---
            if entrada_str.lower() in ('salir', 'exit', 'q'):
                print("¡Gracias por usar la calculadora! 👋")
                break
                
            try:
                # 1. Separar la cadena por comas y eliminar espacios en blanco
                numeros_str = [n.strip() for n in entrada_str.split(',')]
                
                # 2. Convertir a enteros y sumar
                sumandos = [int(n) for n in numeros_str]
                resultado = sum(sumandos)
                
                # Formato de salida para la suma
                signo = "+"
                # Une los números con " + " para la visualización del resultado
                operacion_texto = " + ".join([f"({n})" for n in sumandos])
                
            except ValueError:
                print("\n[ERROR]: Entrada de números no válida. Asegúrese de ingresar SOLO enteros separados por comas.")
                continue # Vuelve al inicio del bucle
        
        # Lógica para RESTA (Mantenemos la resta original de solo dos números por simplicidad)
        elif operacion == '-':
            try:
                num1 = int(input("Ingrese el primer número entero (minuendo): "))
                num2 = int(input("Ingrese el segundo número entero (sustraendo): "))
                resultado = num1 - num2
                signo = "-"
                operacion_texto = f"({num1}) {signo} ({num2})"

            except ValueError:
                print("\n[ERROR]: Entrada de número no válida. Intente de nuevo, ingrese SOLO números enteros.")
                continue # Vuelve al inicio del bucle

        else:
            # Maneja el error si la operación no es válida
            print("[ERROR]: Operación no válida. Solo se aceptan '+' o '-'.")
            continue # Vuelve al inicio del bucle

        # 3. SALIDA
        if resultado is not None:
            print(f"\n--- Resultado ---")
            print(f"La operación: {operacion_texto}")
            print(f"El resultado es: {resultado}")
            print("-----------------\n")

# Llama a la función para iniciar la calculadora
calcular_enteros_repetitivo_multiple()
