let products = [];

let add = name => products.push(name);
let remove = name => products.splice(products.indexOf(name), 1);
let show = () => {
    let productsBlock = document.querySelector(".products");
    let productsHtml = '';

    for (const product of products) {
        productsHtml += `<div class="product">${product}</div>`;
    }

    productsBlock.innerHTML = productsHtml;
}


function getProduct() {
    let productEntry =  document.querySelector("#product-name");
    let name = productEntry.value;
    productEntry.value = '';
    return name;
}

function validateProduct(product) {
    if (product === "") {
        return false;
    }

    return true;
}

function showMessage(message) {
    let messageBox =  document.querySelector("#message");
    messageBox.innerText = message;
}

let process = processor => {
    return () => {
        let product = getProduct();
        if (validateProduct(product)) {
            processor(product);
            showMessage("Виконано успішно");
        } else {
            showMessage("Ви нічого не ввели");
        }
    }
}

document.querySelector("#btn-add").onclick = process(add);

document.querySelector("#btn-del").onclick = process(remove);

document.querySelector("#btn-show").onclick = show;