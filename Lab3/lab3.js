//1
let obj = {
  className: "open menu",
};
addClass(obj, "new"); // obj.className='open menu new'
addClass(obj, "open"); // без змін (клас вже існує)
addClass(obj, "me"); // obj.className='open menu new me'
alert(obj.className); // "open menu new me"
//2
let str = "list-style-image";
alert(camelize(str));
//3
obj = {
  className: "open menu",
};
removeClass(obj, "open"); // obj.className='menu'
removeClass(obj, "blabla"); // без змін (такого класу немає)
alert(obj.className);
//4
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr); // заливаються [3, 1]
//5
arr = [5, 2, 1, -10, 8];
reverseSort(arr);
alert(arr); // 8, 5, 2, 1, -10
//6
arr = ["HTML", "JavaScript", "CSS"];
let reserv = [];
arrSorted = arraySort(arr);
alert(arrSorted); // CSS, HTML, JavaScript
arr = reserv;
alert(arr); // HTML, JavaScript, CSS
//7
arr = [1, 2, 3, 4, 5];
let count = 0;
arr.sort(compareRandom);
alert(arr);
//8
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };
let people = [vasya, masha, vovochka];
PeopleSortByAge(people);
alert(people[0].age); // 6
//9
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
printList(list);
printListRec(list);
printReverseListRec(list);
printReverseList(list);
//10
let strings = [
  "C++",
  "C#",
  "C++",
  "C#",
  "C",
  "C++",
  "JavaScript",
  "C++",
  "JavaScript",
];
alert(unique(strings)); // C++, C#, C, JavaScript
