export function renderProduct(product){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const category = document.createElement('p');
    const price = document.createElement('p');

    li.classList.add('product-item');

    h3.classList.add('product-name');
    h3.textContent = product.name;
    li.append(h3);  

    image.classList.add('product-image');
    image.src = `${product.image}`;
    li.append(image);

    description.classList.add('product-description');
    description.textContent = product.description;
    li.append(description);

    category.classList.add('product-category');
    category.textContent = product.category;
    li.append(category);

    price.classList.add('product-price');
    price.textContent = `$${product.price}`;
    li.append(price);

    const button = document.createElement('button');
    button.textContent = 'Add';
    li.append(button);

    return li;
}