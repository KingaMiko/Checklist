import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesConteinerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.SPORT,
  Category.DOG,
  Category.SOCIAL,
];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updtateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask({
    title: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);
});

addTask({ title: "Handling training", category: Category.DOG, done: false });
renderCategories(
  categories,
  categoriesConteinerElement,
  updtateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

let get = (response: unknown) => response;

const logFixed = (v: number) => {
  console.log(v.toFixed());
};

//logFixed(2.1);

let value = get(2.3);
if (typeof value === "number") {
  logFixed(value);
}
