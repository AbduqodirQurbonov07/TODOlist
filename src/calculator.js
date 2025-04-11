let wrepper = document.querySelector("#calc-wrepper");
let clear = document.getElementById("calc-clear");
let frontminus = document.getElementById("calc-front_minus");
let percent = document.getElementById("calc-percent");
let tobe = document.getElementById("calc-tobe");
let seven = document.getElementById("calc-seven");
let eight = document.getElementById("calc-eight");
let nine = document.getElementById("calc-nine");
let increase = document.getElementById("calc-increase");
let four = document.getElementById("calc-four");
let five = document.getElementById("calc-five");
let six = document.getElementById("calc-six");
let subtraction = document.getElementById("calc-subtraction");
let one = document.getElementById("calc-one");
let two = document.getElementById("calc-two");
let three = document.getElementById("calc-three");
let add = document.getElementById("calc-add");
let zero = document.getElementById("calc-zero");
let point = document.getElementById("calc-point");
let equal = document.getElementById("calc-equal");
let screentop = document.getElementById("calc-screen-top");
let screenbutton = document.getElementById("calc-screen-button");
let time = document.getElementById("time");

if (time.id == "time") {
  let now = new Date();
  let timer = setInterval(() => {
    `${new Date().getHours}:${new Date().getMinutes}:${new Date().getSeconds} `;
  }, 1000);
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let vaqt = `${hour} : ${minute}`;
  time.textContent = vaqt;
}

wrepper.addEventListener("click", (e) => {
  if (
    e.target.id !== "calc-equal" &&
    e.target.id !== "calc-clear" &&
    e.target.id !== "calc-front_minus"
  ) {
    screenbutton.innerHTML += e.target.textContent.trim();
  } else if (e.target.id === "calc-clear") {
    screenbutton.innerHTML = "";
    screentop.innerHTML = "";
  } else if (e.target.id === "calc-front_minus") {
    screentop.innerHTML = "";
    screenbutton.innerHTML = `-${screenbutton.innerHTML}`;
  } else if (
    screenbutton.innerHTML.includes("%") &&
    e.target.id === "calc-equal"
  ) {
    let ind = screenbutton.innerHTML.indexOf("%");
    let num1 = screenbutton.innerHTML.slice(0, ind);
    let num2 = screenbutton.innerHTML.slice(ind + 1);
    screentop.innerHTML = screenbutton.innerHTML;
    screenbutton.innerHTML = (num1 * num2) / 100;
  } else {
    screentop.innerHTML = screenbutton.textContent;
    screenbutton.innerHTML = eval(screentop.textContent);
  }
});
