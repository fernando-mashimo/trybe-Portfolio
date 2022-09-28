// Desafio 11

// função auxiliar que verifica se algarismo é > 9 ou < 0
function numberInvalid (checkValid) {
  let isInvalid = false;
  for (let index = 0; index < checkValid.length; index += 1) {
    if (checkValid[index] > 9 || checkValid[index] < 0) {
      isInvalid = true;
    }
  }
  return isInvalid;
}

// função auxiliar que verifica se o algarismo se repete > 3x
function tooRepeating(checkNumberRepeat) {
  const checkRepetition = checkNumberRepeat.slice().sort(function (a, b) { // ordeno os números da array de forma crescente e armazeno em outra variável para poder verificar repetições de forma mais fácil - preciso armazenar em uma const, pois o método sort() é 'in place', ou seja, ela sobrescreve a variável original (no caso, a variável de entrada numbersArray e checkNumberRepeat) - mas quero manter a variável original intacta.
    return a - b;
  });

  let repeatCounter = 1;

  for (let index = 1; index < checkRepetition.length; index += 1) {
    if (checkRepetition[index] === checkRepetition[index - 1]) {
      repeatCounter += 1;
    } else repeatCounter = 1;
    if (repeatCounter >= 3) {
      return true;
    }
  }
  return false;
}
// função principal
function generatePhoneNumber(numbersArray) {
  let areaCode = '';
  let firstPart = '';
  let secondPart = '';
  let phoneNumber = '';

  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (numberInvalid(numbersArray) || tooRepeating(numbersArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  areaCode = numbersArray.slice(0, 2).join('');
  firstPart = numbersArray.slice(2, 7).join('');
  secondPart = numbersArray.slice(7, 12).join('');
  phoneNumber = '(' + areaCode + ') ' + firstPart + '-' + secondPart;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB));
}

// Desafio 13
function hydrate(string) {
  let regularExpression = /\d+/g; // utilizando reg exp para achar números dentro da string - definição da exp: (d: números, +: retornar números com > 1 dígito, g: retornar todos e não só o 1º)
  let numbers = string.match(regularExpression); // procuro a expressão dentro de uma string. Armazeno o que for encontrado em uma variável 'numbers' que será uma array de strings

  let sum = 0;
  for (let number of numbers) {
    sum += parseInt(number); // calculo a quantidade total de copos
  }

  let resultString = '';
  if (sum === 1) {
    resultString = sum + ' copo de água'; }
  else resultString = sum + ' copos de água';

  return resultString;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
