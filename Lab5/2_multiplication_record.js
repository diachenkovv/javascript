next.disabled = true;
result.value = "";

function Oper() {
  //генерація прикладу
  let a = Math.floor(0 + Math.random() * (10 + 1 - 0));
  let b = Math.floor(0 + Math.random() * (10 + 1 - 0));
  let res = a * b;
  window.res = res;

  input.innerHTML = `${a} × ${b} = `;

  return res;
}

input = Oper();

function Answer() {
  //виведення результату перевірки
  if (+result.value == input) {
    answer.innerHTML = "Правильно!";
  } else {
    answer.innerHTML = `Невірно! Правильна відповідь ${window.res}`;
  }
  result.disabled = true;
  next.disabled = false;
}
