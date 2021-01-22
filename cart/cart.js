// import { cartContent } from './data-for-cart.js';
import { clothes } from '../products/clothes.js';
import { renderTable, calcItemTotal, findId, calcOrderTotal } from './render-table.js';
import { getCart } from '../cart/cart-api.js';

let total = 0;
const table = document.querySelector('table');
const tr = document.createElement('tr');
const td = document.createElement('td');
const cart = getCart();

for (let item of cart) {
    const clothId = findId(clothes, item.id);
    
    const itemTotal = calcItemTotal(clothId, item);

    total = calcOrderTotal(total, itemTotal);
    const tableRowDOM = renderTable(clothId, item);

    table.append(tableRowDOM);
}

td.textContent = `Total Price: $ ${total}`;
tr.append(td);

table.append(tr);