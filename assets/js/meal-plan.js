
const searchAllCats = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const searchAllRegions = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const searchAllIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const searchName = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const filterCategory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const filterRegion = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
const filterIngredient = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const searchById = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const randomRecipe = 'https://www.themealdb.com/api/json/v1/1/random.php'

const dropdownContainer = document.querySelector('.dropdown');
const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('.dropdown-menu');

const getCatList = document.querySelector('#getCatList');
const getRegList = document.querySelector('#getRegList');
const getIngList = document.querySelector('#getIngList');


const viewRecipeBtn = document.querySelectorAll('.viewRecipe');
const modal = document.querySelector('.modal');
const modalBG = document.querySelector('.modal-background');
const closeBtn = document.querySelector('.closeBtn');
const addCartBtn = document.querySelectorAll('.addCartBtn');
const submitCartBtn = document.querySelector('.submitCartBtn');


// Get all categories from the API
function getAllCategories() {
    fetch(searchAllCats)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiResponse(data);
            // Create a dropdown menu with all categories
            createDropdownMenu(data.meals, dropdownMenu);
        });
}

// Get all regions from the API
function getAllRegions() {
    fetch(searchAllRegions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiResponse(data);
            // Create a dropdown menu with all regions
            createDropdownMenu(data.meals, dropdownMenu);
        });
}

// Get all ingredients from the API
function getAllIngredients() {
    fetch(searchAllIngredients)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiResponse(data);
            // Create a dropdown menu with all ingredients
            createDropdownMenu(data.meals, dropdownMenu);
        });
}

// this will pass the user selected category to the function, concat the string and pass it to the API
function getCustomerCategory(userCat) {
    let filteredCategory = filterCategory + userCat;
    console.log(filteredCategory);
    fetch(filteredCategory, {
        method: 'GET',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiUserResponse(data);
            createRecipeCard(data.meals[0]);

        });
}

// this will pass the user selected region to the function, concat the string and pass it to the API
function getCustomerRegion(userReg) {
    let filteredRegion = filterRegion + userReg;
    console.log(filteredRegion);
    fetch(filteredRegion, {
        method: 'GET',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiUserResponse(data);
            createRecipeCard(data.meals[0]);

        });
}

// this will pass the user selected ingredient to the function, concat the string and pass it to the API
function getCustomerIngredient(userIng) {
    let filteredIngredient = filterIngredient + userIng;
    console.log(filteredIngredient);
    fetch(filteredIngredient, {
        method: 'GET',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            handleApiUserResponse(data);
            createRecipeCard(data.meals[0]);
        });
}








// Open dropdown menu when clicking on the trigger
dropdownTrigger.addEventListener('click', function () {
    dropdownContainer.classList.toggle('is-active');
});

// Close dropdown menu when clicking outside of it
document.addEventListener('click', function (event) {
    if (!dropdownContainer.contains(event.target)) {
        dropdownContainer.classList.remove('is-active');
    }
});

getCatList.addEventListener('click', function () {
    dropdownContainer.classList.toggle('is-active');
    getAllCategories(); // Call the function to get all categories
});

getRegList.addEventListener('click', function () {
    dropdownContainer.classList.toggle('is-active');
    getAllRegions(); // Call the function to get all regions
});

getIngList.addEventListener('click', function () {
    dropdownContainer.classList.toggle('is-active');
    getAllIngredients(); // Call the function to get all ingredients
});








// Function to handle the API response
function handleApiResponse(data) {
    for (let index = 0; index < data.meals.length; index++) {
        console.log(data.meals[index]);
    }
}

// Function to handle the API response for user-selected category/region/ingredient
function handleApiUserResponse(data) {
    const recipeOptions = document.getElementById('recipeOptions');
    recipeOptions.innerHTML = ''; // Clear existing recipe cards

    for (let index = 0; index < data.meals.length; index++) {
        const recipe = data.meals[index];
        const recipeCard = createRecipeCard(recipe);
        recipeOptions.appendChild(recipeCard);
    }
}

// Function to create a dropdown menu with options
function createDropdownMenu(options, dropdownMenu) {
    const dropdownPlaceholder = document.getElementById('dropdown-placeholder');

    // Clear existing options
    dropdownPlaceholder.innerHTML = '';

    // Create and append new options
    for (let index = 0; index < options.length; index++) {
        const option = options[index];
        const menuItem = document.createElement('a');
        menuItem.classList.add('dropdown-item');
        menuItem.textContent = option.strCategory || option.strArea || option.strIngredient;
        dropdownPlaceholder.appendChild(menuItem);
        // Add event listener to the dropdown item
        menuItem.addEventListener('click', function () {
            // Call the API based on the selected option
            const selectedOption = option.strCategory || option.strArea || option.strIngredient;
            if (selectedOption == option.strCategory) {
                getCustomerCategory(selectedOption);
            } else if (selectedOption == option.strArea) {
                getCustomerRegion(selectedOption);
            } else if (selectedOption == option.strIngredient) {
                getCustomerIngredient(selectedOption);
            } else {
                console.log('Error');
            }

        });
    }
}

function createRecipeCard(recipe) {
   
}
