// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 === true && boolean2 === true; // checa os valores das variáveis booleanas e retorna diretamente o resultado da comparação simultânea de ambas as variáveis.
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; // calcula a área do triângulo e retorna diretamente o resultado.
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // quebra a string após cada whitespace, armazena cada item dentro de um array e retorna diretamente.
}

// Desafio 4
function concatName(stringArray) {
  return (stringArray[stringArray.length - 1] + ', ' + stringArray[0]); // concatena o último e primeiro itens da array de entrada e retorna diretamente o resultado.
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties; // multiplica o número de vitórias (wins) por 3 pontos, soma com a quantidade de empates (ties), que valem 1 ponto, e retorna diretamente o resultado.
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumberCount = 0;
  let highestNumber = numbersArray[0];

  for (let index = 1; index < numbersArray.length; index += 1) {
    if (numbersArray[index] >= highestNumber) {
      highestNumber = numbersArray[index]; // encontro o maior número da array
    }
  }

  for (let numbers of numbersArray) {
    if (numbers === highestNumber) {
      highestNumberCount += 1; // verifico a quantidade de ocorrências do número
    }
  }
  return highestNumberCount; // retorno a quantidade de ocorrências
}
console.log(Math.max([1, 2, 3, 4, 5, 6, 10, 8, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) { 
    return 'os gatos trombam e o rato foge'; // verifico se a distância absoluta entre o rato e os gatos são iguais e retorno frase
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else return 'cat2'; // verifico qual dos gatos está mais próximo e retorno seu nome

}

// Desafio 8
function fizzBuzz(numbersArray2) {
  let fizzBuzzResult = []; // inicio uma variável array de saída
  
  for (numbers of numbersArray2) {
    if (numbers % 3 === 0 && numbers % 5 === 0) {
      fizzBuzzResult.push('fizzBuzz'); // faço push da string correspondente a cada condição na variável de saída
    } else if (numbers % 3 === 0) {
      fizzBuzzResult.push('fizz');
    } else if (numbers % 5 === 0) {
      fizzBuzzResult.push('buzz');
    } else fizzBuzzResult.push('bug!');
  }
  return fizzBuzzResult;
}


// Desafio 9
function code(input) { // Função auxiliar, que realiza a codificação-decodificação de caracteres
  switch (input) {
    case 'a':
      return '1';
      break;
    case 'e':
      return '2';
      break;
    case 'i':
      return '3';
      break;
    case 'o':
      return '4';
      break;
    case 'u':
      return '5';
      break;
    case '1':
      return 'a';
      break;
    case '2':
      return 'e';
      break;
    case '3':
      return 'i';
      break;
    case '4':
      return 'o';
      break;
    case '5':
      return 'u';
      break;
    default:
      return input;
  }
}

function encode(stringToEncode) {
  let stringToArray = stringToEncode.split(''); // converto a string em uma array onde para cada posição é atribuído um caractere da string original
  let resultArray1 = []; // inicio uma array de saída, que vai armazenar os caracteres convertidos

  for (let letter of stringToArray) {
    resultArray1.push(code(letter));
  }
  return resultArray1.join(''); // este for faz o encoding do caractere, atribui-o à array de saída e retorna este na forma de uma string (resposta final).
}

function decode(stringToEncode) { // como usei uma função auxiliar (code), a função decode é idêntica à encode
  let stringToArray = stringToEncode.split('');
  let resultArray1 = [];

  for (let letter of stringToArray) {
    resultArray1.push(code(letter));
  }
  return resultArray1.join('');
}


// Desafio 10
function techList(techArray, nameString) {
  techArray = techArray.sort();
  let studentStacks = [];

  for (let index = 0; index < techArray.length; index += 1) {
    studentStacks.push({
      tech: techArray[index],
      name: nameString,
    });
  }

  if (techArray.length === 0) {
    return ('Vazio!');
  }
  return studentStacks;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
