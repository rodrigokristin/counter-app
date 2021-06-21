// set counter
let counter = 0;

// increases value
function increase() {
  counter++;
  document.getElementById('value').innerText = counter;
}

// decreases value
function decrease() {
  counter--;
  document.getElementById('value').innerText = counter;
}

// reset value to zero
function reset() {
  counter = 0;
  document.getElementById('value').innerText = counter;
}
