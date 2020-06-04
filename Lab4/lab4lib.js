//1
function NowTime() {
  let now = new Date();
  let res = "";
  let m = String(now.getMonth());
  let d = String(now.getDay());
  let t = `${String(now.getHours())}:${now.getMinutes()}:${now.getSeconds()}`;

  switch (m) {
    case "0":
      m = "січня";
      break;
    case "1":
      m = "лютого";
      break;
    case "2":
      m = "березня";
      break;
    case "3":
      m = "квітня";
      break;
    case "4":
      m = "травня";
      break;
    case "5":
      m = "червня";
      break;
    case "6":
      m = "липня";
      break;
    case "7":
      m = "серпня";
      break;
    case "8":
      m = "вересня";
      break;
    case "9":
      m = "жовтня";
      break;
    case "10":
      m = "листопада";
      break;
    case "11":
      m = "грудня";
      break;
    default:
      m = "?:)";
      break;
  }
  switch (d) {
    case "0":
      d = "неділя";
      break;
    case "1":
      d = "понеділок";
      break;
    case "2":
      d = "вівторок";
      break;
    case "3":
      d = "середа";
      break;
    case "4":
      d = "четвер";
      break;
    case "5":
      d = "п`ятниця";
      break;
    case "6":
      d = "субота";
    default:
      d = "?:)";
      break;
  }
  res = `Дата: ${now.getDate()} ${m} ${now.getFullYear()} року\nДень: ${d}\nЧас: ${t}`;
  alert(res);
}
//2
function NowDay() {
  let now = new Date();
  let n = String(now.getDay());
  let d;
  let res = "";

  switch (n) {
    case "0":
      n = "7";
      d = "неділя";
      break;
    case "1":
      d = "понеділок";
      break;
    case "2":
      d = "вівторок";
      break;
    case "3":
      d = "середа";
      break;
    case "4":
      d = "четвер";
      break;
    case "5":
      d = "п`ятниця";
      break;
    case "6":
      d = "субота";
    default:
      d = "?:)";
      break;
  }
  res = `Номер дня: ${n}\nНазва дня: ${d}`;
  alert(res);
}
//3
function BttF() {
  let now = new Date();
  let N = +prompt("Введіть к-ть днів:");
  let res = "";
  now.setDate(now.getDate() - N);
  let m = String(now.getMonth());

  switch (m) {
    case "0":
      m = "січня";
      break;
    case "1":
      m = "лютого";
      break;
    case "2":
      m = "березня";
      break;
    case "3":
      m = "квітня";
      break;
    case "4":
      m = "травня";
      break;
    case "5":
      m = "червня";
      break;
    case "6":
      m = "липня";
      break;
    case "7":
      m = "серпня";
      break;
    case "8":
      m = "вересня";
      break;
    case "9":
      m = "жовтня";
      break;
    case "10":
      m = "листопада";
      break;
    case "11":
      m = "грудня";
      break;
    default:
      m = "?:)";
      break;
  }

  res = `${now.getDate()} ${m} ${now.getFullYear()} року`;
  alert(res);
}
//4
function LastDay() {
  let y = +prompt("Введіть рік");
  let m = +prompt("Введіть місяць") - 1;
  let date = new Date(y, m + 1, 0);

  alert(date.getDate());
}
//5
function Sec() {
  let now = new Date();
  let full = 86400;
  let res = {
    passed: 0,
    left: 0,
  };
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  res.passed = Math.round(diff / 1000);
  res.left = full - res.passed;
  let output = `Пройшло секунд: ${res.passed}\nЗалишилось: ${res.left}`;
  alert(output);
}
//6
function formatDate() {
  let date = new Date();

  var dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yyyy = date.getFullYear();

  alert(dd + "." + mm + "." + yyyy);
}
//7
function DateDifference() {
  let y1 = +prompt("Введіть рік");
  let m1 = +prompt("Введіть місяць");
  let d1 = +prompt("Введіть число");
  let y2 = +prompt("Введіть другий рік");
  let m2 = +prompt("Введіть другий місяць");
  let d2 = +prompt("Введіть друге число");
  let date1 = new Date(y1, m1, d1);
  let date2 = new Date(y2, m2, d2);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  alert(`Різниця (днів): ${diffDays}`);
}
//8
function formatDate2() {
  let y = +prompt("Рік:");
  let m = +prompt(`Місяць:\n(${y})`) - 1;
  let d = +prompt(`Число:\n(${m + 1}.${y})`);
  let h = +prompt(`Година:\n(${d}.${m + 1}.${y})`);
  let mn = +prompt(`Хвилина:\n(${d}.${m + 1}.${y} ${h})`);
  let s = +prompt(`Секунда:\n(${d}.${m + 1}.${y} ${h}:${mn})`);
  let date = new Date(y, m, d, h, mn, s, 0);
  let now = new Date();
  let timeDiff = Math.abs(now.getTime() - date.getTime());
  let diffSec = timeDiff / 1000;

  if (diffSec < 1 && diffSec >= 0) {
    alert("Тільки що");
  } else if (diffSec < 60) {
    alert(`${Math.ceil(diffSec)} cек назад`);
  } else if (diffSec < 3600) {
    alert(`${Math.ceil(timeDiff / 60000)} хв назад`);
  } else {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yyyy = date.getFullYear();

    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    let min = date.getMinutes();
    if (min < 10) min = "0" + min;

    alert(dd + "." + mm + "." + yyyy + " " + hour + ":" + min);
  }
}
//9
function ReturnObj() {
  let date = prompt("Введіть час:");
  date = Date.parse(date);
  date = new Date(date);
  alert(date);
}
