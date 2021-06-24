/* Value Display */
// create main div in container div
let divMain = document.createElement('div');
divMain.setAttribute('id', 'main');
document.getElementById('container').appendChild(divMain);

// create minus button in main div
let btnMinus = document.createElement('button');
btnMinus.setAttribute('id', 'minus');
btnMinus.innerText = '-';
divMain.appendChild(btnMinus);

// create value div in main div
let divValue = document.createElement('div');
divValue.setAttribute('id', 'value');
divValue.innerText = '0';
divMain.appendChild(divValue);

// create plus button in main div
let btnPlus = document.createElement('button');
btnPlus.setAttribute('id', 'plus');
btnPlus.innerText = '+';
divMain.appendChild(btnPlus);

// create reset button in container div
let btnReset = document.createElement('button');
btnReset.setAttribute('id', 'reset');
btnReset.innerText = 'Reset';
document.getElementById('container').appendChild(btnReset);

/* Value Change */
// create counter
let counter = 0;

// addEventListener to btnMinus
btnMinus.addEventListener('click', () => {
  counter--;
  divValue.innerText = counter;
});

//addEventListener to btnPlus
btnPlus.addEventListener('click', () => {
 counter++;
 divValue.innerText = counter;
});

//addEventListener to btnReset
btnReset.addEventListener('click', () => {
  counter = 0;
  divValue.innerText = counter;
});
