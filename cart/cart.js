import { cartContent } from './data-for-cart.js';
import { clothes } from '../products/clothes.js';
import { renderTable, priceTotal, findId } from './render-table.js';

let total = 0;
const table = document.querySelector('table');
const tr = document.createElement('tr');
const td = document.createElement('td');

for (let item of cartContent) {
    const clothId = findId(clothes, item.id);
    
    const itemTotal = priceTotal(clothId, item);

    total = total + itemTotal;
    const tableRowDOM = renderTable(clothId, item);

    table.append(tableRowDOM);
}

td.textContent = `Total Price: $ ${total}`;
tr.append(td);

table.append(tr);