//test 
console.log("test");
var addRecipeCartButtons = document.getElementsByClassName('addRecipeCart');
console.log(addRecipeCartButtons);
var recipeName = document.getElementsByClassName('title');
console.log(recipeName);

// function addToCart() {

//     //if button is clicked, then append to the table


//     // else - do nothing 




// }
//chatGPT solution for add to cart:

// Get the shopping cart container element
var cartContainer = document.getElementById('cart-container');

// Get the "Add to Cart" button element
var addToCartButton = document.querySelector('.addRecipeCart');
var recipeCartList = JSON.parse(localStorage.getItem('recipeCartList'))|| [];
// Add a click event listener to the button
addToCartButton.addEventListener('click', function(event) {
    // Create a new cart item element
    console.log(event.target.dataset.name)

recipeCartList.push(event.target.dataset.name)
localStorage.setItem("recipeCartList",JSON.stringify(recipeCartList));



    // var cartItem = document.createElement('div');
    // cartItem.classList.add('cart-item');

//  // Set the innerHTML of the cart item element using the template
//  cartItem.innerHTML = `
//  <h4 class="item-name">Product Name</h4>
//  <p class="item-price">$10.99</p>
// `;

// Append the cart item element to the shopping cart container
// cartContainer.appendChild(cartItem);
});









//function to add recipe to cart 
function addRecipeToCart () {
//select the 'Add to Cart buttons'
    var addRecipeCartButtons = document.getElementsByClassName('addRecipeCart');
    console.log(addRecipeCartButtons);
 

//loop through all addRecipe cart buttons
    for (i=0; i < addRecipeCartButtons.length; i++) {

    var button = addRecipeCartButtons[i] 
    button.addEventListener('click', event) ; { 
        var buttonClicked = event.target
        console.log('clicked') //check
        var table = document.getElementsByClassName("cart-items")
        var recipeName =document.getElementsByClassName("title");
        table = document.getElementsByClassName("cart-table");
        table.child.append(recipeName); // add the recipename to the bottom of the cart table
        table.child.append("some text")
    }


    return table;

    
}



};
//class = cart-quantity-inout
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (var i=0;i <quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged ) // calls the function quantityChanged anytime the input quantity changes 

}


//remove cart item function
function removeCartItem (event) {
    var removeItembtns = document.getElementsByClassName('removeItem');
   // removeItembtns.parentElement.remove(); // removes the parent element 
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal ()


}



function updateCartTotal () {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    for (var i =0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input'); //get the quantity element from the cart
        var quantity = quantityElement.value 
        console.log(quantityElement);

        return quantity;
    }
}

// this function will prevent the quantity from going below 0 or prevent the user from inputting not a number
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }


}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var inCart = false;
    var mealTitle = document.getElementsByClassName('title');
    console.log(shopItem)
    
        

}


/* TO DO:

- remove item removes item
- meal name populates 
- quantity populates 
- thumbnail populates
- clear cart button removes all items

*/
