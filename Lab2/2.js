function isIPAddress(ip) {
  //функція для перевірки правильності IP
  let reg = /^(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|[1-9])((\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|\d)){2}|(\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|\d)){4})\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|[1-9])$/;
  let result;
  let resultLength;
  let ans;

  if ((result = ip.match(reg))) {
    resultLength = result[0].split(".").length;
    ans = true;
  } else {
    ans = false;
  }

  return ans;
}

function findRGBA(text) {
  //знаходження рядку формату rgba(r, g, b, a)
  let a = "";
  let match = text.match(
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/
  );

  match ? (a = text) : (a = null);

  return a;
}

function findHexColor(text) {
  //знаходження рядку формату Hex (#ABC та #ABCDEF)
  return text.match(/#[a-f0-9]{3}\b/gi) || text.match(/#[a-f0-9]{6}\b/gi);
}

function findTags(text, tag) {
  //знахождення обраного тегу
  return text.match(`<${tag}>`);
}

function findPosNum(text) {
  //знаходження додатніх чисел
  return text.match(/\d+ | !-?\d+/g);
}

function findDates(text) {
  //знаходження дати в форматі РРРР-ММ-ДД
  return text.match(/\d\d\d\d-\d\d-\d\d/g);
}

let ip = prompt("Введіть IP адресу:"); //1
alert(isIPAddress(ip));

let text = prompt("Введіть колір у форматі RGBA:"); //2
alert(findRGBA(text));

text = prompt("Введіть колір у форматі HEX:"); //3
alert(findHexColor(text));

text = prompt("Введіть текст:");
let tag = prompt("Тег, який потрібно знайти:"); //4
alert(findTags(text, tag));

text = prompt("Введіть текст:"); //5
alert(findPosNum(text));

text = prompt("Введіть текст:"); //6
alert(findDates(text));
