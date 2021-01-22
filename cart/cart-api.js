import { findId } from '../cart/render-table.js';

const CART = 'CART';
const emptyCart = [];

export function getCart(){
    const stringCart = localStorage.getItem(CART);

    if (stringCart){
        const parseCart = JSON.parse(stringCart);
        return parseCart;
    } else {
        const stringEmptyCart = JSON.stringify(emptyCart);
        localStorage.setItem(CART, stringEmptyCart);
        return emptyCart;
    }
}

export function addToCart(id){
    const cart = getCart();
    const productId = findId(cart, id);
    if (productId) {
        productId.amount++;
    } else {
        const newItem = {
            id: id,
            amount: 1,
        };
        cart.push(newItem);
    }
    setCart(cart);
}

export function clearCart(){
    const stringClearCart = JSON.stringify(emptyCart);
    localStorage.setItem(CART, stringClearCart);
}

export function setCart(cart){
    const stringCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringCart);
}