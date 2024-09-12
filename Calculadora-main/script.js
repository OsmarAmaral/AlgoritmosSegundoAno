function inputDisplay(value) {
  document.getElementById('tela').value += value
}

function limpar(value) {
  document.getElementById('tela').value = ('')
}

function calculate(value) {
  let expression = document.getElementById('tela').value;
try {
  document.getElementById('tela').value = eval(expression);
  }
}

