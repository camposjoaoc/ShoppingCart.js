// Step 1: Turn this into an enum)
// const Categories = {
//     ELECTRONICS: 'Electronics',
//     GROCERIES: 'Groceries',
//     CLOTHING: 'Clothing'
// };

enum Categories {
    ELETRONICS = "Eletronics",
    GROCERIES = "Groceries",
    CLOTHING = "Clothing"
}
// Step 2: Create a list of products (using plain objects)
// const products = [
//     { id: 1, name: 'Laptop', price: 999.99, category: Categories.ELECTRONICS },
//     { id: 2, name: 'T-Shirt', price: 19.99, category: Categories.CLOTHING },
//     { id: 3, name: 'Bananas', price: 1.99, category: Categories.GROCERIES }
// ];
interface Product {
    id: number;
    name: string;
    price: number;
    category: Categories;
}

const productsList: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, category: Categories.ELETRONICS },
    { id: 2, name: 'T-Shirt', price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: 'Bananas', price: 1.99, category: Categories.GROCERIES },
]

// Step 3: Create a shopping cart (initially empty)
// let shoppingCart = [];
let shoppingCart: Product[] = [];

// Step 4: Function to add a product to the cart (using arrow function)
function addToCart(productItem: Product): void {
    if (productItem !== undefined) {
        shoppingCart.push(productItem);
        console.log(`${productItem.name} has been added to your cart.`);
    } else {
        console.log("Attention: Product cannot be added to the card!");
    }
}

// Step 5: Function to calculate the total price of the cart (using arrow function)
// const calculateTotal = (cart) => {
//     let total = 0;
//     cart.forEach((item) => total += item.price);
//     return total.toFixed(2);
// };

function calculateTotal(cart: Product[]) {
    let total = 0;
    cart.forEach((item) => { total += item.price; });
    return total.toFixed(2);
}

// Step 6: Function to display the cart contents (using arrow function)
// const displayCart = (cart) => {
//     if (cart.length === 0) {
//         console.log('Your cart is empty.');
//         return;
//     }

//     console.log('Your cart contains:');
//     cart.forEach((item) => {
//         console.log(`- ${item.name} (${item.category}): $${item.price}`);
//     });
//     console.log(`Total: $${calculateTotal(cart)}`);
// };
function displayCart(cart: Product[]) {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    } else {

        console.log('Your cart contains:');
        cart.forEach((item) => {
            console.log(`- ${item.name} (${item.category}): $${item.price}`);
        });
        console.log(`Total: $${calculateTotal(cart)}`);
    }
}

// Step 7: Simulate adding products to the cart and displaying it
// addToCart(products[0]); // Adding Laptop
// addToCart(products[2]); // Adding Bananas
// displayCart(shoppingCart);

addToCart(productsList[0]); // Adding Laptop
addToCart(productsList[2]); // Adding Bananas
addToCart(productsList[9]); // Adding X
displayCart(shoppingCart); // Display