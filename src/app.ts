// <li>
// <label for="task-1">Buy food</label>
// <input type="checkbox" id="task-1" name="Buy food" />
// </li>

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Buy food", "Dog training", "Run", "Swim", "Bike"];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  tasks.push(taskNameInputElement.value);
  render();
});

render();
