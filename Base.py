# =======================================================
# CALCULADORA DE ENTEROS - VERSIÓN CON BUCLE REPETITIVO
# =======================================================

def calcular_enteros_repetitivo():
    """Función principal que maneja la lógica de la calculadora repetidamente."""
    
    print("\n=== Calculadora de Enteros (Suma y Resta) ===")
    
    # ---------------------------------------------------
    # BUCLE PRINCIPAL: Permite repetir la operación
    # ---------------------------------------------------
    while True: 
        print("\n-------------------------------------------")
        
        # 1. ENTRADA Y VALIDACIÓN DE NÚMEROS
        try:
            # --- Entrada de números ---
            num1_str = input("Ingrese el primer número entero: ")
            
            # --- Opción de Salida ---
            if num1_str.lower() in ('salir', 'exit', 'q'):
                print("¡Gracias por usar la calculadora! 👋")
                break  # Sale del bucle y termina el programa
                
            num1 = int(num1_str)
            num2 = int(input("Ingrese el segundo número entero: "))
            
        except ValueError:
            # Maneja el error si el usuario ingresa texto o un decimal
            print("\n[ERROR]: Entrada de número no válida. Intente de nuevo, ingrese SOLO números enteros.")
            continue # Vuelve al inicio del bucle
            
        # 2. SELECCIÓN DE OPERACIÓN
        operacion = input("Seleccione la operación: Suma (+) o Resta (-): ")
        
        # 3. CÁLCULO
        resultado = None
        
        if operacion == '+':
            resultado = num1 + num2
            signo = "+"
        elif operacion == '-':
            resultado = num1 - num2
            signo = "-"
        else:
            # Maneja el error si la operación no es válida
            print("[ERROR]: Operación no válida. Solo se aceptan '+' o '-'.")
            continue # Vuelve al inicio del bucle

        # 4. SALIDA
        print(f"\n--- Resultado ---")
        print(f"La operación: ({num1}) {signo} ({num2})")
        print(f"El resultado es: {resultado}")
        print("-----------------\n")

# Llama a la función para iniciar la calculadora
calcular_enteros_repetitivo()

