const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("category: general");
    }
    else if (category === "dog") {
        alert("It's time for yor dog!");
    }
    else if (category === "sport") {
        console.log("category: sport");
    }
    else if (category === "work") {
        console.log("category: work");
        alert("WORK HARD!");
    }
    else if (category === "social") {
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
