// 1. Función para verificar si un número es par o impar

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}

// 2. Función para determinar qué número es mayor o si son iguales

function mayorOIgual(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log(`${num1} y ${num2} son
        iguales`);
  }
} //

// 3. Función para verificar si un número es múltiplo de 5
function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(`${numero} es múltiplo de 5`);
  } else {
    console.log(`${numero} no es múltiplo de 5`);
  }
}

// 4. Función que imprime los números desde 0 hasta el número dado
function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

// 5. Función que imprime una palabra la cantidad de veces indicada
function imprimirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

// 6. Función que imprime todos los valores de un array
function imprimirArray(arr) {
  arr.forEach((valor) => console.log(valor));
}

// 7. Función que imprime todos los valores de un array excepto el que esté en la 5ta posición
function imprimirExceptoQuintaPosicion(arr) {
  arr.forEach((valor, indice) => {
    if (indice !== 4) {
      // La 5ta posición es el índice 4
      console.log(valor);
    }
  });
}

// 8. Función que imprime los números de un array multiplicados por un número dado
function multiplicarArray(arr, numero) {
  arr.forEach((valor) => {
    console.log(valor * numero);
  });
}
