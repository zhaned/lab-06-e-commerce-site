export function renderTable(clothes, cartContent){
    const amount = cartContent.amount;

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = clothes.name;
    amountTd.textContent = amount;
    priceTd.textContent = `$ ${priceTotal(clothes, cartContent)}`;

    tr.append(nameTd, amountTd, priceTd);
    return tr;
}

export function priceTotal(clothes, cartContent){
    const results = cartContent.amount * clothes.price;
    return results;
}

export function findId(array, id){
    for (let i = 0; i < array.length; i++){
        if (array[i].id === id){
            return array[i];
        }
    }
}