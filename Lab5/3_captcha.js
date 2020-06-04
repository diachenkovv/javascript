let c = Math.floor(10 + Math.random() * (99 + 1 - 10));

input.innerHTML = `${c}`;

function Answer() {
  if (+result.value == c) {
    answer.innerHTML = "✔ Добре!";
  } else {
    answer.innerHTML = "✖ Невірно!";
  }
}
