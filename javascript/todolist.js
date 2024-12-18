const addbtn = document.querySelector(".btn");
const input = document.querySelector(".int");
const todolists = document.querySelector(".ul");
const completebtn = document.querySelector(".complete-btn");
const deletebtn = document.querySelector(".delete-btn");
const addlist = document.querySelector(".addli");
let todoarrey = [];

let storegeTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => {
      todoarrey = data;
      todoarrey.map((todo, index) => {
        let newtodo = document.createElement("li");
        newtodo.innerHTML = `
         <li class="addli  id=${todoarrey.length}">
            <p class="li-p">
              <span>${index + 1}.</span> <span>${todo.title}</span>
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
    })
    .catch((error) => console.error(error));

  //   storegeTodos.map((todo) => {
  // let newtodo = document.createElement("li");
  // newtodo.innerHTML = `
  //   <li class="addli  id=${todoarrey.length}">
  //    <p class="li-p">
  //  <span>${todo.id}.</span> <span>${todo.title}</span>
  //    </p>
  //    <div>
  //  <button class="complete-btn">
  //    <img id="complete" src="../svgs/complete.svg" alt="" />
  //  </button>
  //  <button class="delete-btn">
  //    <img id="delete" src="../svgs/delete.svg" alt="" />
  //  </button>
  //   <button class="updete-btn">
  // <img id="updete" src="../svgs/updete.svg" alt="" />
  //  </button>
  //    </div>
  //  </li>
  // `;
  // todolists.append(newtodo);
  // });
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let fromData = {
      title: input.value,
      completed: false,
    };
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    });

    input.value = "";
  }
});
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim().length > 2) {
    let fromData = {
      title: input.value,
      completed: false,
    };
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    });
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
    fetch();
    `http://localhost:3000/todos${e.target.parentElement.parentElement.parentElement.id}`,
      {
        method: "DELETE",
      };
    console.log(e.target.parentElement.parentElement.parentElement.id);
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
