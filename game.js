const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let secretNumber = "";

// Funcion para generar numero secreto

function generateSecretNumber() {
  while (secretNumber.length < 3) {
    const randomReference = Math.floor(Math.random() * numbers.length);
    const digit = numbers[randomReference];

    secretNumber += digit;
    numbers.splice(randomReference, 1);
  }
}
// fin de funcion para generar numero secreto

generateSecretNumber(); // activar funcion

let attempts = 1;

// Bucle para iniciar el juego

while (true) {
  let numbersEntry = prompt("Por favor ingresa un numero de 3 digitos.");

  if (numbersEntry.length !== 3) {
    alert("Por favor ingresa un numero valido de 3 digitos.");
    continue;
  }
  // || !/^\d+$/.test(numbersEntry)
  let pikes = 0;
  let fixed = 0;

  for (let i = 0; i < numbersEntry.length; i++) {
    const digit = parseInt(numbersEntry[i]);

    if (digit === parseInt(secretNumber[i])) {
      fixed++;
    } else if (secretNumber.includes(digit.toString())) {
      pikes++;
    }
  }

  if (numbersEntry === secretNumber) {
    alert(
      `¡Felicidades! has adivinado el numero secreto en ${
        attempts - 1
      } intentos.`
    );
    break;
  }

  alert(
    `Intento ${attempts} : Numero: ${numbersEntry} - Picas: ${pikes}, Fijas: ${fixed}`
  );
  attempts++;

  if (attempts > 10) {
    alert("Has alcanzado el numero maximo de intentos permitidos");
    break;
  }
}
// fin bucle
console.log(secretNumber);
