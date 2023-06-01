const searchAllCats = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const searchAllRegions = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const searchAllIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const searchName = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const filterCategory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const filterRegion = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
const filterIngredient = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

// this will pull all categories from the API = 14 total currently
function getAllCategories() {
    fetch(searchAllCats, {
        method: 'GET',

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
        });
}

// this will pull all regions from the API = 29 total currently
function getAllRegions() {
    fetch(searchAllRegions, {
        method: 'GET',

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
        });
}

// this will pull all ingredients from the API = 607 total currently
function getAllIngredients() {
    fetch(searchAllIngredients, {
        method: 'GET',

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
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


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
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


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
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


            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index]);
            }
        });
}








// REGIONS
//     'American',
//     'British',
//     'Canadian',
//     'Chinese',
//     'Croatian',
//     'Dutch',
//     'Egyptian',
//     'Filipino',
//     'French',
//     'Greek',
//     'Indian',
//     'Irish',
//     'Italian',
//     'Jamaican',
//     'Japanese',
//     'Kenyan',
//     'Malaysian',
//     'Mexican',
//     'Moroccan',
//     'Polish',
//     'Portugues',
//     'Russian',
//     'Spanish',
//     'Thai',
//     'Tunisian',
//     'Turkish',
//     'Unknown',
//     'Vietnames']

// CATEGORIES 
//     'Beef', 
//     'Breakfast', 
//     'Chicken',
//     'Dessert',
//     'Goat', 
//     'Lamb', 
//     'Miscellaneous', 
//     'Pasta', 
//     'Pork', 
//     'Seafood', 
//     'Side', 
//     'Starter', 
//     'Vegan', 
//     'Vegetarian'