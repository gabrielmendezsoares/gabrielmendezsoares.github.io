function getRepeaters(color) {
  const colorElements = document.querySelectorAll('.color');
  if (color === 'black' || color === 'white') {
    return false;
  }
  for (let index = 0; index < colorElements.length; index += 1) {
    if (color === colorElements[index].style.backgroundColor) {
      return false;
    }
  }
  return true;
}

function generateNewColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;
  while (!getRepeaters(color)) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    color = `rgb(${red}, ${green}, ${blue})`;
  }
  return color;
}

const storeBoardColor = () => {
  const pixelElements = document.querySelectorAll('.pixel');
  const pixelArray = {};
  for (let index = 0; index < pixelElements.length; index += 1) {
    pixelArray[index] = pixelElements[index].style.backgroundColor;
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelArray));
};

const removeElements = (type) => {
  const elements = document.querySelectorAll(type);
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].remove();
  }
};

const setPixelBoardColor = () => {
  const storagePixelBoard = localStorage.getItem('pixelBoard');
  if (storagePixelBoard) {
    const storagePixelBoardJSON = JSON.parse(storagePixelBoard);
    const pixelElements = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelElements.length; index += 1) {
      pixelElements[index].style.backgroundColor = storagePixelBoardJSON[index];
    }
  }
};

const getStoragePaletteColor = () => {
  const storageColorPalette = localStorage.getItem('colorPalette');
  if (storageColorPalette) {
    const storageColorPaletteJSON = JSON.parse(storageColorPalette);
    return storageColorPaletteJSON;
  }
  return ['black', generateNewColor(), generateNewColor(), generateNewColor()];
};

const getButtonPaletteColor = () => {
  const color = ['black', generateNewColor(), generateNewColor(), generateNewColor()];
  localStorage.setItem('colorPalette', JSON.stringify(color));
  return color;
};

const getStorageBoardSize = () => {
  const storageBoardSize = localStorage.getItem('boardSize');
  if (storageBoardSize) {
    const storageBoardSizeJSON = JSON.parse(storageBoardSize);
    const integerNumber = parseInt(storageBoardSizeJSON, 10);
    return integerNumber;
  }
  return 5;
};

const getButtonBoardSize = () => {
  const boardSize = document.querySelector('#board-size');
  const integerNumber = parseInt(boardSize.value, 10);
  let size = integerNumber;
  if (!size) {
    alert('Board inválido!');
    boardSize.value = 5;
    size = 5;
  } else if (size < 5) {
    boardSize.value = 5;
    size = 5;
  } else if (size > 50) {
    boardSize.value = 50;
    size = 50;
  }
  localStorage.setItem('boardSize', JSON.stringify(size));
  storeBoardColor();
  return size;
};

const getPaletteColor = (state) => {
  let color = ['black', generateNewColor(), generateNewColor(), generateNewColor()];
  if (state === 'storage') {
    color = getStoragePaletteColor();
  } else if (state === 'button') {
    color = getButtonPaletteColor();
  }
  removeElements('.color');
  return color;
};

const getBoardSize = (state) => {
  let size = 5;
  if (state === 'storage') {
    size = getStorageBoardSize();
  } else if (state === 'button') {
    size = getButtonBoardSize();
  }
  removeElements('.line');
  return size;
};

const connectColorListener = (element) => {
  element.addEventListener('click', () => {
    const colorElements = document.querySelectorAll('.color');
    for (let index = 0; index < colorElements.length; index += 1) {
      colorElements[index].classList.remove('selected');
    }
    element.classList.add('selected');
  });
};

const connectPixelListener = (element) => {
  element.addEventListener('click', () => {
    const pixelElement = element;
    const selectedElement = document.querySelector('.selected');
    pixelElement.style.backgroundColor = selectedElement.style.backgroundColor;
    storeBoardColor();
  });
};

const createColorPalette = (parent, state) => {
  const color = getPaletteColor(state);
  for (let index = 0; index < 4; index += 1) {
    const liElement = document.createElement('li');
    liElement.className = (index === 0) ? 'color selected' : 'color';
    liElement.style.backgroundColor = (index === 0) ? 'black' : color[index];
    connectColorListener(liElement);
    parent.appendChild(liElement);
  }
};

const createPixelBoard = (parent, state) => {
  const size = getBoardSize(state);
  for (let indexA = 0; indexA < size; indexA += 1) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    for (let indexB = 0; indexB < size; indexB += 1) {
      const columnDiv = document.createElement('div');
      columnDiv.className = 'pixel';
      columnDiv.style.backgroundColor = 'white';
      connectPixelListener(columnDiv);
      lineDiv.appendChild(columnDiv);
    }
    parent.appendChild(lineDiv);
  }
};

const connectClearListener = (element) => {
  element.addEventListener('click', () => {
    const pixelElements = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelElements.length; index += 1) {
      pixelElements[index].style.backgroundColor = 'white';
    }
    storeBoardColor();
  });
};

window.onload = () => {
  const colorPalette = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  const buttonRandomColor = document.querySelector('#button-random-color');
  const generateBoard = document.querySelector('#generate-board');
  const clearBoard = document.querySelector('#clear-board');
  buttonRandomColor.addEventListener('click', () => {
    createColorPalette(colorPalette, 'button');
  });
  generateBoard.addEventListener('click', () => {
    createPixelBoard(pixelBoard, 'button');
  });
  connectClearListener(clearBoard);
  createColorPalette(colorPalette, 'storage');
  createPixelBoard(pixelBoard, 'storage');
  setPixelBoardColor();
};
