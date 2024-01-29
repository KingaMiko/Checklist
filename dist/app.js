import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesConteinerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "sport", "dog"];
const tasks = [
    {
        title: "Buy food",
        done: false,
        category: "general",
    },
    {
        title: "Dog training",
        done: true,
        category: "dog",
    },
    {
        title: "Run",
        done: false,
        category: "sport",
    },
    {
        title: "Bike",
        done: false,
        category: "sport",
    },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ title: "Handling training", category: "dog", done: false });
renderCategories(categories, categoriesConteinerElement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
