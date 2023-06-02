# Project-1-Flavorscapes-Colin-Javadi-Kuhner
Northwestern University coding bootcamp project 1. Work was provided by Adam Colin, AJ Javadi, and Trevor Kuhner.

![image](https://github.com/TKuhner/Project-1-Flavorscapes-Colin-Javadi-Kuhner/assets/71107536/345ac242-9e2b-44f4-af87-6866d433c48b)


# Meal Planner Web Application

The Meal Planner Web Application is an online tool that allows users to create meal plans by pulling meals from a database and organize them on a corresponding calendar.

## Features

- Meal Search: Users can search for meals based on categories, regions, and ingredients.
- Recipe View: Users can view detailed information about a specific recipe, including its name, ingredients, and instructions.
- Add to Cart: Users can add recipes to their cart for later reference or meal plan creation.
- Calendar Integration: Users can organize their selected meals on a calendar to create a meal plan.

## Technologies Used

- HTML5: Used for structuring the web pages.
- CSS (Bulma): Used for styling the web pages.
- JavaScript: Used for interactivity and logic implementation.
- TheMealDB API
- DayJS API

## Getting Started

To run the Meal Planner Web Application, go to :

https://tkuhner.github.io/Project-1-Flavorscapes-Colin-Javadi-Kuhner/

## Usage

- Upon opening the web application, users will be presented with a navigation bar containing links to different sections of the application.
- Users can search for meals by clicking on the "Meal Builder" button which will take them to the meal-plan page.
- To find meals, click on the "Search" button and select the desired categories, regions, or ingredients.
- The search results will be displayed as recipe cards, each containing their recipe name and an image.
- Clicking on the "View Recipe" button will open a modal window displaying detailed information about the recipe, including its name, ingredients, and instructions.
- Users can add recipes to their cart by clicking the "Add to Cart" button in the recipe modal.
- To create a meal plan, users submit their cart choices, which are then saved into local storage and populated in the calendar.
- On the calendar page, users can select the corresponding meal for the corresponding day of their meal plan.

## Contributing

- Adam Colin
- AJ Javadi
- Trevor Kuhner

## License

The Meal Planner Web Application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits

- The calendar functionality in this project is based on the [VanillaCalendar](https://github.com/portexe/VanillaCalendar) library, developed by [Portexe](https://github.com/portexe). The CSS used for the calendar is directly from this repository. The overall functionality of the calendar is adjusted to support DayJS instead of calling on Javascript's native Date functionality.

