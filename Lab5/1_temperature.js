input.oninput = function () {
  result.value = Math.ceil((5 / 9) * (+input.value - 32));

  if (input.value == "") {
    result.value = "";
  }
};
result.oninput = function () {
  input.value = Math.ceil((9 / 5) * +result.value + 32);

  if (result.value == "") {
    input.value = "";
  }
};
