let cart = 0;

function addToCart()
{
    cart++;
    document.getElementById("cart-count").innerText = cart;
    alert("Product Added To Cart 🛒");
}

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let name = card.dataset.name.toLowerCase();

        if(name.includes(value))
        {
            card.style.display = "block";
        }
        else
        {
            card.style.display = "none";
        }

    });

});