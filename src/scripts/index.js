// Variável para armazenar o histórico de cálculos
var calculationHistory = [];

// Função para adicionar texto ao visor da calculadora
function appendToDisplay(value) {
  // Obtém o elemento do visor
  var display = document.getElementById("calculator__display");

  // Adiciona o valor ao visor
  display.value += value;
}

// Função para calcular o resultado
function calculate() {
  try {
    const input = document.getElementById("calculator__display").value;
    const result = eval(input); // Avalia a expressão
    document.getElementById("calculator__display").value = result;

    // Adiciona o cálculo ao histórico
    calculationHistory.push(input + " = " + result);
  } catch (error) {
    document.getElementById("calculator__display").value = "Erro";
  }
}

// Função que reseta o visor
function clearDisplay() {
  document.getElementById("calculator__display").value = "";
}

// Função para exibir o histórico de cálculos
function displayHistory() {
  var exibeHistory = document.querySelector(".display__history");
  exibeHistory.style.display = "block";
  var historyDiv = document.getElementById("calculation__history");
  historyDiv.innerHTML = `<p>${calculationHistory}</p><br>`;
}

// Função para ocultar o histórico de cálculos
function hideCalculationHistory() {
  var exibeHistory = document.querySelector(".display__history");
  exibeHistory.style.display = "none";
}

// Variável para rastrear o sinal atual
var positiveSign = true;

// Função para alternar entre adição e subtração
function toggleSign() {
  var display = document.getElementById("calculator__display");
  if (positiveSign) {
    // Se o sinal for positivo, insira um sinal de subtração
    display.value = "-" + display.value;
  } else {
    // Se o sinal for negativo, remova o sinal de subtração
    display.value = display.value.substring(1);
  }
  // Inverta o sinal
  positiveSign = !positiveSign;
}

// Função para apagar o último dígito
function clearLastDigit() {
  var display = document.getElementById("calculator__display");
  var currentValue = display.value;

  if (currentValue.length > 0) {
    // Remove o último dígito da string
    display.value = currentValue.slice(0, -1);
  }
}
