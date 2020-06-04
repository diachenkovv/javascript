//1
function addClass(obj, cls) {
  if (obj.className.match(cls + " ") == null) {
    obj.className = obj.className + " " + cls;
    obj.className = obj.className.replace(/ +/g, " ").trim();
  }

  return obj.className;
}
//2
function camelize(str) {
  let arr_str = str.split("");
  let y = arr_str.length;

  for (i = 0; i < y; i++) {
    if (arr_str[i] == "-") {
      arr_str[i + 1] = arr_str[i + 1].toUpperCase();
    }
  }
  str = arr_str.join("");
  str = str.replace(/-/g, "");

  return str;
}
//3
function removeClass(obj, cls) {
  let arr = obj.className.split(" ");
  let y = arr.length;
  let result = [];

  for (let i = 0; i < y; i++) {
    if (arr[i] == cls) {
      arr.splice(i, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] != arr[i - 1] && arr[i + 1] != arr[i] && result.push(arr[i]);
  }

  obj.className = result.join(" ");

  return obj.className;
}
//4
function filterRangeInPlace(arr, a, b) {
  let y = arr.length;

  for (let i = 0; i < y; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}
//5
function reverseSort(arr) {
  arr.sort((a, b) => b - a);
}
//6
function arraySort(arr) {
  let y = arr.length;

  for (let i = 0; i < y; i++) {
    reserv[i] = arr[i];
  }

  return arr.sort();
}
//7
function compareRandom() {
  count++;

  return Math.random() - 0.5;
}
//8
function PeopleSortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
//9
function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
function printListRec(list) {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}
function printReverseListRec(list) {
  if (list.next) {
    printReverseListRec(list.next);
  }
  alert(list.value);
}
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
//10
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
