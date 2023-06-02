function populateCart() {
    // Get the cart object from local storage
    var recipeCartList = JSON.parse(localStorage.getItem('recipeCart'));
    console.log(recipeCartList);

    // write recipecartlist to cart.html
    var cartList = document.getElementById('cartList');
    for (let index = 0; index < recipeCartList.length; index++) {
        const recipe = recipeCartList[index];
        var recipeItem = document.createElement('li');
        recipeItem.textContent = recipe;
        cartList.appendChild(recipeItem);
    }
  }

const clearCartBtn = document.getElementById('clearCartBtn');

clearCartBtn.addEventListener('click', () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.log(error);
    }
});
  
  populateCart();
  