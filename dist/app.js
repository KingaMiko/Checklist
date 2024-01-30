import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesConteinerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.SPORT,
    Category.DOG,
    Category.SOCIAL,
];
const tasks = [
    {
        title: "Buy food",
        done: false,
        category: Category.GENERAL,
    },
    {
        title: "Dog training",
        done: true,
        category: Category.DOG,
    },
    {
        title: "Run",
        done: false,
        category: Category.SPORT,
    },
    {
        title: "Bike",
        done: false,
        category: Category.DOG,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updtateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
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
addTask({ title: "Handling training", category: Category.DOG, done: false });
renderCategories(categories, categoriesConteinerElement, updtateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
let get = (response) => response;
const logFixed = (v) => {
    console.log(v.toFixed());
};
//logFixed(2.1);
let value = get(2.3);
if (typeof value === "number") {
    logFixed(value);
}
