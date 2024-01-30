import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("category: general");
    }
    else if (category === Category.DOG) {
        alert("It's time for yor dog!");
    }
    else if (category === Category.SPORT) {
        console.log("category: sport");
    }
    else if (category === Category.WORK) {
        console.log("category: work");
        alert("WORK HARD!");
    }
    else if (category === Category.SOCIAL) {
        console.log("category: social");
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesConteinerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesConteinerElement.appendChild(categoryElement);
    });
};
