const compareTrue = (A, B) => A && B;
const splitSentence = (string) => string.split(' ');
const concatName = (array) => `${array.slice(-1)}, ${array[0]}`;
const footballPoints = (wins, ties) => (wins * 3) + ties;
const highestCount = (array) => array.filter((x) => x === Math.max.apply(null, array)).length;
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${(base * height) / 2}`;
  }

  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${base * height}`;
  }

  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }

  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }

  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
};

const fizzBuzz = (array) => {
  const list = array.map((x) => {
    if (x % 3 === 0 && x % 5 === 0) {
      return 'fizzBuzz';
    }

    if (x % 3 === 0) {
      return 'fizz';
    }

    if (x % 5 === 0) {
      return 'buzz';
    }

    return 'bug!';
  });

  return list;
};

const encode = (string) => {
  const wordArray = string.split('');
  const conversion = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };

  for (let index = 0; index < wordArray.length; index += 1) {
    if (conversion[wordArray[index]]) {
      wordArray[index] = conversion[wordArray[index]];
    }
  }

  return wordArray.join('');
};

const decode = (string) => {
  const wordArray = string.split('');
  const conversion = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };

  for (let index = 0; index < wordArray.length; index += 1) {
    if (conversion[wordArray[index]]) {
      wordArray[index] = conversion[wordArray[index]];
    }
  }

  return wordArray.join('');
};

const techList = (array, string) => {
  array.sort();

  const list = [];

  for (let index = 0; index < array.length; index += 1) {
    list.push({
      tech: array[index],
      name: string
    });
  }

  return list;
};

const getRepetitions = (array) => {
  const counter = {};
  let status = false;

  array.forEach((element) => {
    counter[element] = (counter[element] || 0) + 1;

    if (counter[element] >= 3) {
      status = true;
    }
  });

  return status;
};

const generatePhoneNumber = (array) => {
  const invalidNumbers = array.filter((x) => (x > 9) || (x < 0));
  const invalidRepetitions = getRepetitions(array);

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (invalidNumbers.length > 0 || invalidRepetitions) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = array.slice(0, 2).join('');
  const firstNumbers = array.slice(2, 7).join('');
  const lastNumbers = array.slice(7, 11).join('');

  return `(${ddd}) ${firstNumbers}-${lastNumbers}`;
};

const triangleCheck = (lineA, lineB, lineC) => {
  const resultA = (lineA < (lineB + lineC));
  const resultB = (lineB < (lineA + lineC));
  const resultC = (lineC < (lineA + lineB));

  return (resultA && resultB && resultC);
};

const hydrate = (string) => {
  const numbersA = string.match(/\d+/g);
  const numbersB = numbersA.join('');
  const numbersC = numbersB.split('');
  let sum = 0;

  for (let index = 0; index < numbersC.length; index += 1) {
    sum += Number(numbersC[index]);
  }

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
};

compareTrue(false, true);
splitSentence('SplittingSentence');
concatName(['Gabriel', 'Soares']);
footballPoints(30, 15);
highestCount([1, 5, 5, 10, 10, 10]);
calcTriangleArea(10, 5);
calcRectangleArea(10, 5);
calcAllAreas(10, 5, 'triângulo');
calcAllAreas(10, 5, 'retângulo');
catAndMouse(1, 5, 6);
fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
encode('Hello World!');
decode('Hello World!');
techList(['React', 'JavaScript', 'TypeScript'], 'Technology');
generatePhoneNumber([6, 2, 9, 9, 3, 3, 2, 7, 2, 0, 1]);
triangleCheck(5, 10, 15);
hydrate('Numbers 1, 2, 3, 4, 5');
