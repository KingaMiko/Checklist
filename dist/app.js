// <li>
// <label for="task-1">Buy food</label>
// <input type="checkbox" id="task-1" name="Buy food" />
// </li>
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = ["Buy food", "Dog training", "Run", "Swim", "Bike"];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
});
render();
