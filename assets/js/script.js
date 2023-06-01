const regArr = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'Croatian',
    'Dutch',
    'Egyptian',
    'Filipino',
    'French',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Portugues',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Unknown',
    'Vietnames']

catArr = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian']

const searchAllCats = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const searchAllRegions = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const searchAllIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const searchName = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const filterCategory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const filterRegion = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
const filterIngredient = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const searchById = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const randomRecipe = 'https://www.themealdb.com/api/json/v1/1/random.php'

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



// Fetches random recipes
function getRandomRecipe() {
    const randomRecipes = [];

    for (let index = 0; index < 3; index++) {
        fetch(randomRecipe, {
            method: 'GET',
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Store the ID of each random recipe
                randomRecipes.push(data.meals[0].idMeal);
                if (randomRecipes.length === 3) {
                    console.log('Random Recipes:', randomRecipes);
                    displayFeaturedRecipes(randomRecipes);
                }
            })
            .catch(function (error) {
                console.log('Error:', error);
            });
    }
}

// Displays featured recipes
function displayFeaturedRecipes(randomRecipes) {
    randomRecipes.forEach((recipeId, index) => {
      const recipeURL = searchById + recipeId;
  
      fetch(recipeURL, {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const recipe = data.meals[0];
  
          const recipeImage = document.getElementById(`featRecImg${index}`);
          const recipeName = document.getElementById(`featRecName${index}`);
          const viewRecipeBtn = document.getElementById(`viewRecipeBtn${index}`);
  
          // Set the recipe image and name
          recipeImage.src = recipe.strMealThumb;
          recipeImage.alt = recipe.strMeal;
          recipeName.textContent = recipe.strMeal;
  
          // Attach event listener to View Recipe button
          viewRecipeBtn.addEventListener('click', function () {
            // Populate recipe information in the modal
            const modal = document.querySelector('.modal');
            const recipeImageModal = modal.querySelector('.recipeImage');
            const recipeNameModal = modal.querySelector('#modalRecName');
            const recipeIngred = modal.querySelector('.recipeIngred');
            const recipeInstruct = modal.querySelector('.recipeInstruct');
            const addRecipeCartBtn = modal.querySelector('.addRecipeCart');
  
            // Set the recipe image, name, ingredients, and instructions in the modal
            recipeImageModal.src = recipe.strMealThumb;
            recipeImageModal.alt = recipe.strMeal;
            recipeNameModal.textContent = recipe.strMeal;
            recipeIngred.textContent =  recipe.strIngredient1 + ", " + recipe.strIngredient2 + ", " + recipe.strIngredient3;
            recipeInstruct.textContent = recipe.strInstructions;
  
            // Show the modal
            modal.classList.add('is-active');
          });
        })
        .catch(function (error) {
          console.log('Error:', error);
        });
    });
  }




const viewRecipeBtn = document.querySelectorAll('.viewRecipe');
const modal = document.querySelector('.modal');
const modalBG = document.querySelector('.modal-background');
const closeBtn = document.querySelector('.closeBtn');
const addCartBtn = document.querySelectorAll('.addCartBtn');
const submitCartBtn = document.querySelector('.submitCartBtn');


viewRecipeBtn.forEach(function (button) {
    button.addEventListener('click', openModal);
})
function openModal() {
    modal.classList.add('is-active');
}

modalBG.addEventListener('click', () => modal.classList.remove('is-active'));

addCartBtn.forEach(function (button) {
    button.addEventListener('click', addToCart);
})

function addToCart() {
    // get the recipe name
    // store the recipe name in local storage for cart
}


getRandomRecipe();

