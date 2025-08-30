const result = document.getElementById("result");

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (result.value === "") return;
  const lastChar = result.value.slice(-1);
  if ("+-*/%".includes(lastChar)) return; 
  result.value += operator;
}

function appendDot() {
  const parts = result.value.split(/[\+\-\*\/%]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) {
    result.value += ".";
  }
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}
