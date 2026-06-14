let products = JSON.parse(localStorage.getItem("products")) || [];

// If no products in storage, load default items
if(products.length === 0){
products = [
{
name:"Smart Watch",
price:1999,
image:"watch.jpg",
type:"watch"
},
{
name:"Running Shoes",
price:2999,
image:"shoes.jpg",
type:"shoes"
},
{
name:"Casual Shirt",
price:999,
image:"shirt.jpg",
type:"shirt"
},
{
name:"Travel Bag",
price:1499,
image:"bag.jpg",
type:"bag"
}
];

// save default products to storage
localStorage.setItem("products", JSON.stringify(products));
}
