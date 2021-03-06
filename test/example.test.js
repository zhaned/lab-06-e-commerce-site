// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../products/render-product.js';
import { calcItemTotal, findId, renderTable, calcOrderTotal } from '../cart/render-table.js';
import { cartContent } from '../cart/data-for-cart.js';
import { clothes } from '../products/clothes.js';
import { clearCart, getCart, setCart } from '../cart/cart-api.js';

const test = QUnit.test;

test('takes in a product and returns it as a list', (expect) => {
    const shirt = {
        id: 1,
        name: 'Shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
        description: 'An upper body garment meant to keep you warm!',
        category: 'shirt',
        price: 15,
    };

    const expected = `<li class="product-item"><h3 class="product-name">Shirt</h3><img class="product-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"><p class="product-description">An upper body garment meant to keep you warm!</p><p class="product-category">shirt</p><p class="product-price">$15</p><button>Add</button></li>`;

    const actual = renderProduct(shirt);

    expect.equal(actual.outerHTML, expected);
});

test('takes in cart quantity and product price to get a total', (expect) => {
    const expected = `15`;
    const actual = calcItemTotal(clothes[0], cartContent[0]);

    expect.equal(actual, expected);
});

test('finds the ID of a product', (expect) => {
    const expected = {
        id: 1,
        name: 'Shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
        description: 'An upper body garment meant to keep you warm!',
        category: 'shirt',
        price: 15,
    };
    const actual = findId(clothes, 1);

    expect.deepEqual(actual, expected);
});

test('takes in cart quantity and product price to get a total', (expect) => {
    const expected = `<tr><td>Shirt</td><td>1</td><td>$ 15</td></tr>`;
    const actual = renderTable(clothes[0], cartContent[0]);

    expect.equal(actual.outerHTML, expected);
});

test('takes in item total prices and adds them together', (expect) => {
    const total = 0;
    const itemTotal = 30;
    const expected = `30`;
    const actual = calcOrderTotal(total, itemTotal);

    expect.equal(actual, expected);
});

test('gets cart from local storage', (expect) => {
    const expected = [];
    const actual = getCart();

    expect.deepEqual(actual, expected);
});

// test('clears the content of the cart', (expect) => {

//     const expected = [];
//     const actual = clearCart();

//     expect.deepEqual(actual, expected);
// });

// test('takes cart and stores it in local storage', (expect) => {
//     const cart = [
//         {
//             id: 1,
//             amount: 1,
//         }
//     ]; 
//     const expected = `[
//         {
//             id: 1,
//             amount: 1,
//         }
//     ]`;
//     const actual = setCart(cart);

//     expect.equal(actual, expected);
// });
