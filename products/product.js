import { clothes } from './clothes.js';
import { renderProduct } from './render-product.js';

const list = document.getElementById('listing');

for (let cloth of clothes){
    const productElement = renderProduct(cloth);

    list.append(productElement);
}