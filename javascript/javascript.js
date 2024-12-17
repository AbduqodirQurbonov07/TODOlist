// for (let i = 1; i < 11; i++) {
//   let j = 2;
//   result = j * i;
//   console.log(`${j} * ${i} =${result}`);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 3;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 4;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 5;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 6;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 7;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 8;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 9;
//   console.log(j * i);
// }

// let hafta = prompt("Bugun haftani nechanchi kuni");
// switch (hafta) {
//   case "1":
//     alert("Dushanba");
//     break;
//   case "2":
//     alert("Seshanba");
//     break;
//   case "3":
//     alert("Chorshanba");
//     break;
//   case "4":
//     alert("Payshanba");
//     break;
//   case "5":
//     alert("Juma");
//     break;
//   case "6":
//     alert("Shanba");
//     break;
//   case "7":
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Bunday hafta kuni yo'q");
//     break;
// }

// function qoshish(i, j) {
// for (i; i < 11; i++) {
// console.log(j * i);
// }
// }
// qoshish(2, 3);

// let plus = function (i, j, num) {
// for (i; i < num; i++) {
// return j * i;
// }
// };
// plus(9, 3, 10);

// let minus = (nam, mus) => {
// console.log(nam + mus);
// };
// minus(12, 29);

// function answer(a, b) {
// let result = 0;
// for (i = a; i <= b; i++) {
// if (i % a === 0) result += i;
// }
// return result;
// }
// answer(3, 20);
//
// function karra(b) {
//   for (i = 1; i <= b; i++) {
// for (j = 1; j <= 10; j++) {
//   console.log(`${i} * ${j} = ${i * j}`);
// }
// console.log("===============================");
//   }
// }
// karra(100);

// let person = {
//   name: "Johons libre",
//   age: 23,
//   bithday: 10,
// };
// console.log(person);
// Object.freeze(person);

// person.name = "yasavul";
// person.age = 34;

// console.log(person);

//1 masala
// let obj = {
// id: 1,
// name: "WebBrain",
// };
// for (a in obj) {
// console.log(a);
// }

//2 masala
// let obj2 = {
// id: 1,
// name: "WebBrain",
// };
// for (let key in obj2) {
// if (typeof obj2[key] === "number") {
// console.log(obj2[key]);
// }
// }
// let obj3 = {
// id: 1,
// name: "WebBrain",
// offline: true,
// online: true,
// individual: false,
// };
//
// for (let key in obj3) {
// if (typeof obj3[key] === "boolean") {
// console.log(`${key} : ${obj3[key]};`);
// }
// }

// let obj4 = {
// id: 1,
// name: "WebBrain",
// offline: true,
// online: true,
// individual: false,
// };
// function search(obj4, keys) {
// for (let i in obj4) {
// if ((obj4 == obj4, keys == i)) {
// console.log(`${i} : ${obj4[i]}`);
// } else "undefined";
// }
// }
// search(obj4, "name");
// 5 masala

// let teach = structuredClone(user);
// teach.budbf = 2442;
// console.log(teach);
//
// console.log(teach == user);
// console.log(teach === user);
// let user = {
// id: 1,
// name: "WebBrain",
// };
// let user2 = {
// id: 1,
// name: "WebBrain",
// jov: "dfbubu",
// };
// let user3 = {
// id: 474854,
// name: "WebBrain",
// };
// Object.assign(user, user2, user3);
// console.log(user);
// let person = {
// name: "Muhmmad",
// age: 20,
// sayHi: function () {
// console.log(this);
// },
// };
// person.sayHi();
// let user = {
// name: "akbar",
// id: 12,
// say: function () {
// console.log(this);
// },
// };
// user.say();
//
// let i = 45;
// i = i.toString();
// console.log(typeof i);
// console.log(i.toString());

// let a = 12.54657;
// console.log(Math.floor(a));
//

// let a = 23.8675;
// console.log(Math.ceil(a));
//
// let a = 23.5675;
// console.log(Math.round(a));
// let a = 23.9675;
// console.log(Math.trunc(a));

// let a = 34.5767;
// console.log(a.toFixed(4));
//
// let a = 45.988098;
// console.log(parseInt(a));

// let a = 45.988098;
// console.log(parseFloat(a));

// console.log(parseInt(Math.random() * 100));
//
// alert(Math.max(3, 5, -10, 0, 1));
// alert(Math.min(3, 5, -10, 0, 1));
// alert(Math.pow(3, 5));

// 1 masala
//
// function numStr(a) {
// if (a == Number) {
// if (typeof a == String) {

// }
// }
// }
//
// numStr(23);
// console.log(a);
//

// let a = 23;
// if (a == Number) {
// }
// if (typeof a == String) {
// console.log(a);
// }
// console.log(typeof a);
//

// function maxNum(a, b, c, d) {
// if ((a == a > b, a > c, a > d)) {
// console.log(a);
// } else if ((b == b > a, b > c, b > d)) {
// console.log(b);
// } else if ((c == c > b, c > a, c > d)) {
// console.log(c);
// } else if ((d == d > b, d > a, d > c)) {
// console.log(d);
// }
// }
// maxNum(1, -9, 30000, 1000);

// function minNum(a, b, c, d) {
// if ((a == a < b, a < c, a < d)) {
// console.log(a);
// } else if ((b == b < a, b < c, b < d)) {
// console.log(b);
// } else if ((c == c < b, c < a, c < d)) {
// console.log(c);
// } else if ((d == d < b, d < a, d < c)) {
// console.log(d);
// }
// }
// minNum(1, -9, 3, 100);

// function numStr(i) {
// if (i == Number) {
// } else if (a == String) {
// console.log(i);
// }
// }
// numStr(23);

// function toStr(num, a) {
// console.log(num ** a);
// }
//
// toStr(12, 3);
//
// let getNum = {
// 1: "99-777-01-01",
// 2: "99-777-01-02",
// 3: "99-777-01-03",
// 4: "99-777-01-04",
// 5: "99-777-01-05",
// 6: "99-777-01-06",
// 7: "99-777-01-07",
// 8: "99-777-01-08",
// 9: "99-777-01-09",
// 10: "99-777-01-10",
// };
//
// for (i in getNum) {
//
// }
//
// STRING

// let str = `hello world`;
// console.log(str.length);
// console.log(str.at(-1));
// console.log(str.charAt(1));
// for (let i of str) {
// console.log(i);
// }
// console.log(str.indexOf("w", 3));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// for (let i of str) {
// if ([i] == 0) {
// console.log(i);
// }
// console.log(i.toUpperCase());
// }

// 1 task
// let str = "JavaScript is fun";
// console.log(str.length);
//2 task
// let str1 = "hello world";
// console.log(str1.toUpperCase());
// 3 task
// let str2 = "LEARN JAVASCRIPT";
// console.log(str2.toLowerCase());
// 4 task
// let str3 = "JavaScript is a versatile language";
// console.log(str3.includes("versatile"));
//5 task
// let str4 = "Welcome to the JavaScript world";
// console.log(str4.slice(25, 31));
//6 task
// let str5 = "I love Python";

// 7 task
// let str6 = "  Learn JavaScript  ";
// console.log(str6.trim());
// 8 task
// let str7 = `appple,
// banana,
// cherry;
// console.log(str7);

// 9 task
// let str8 = JavaScript is amazing;

// console.log(str8.startsWith("Java"))

// ARREY

// let mevalar = ["olma ", "nok", "ananas"];
// console.log(mevalar.length);
// console.log((mevalar[2] = "banan"));
// console.log(mevalar);
// console.log(mevalar.at(2));
// console.log(mevalar.push("apilsin"));
// console.log(mevalar.shift());
// console.log(mevalar.pop());
// console.log(mevalar.unshift("xurmo"));
// let meva = mevalar;

// for (i in mevalar) {
//   console.log(mevalar[i]);
// }
// console.log(mevalar.join(" "));
// let meva = "salom";
// let arr = mevalar.concat(meva);
// console.log(arr);
// console.log(meva.split(""));
// console.log(mevalar.slice(1, 2));

// console.log(mevalar.splice(1, 1, "kivi"));

// 1 MASALA

// let arr1 = [1, 2, 3, 4];
// for (i of arr1) {
// let b = arr1.slice(0);
// console.log(i ** );
// }
// ARREY PART 2

// let arr = ["ahmad", 1, 2, 3, 4, 53, 7];

// rr1 = arr.find((i) => i == 3);
// rr1 = arr.filter((i) => i > 3);
// rr1 = arr.findIndex((i) => i == 53);
// rr1 = arr.sort((a, b) => a - b);

// console.log(rr1);

//1 task

// let arr1 = [1, 3, 5, 6, 7, 8];
// let res = arr1.find((i) => i % 2 == 0);

// console.log(res);

// let arr2 = [4, 9, 16, 25];
// let res1 = arr2.findIndex((i) => i == 16);
// console.log(res1);

// let arr3 = [-3, -2, 0, 1, 2];
// let res2 = arr3.findLastIndex((i) => i == 2);
// console.log(res2);

// let arr4 = [-5, -2, 10, -3, -8, 0];
// let res3 = arr4.filter((i) => i < 0);
// console.log(res3);

// let arr5 = ["banana", "apple", "grape", "pear"];
// let res4 = arr5.sort((a, b) => a.localeCompare(b));
// console.log(res4);

// let arr6 = [1, 2, 3, 4, 5];
// let res5 = arr6.map((el) => el ** 2);
// console.log(res5);

// let arr7 = [10, 20, 30, 40];
// let res6 = arr7.forEach((i) => i);
// console.log(arr7);

// let arr8 = [-3, -2, -1, 0, 5, 8];
// let res7 = arr8.find((i) => i > 0);
// console.log(res7);

// let arr9 = [7, 4, 9, 1, 3];
// console.log(arr9.filter((i) => i < 5));

// let arr10 = [10, 3, 2, 7, 1];
// console.log(arr10.sort((a, b) => a - b));

// let arr11 = [5, 10, 15, 20, 25, 30];
// console.log(arr11.find((i) => i % 3 == 0));

// let arr12 = [1, 3, 7, 8, 7, 10];
// console.log(arr12.findLastIndex((i) => i == 7));

// let arr13 = [5, 12, 3, 18, 9, 6];
// let res8 = arr13.filter((i) => i % 2 == 0);
// let jav = res8.reduce((sam, i) => sam + i);
// console.log(jav);

// let arr14 = [2, 4, 6, 8];
// console.log(arr14.map((i) => i ** 2));

// let arr15 = [15, 3, 20, 7, 9];
// console.log(arr15.sort((a, b) => b - a));

// let arr16 = ["a", "b", "c", "d"];
// console.log(arr16.map((i) => i.toUpperCase()));

// let arr17 = [4, 5, 6];

// let arr20 = [4, 3, 7, 8, 9];
// console.log(arr20.sort((a, b) => b - a));

//CRUD
//C -> create
//R -> read
//U -> update
//D -> delete
//create
// let User = [];
// function UserAdd(firstname, lastname, age) {
//   User.push({ id: User.length + 1, firstname, lastname, age });
// }
// UserAdd("Ozod", "Qurbonov", 12);
// UserAdd("Ahmad ", "Jorayev", 18);
// console.log(User);
// function readUser(id) {
//   return User.find((el) => el.id == id);
// }
// console.log(readUser(1));

// function UserDelete(id) {
//   return User.filter((user) => user.id != id);
// }
//
// console.log(UserDelete(2));

// function UpdateUser(id, firstname, lastname, age) {
//   let Users = User.find((user) => user.id == id);
//   Users = { ...Users, firstname, lastname, age };
//   return (User[id - 1] = Users);
// }
// UpdateUser(2, "Aslidin ", "odilov", 34);
// console.log(User);

// Destructuring
// let arr = ["abduqodir", "qurbonov"];
// let [name1, lastname] = arr;
// console.log(name1, lastname);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [bir, ikki, ...newarr] = arr;
// console.log(newarr);
// let obj = {
//   name1: "ahmad",
//   age: 21,
// };
// let { name1 } = obj;
// console.log(name1);
// Masalalar
// function arr1(arr) {
// return arr.every((i) => i > 0);
// }
// console.log(arr1([3, 5, 7, 9, 12]));

// let arr2 = [2, 4, 6, 8, 9];
// console.log(arr2.some((i) => i % 3 == 0));

// let arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.fill(null, 2, 4));

// let arr4 = [1, 2, 3, 4];
// console.log(arr4.map((i) => i * 3));

// let arr5 = [5, 10, 15, 20];
// console.log(arr5.reduce((sam, i) => sam + i));

// let arr6 = ["level", "radar", "madam"];
// console.log(arr6.every((i) => i == "palindrom"));

// let arr7 = [1, [2, [3, [4]]]];
// console.log(arr7.flat(Infinity));

// let arr8 = ["apple ", "banana", "watermelon"];
// let a = arr8.reduce((sam, current) => current.length < current.length);
// console.log(a);

// let arr9 = [1, 2, 3, 4, 5, 6];
// console.log(arr9.copyWithin(0, 3, 6));

// let arr10 = [5, 9, 12, 14, 19];
// console.log(arr10.find((i) => i % 3 == 0));

// let arr11 = [7, 3, 9, 2, 8];
// console.log(arr11.findIndex((i) => i == 9));

// let arr12 = [1, 2, 3, 4, 5];
// console.log(arr12.copyWithin(3, 1, 3));

// let arr13 = [2, 4, 6, 8];
// console.log(arr13.map((i) => i * 2));

// let arr14 = [5, 15, 20, 25];
// console.log(arr14.filter((i) => i % 2 == 0));

// let arr15 = [12, 5, 20, 7];
// console.log(arr15.sort((a, b) => b - a));

// let arr16 = [3, 6, 9, 12];
// console.log(arr16.reduce((sam, i) => sam + i));

// let arr17 = [1, 2, 3, 4, 5];
// console.log(arr17.slice(2, 4));

// let arr18 = [1, [2, [3, [4]]]];
// console.log(arr18.flat(3));

// let arr19 = [1, 2, 3, 4, 5];
// console.log(arr19.fill(0, 3));
// console.log(document.body);
// setTimeout(() => {
// console.log(arr19.filter((i) => i % 2 == 0));
// }, 2000);

// document.style.color = "red";
// console.log(navigator.platform);
// document.getElementById("p").style.width = "200px";
// console.log(document.querySelector("#p"));
//
// let js = document.querySelector("#js");
// setTimeout(() => {
// js.innerHTML = ` bu HTML`;
// }, 4000);
// console.log(js);
// let itemall = document.querySelectorAll("li");
// let item1 = document.querySelector(".item-1");
//
// item1.getAttribute("else");
// console.log(item1);
// let item2 = document.querySelector(".item-2");
// setTimeout(() => {
// item1.innerHTML = `<h1> "bu birinchi element"</h1>`;
// }, 3000);
// console.log(item2.hasAttribute("class"));
// itemall = item2.setAttribute("id", "js2");
// console.log(itemall);

// let item11 = document.querySelector("#it");
// let items = document.createElement("li");
// items.innerText = "bu yangi el";
// js.replaceWith(items);
// item11.remove();

// append -> el oxiriga qoshadi
// item11.append(items);
// prepend -> el boshiga qoshadi
// item11.prepend(items);
// belgilanga eldan keyin qoshib beradi
// item11.after(items);
//belgilanga eldan oldin qoshib beradi
// item11.before(items);
// let item3 = document.querySelector(".item-3");
// console.log(item3.classList);
// item3.classList.add("item3");
// item3.classList.remove("item3");
// item3.classList.toggle("item3");

// let btn = document.querySelector(".btn");
// btn.addEventListener("shiftkey", () => {
//   console.log("mouse up boldi");
// });

const addbtn = document.querySelector(".btn");
const input = document.querySelector(".int");
const todolists = document.querySelector(".ul");
const completebtn = document.querySelector(".complete-btn");
const deletebtn = document.querySelector(".delete-btn");
const addlist = document.querySelector(".addli");
let todoarrey = JSON.parse(localStorage.getItem("todos")) ?? [];
// let todos = [];
addEventListener("DOMContentLoaded", () => {
  let storegeTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
  storegeTodos.map((todo) => {
    let newtodo = document.createElement("li");
    newtodo.innerHTML = `
      <li class="addli  id=${todoarrey.length}">
       <p class="li-p">
         <span>${todo.id}.</span> <span>${todo.title}</span>
       </p>
       <div>
         <button class="complete-btn">
           <img id="complete" src="../svgs/complete.svg" alt="" />
         </button>
         <button class="delete-btn">
           <img id="delete" src="../svgs/delete.svg" alt="" />
         </button>
          <button class="updete-btn">
            <img id="updete" src="../svgs/updete.svg" alt="" />
         </button>
       </div>
     </li>
    `;
    todolists.append(newtodo);
  });
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    todoarrey.push({ id: todoarrey.length + 1, title: input.value });
    const todolist = document.createElement("li");
    todolist.innerHTML = `
      <li class="addli id=${todoarrey.length} ">
           <p class="li-p">
             <span>${todoarrey.length}.</span> <span>${input.value}</span>
           </p>
           <div>
             <button class="complete-btn">
               <img id="complete" src="../svgs/complete.svg" alt="" />
             </button>
             <button class="delete-btn">
               <img id="delete" src="../svgs/delete.svg" alt="" />
             </button>
             <button class="updete-btn">
                  <img id="updete" src="../svgs/updete.svg" alt="" />
             </button>
           </div>
         </li>
              `;
    todolists.append(todolist);
    localStorage.setItem("todos", JSON.stringify(todoarrey));
    input.value = "";
  }
});
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim().length > 2) {
    todoarrey.push({ id: todoarrey.length + 1, title: input.value });
    const todolist = document.createElement("li");
    todolist.innerHTML = `
        <li class="addli id=${todoarrey.length} ">
             <p class="li-p">
               <span>${todoarrey.length}.</span> <span>${input.value}</span>
             </p>
             <div>
               <button class="complete-btn">
                 <img id="complete" src="../svgs/complete.svg" alt="" />
               </button>
               <button class="delete-btn">
                 <img id="delete" src="../svgs/delete.svg" alt="" />
               </button>
               <button class="updete-btn">
                    <img id="updete" src="../svgs/updete.svg" alt="" />
               </button>
             </div>
           </li>
  `;
    todolists.append(todolist);
    localStorage.setItem("todos", JSON.stringify(todoarrey));
    input.value = "";
  }
  input.value = "";
});
todolists.addEventListener("click", (e) => {
  if (e.target.id == "complete") {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "done-task"
    );
  }
  if (e.target.id == "delete") {
    todoarrey = todoarrey.filter((todo) => {
      todo.id != e.target.parentElement.parentElement.id;
    });
    todoarrey = todoarrey.map((todo, index) => ({
      ...todo,
      id: index + 1,
    }));

    localStorage.setItem("todos", JSON.stringify(todoarrey));
    e.target.parentElement.parentElement.parentElement.remove();
    // console.log(e.target.parentElement.parentElement.parentElement);
  }

  if (e.target.id == "updete") {
    let targettodo = todoarrey.find(
      (todo) => todo.id == e.target.parentElement.parentElement.parentElement.id
    );
    console.log(targettodo.title);

    input.value = targettodo.title;

    // console.log(e.target.parentElement.parentElement.parentElement);
  }
});
