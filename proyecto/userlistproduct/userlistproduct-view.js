export const showProductDetail = (productDetail, optionDetail="detail") => {

    const newProductDetail = document.createElement('div');
    newProductDetail.classList.add('product');

    const creationDate = new Date(productDetail.updatedAt);

    const tagsHTML = productDetail.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    

    const ownerName = productDetail.user?.username || "Usuario desconocido";


    const productLink = document.createElement('a');
    productLink.setAttribute("href", `./product-detail.html?id=${productDetail.id}`);
    productLink.style.textDecoration = "none";

    productLink.innerHTML = `
        <img src="/Public/imagen.jpg" alt="Foto del producto" class="product-image">
        <div class="product-details">
            <h4 class="product-name">Producto: ${productDetail.productName}</h4>
            <h5 class="product-postdate">Fecha de publicación: ${creationDate.toLocaleDateString()}</h5>
            <p class="product-owner">Propietario: ${ownerName}</p>
            <p class="product-description">Descripción: ${productDetail.productDescription}</p>
            <p class="product-price">Precio: ${productDetail.price}</p>
            <p class="product-transaction">Transacción: ${productDetail.transaction}</p>
            <div class="product-tags">
                ${tagsHTML}
            </div>
        </div>
    `;
    alert("llego a la opcion de detail")
   if (optionDetail === "detail"){
        const buttonText = productDetail.transaction === "Venta" ? "Comprar" : "Vender";
        const productActions = document.createElement('div');
        productActions.classList.add('product-actions');
        const actionButton = document.createElement('button');
        actionButton.classList.add('transaction-btn');
        actionButton.textContent = buttonText;
        productActions.appendChild(actionButton);   
        newProductDetail.appendChild(productLink);
        newProductDetail.appendChild(productActions);
   } else {
        
        const productActions = document.createElement('div');
        productActions.classList.add('product-actions');
        
        const updateButtonText = "Actualizar"
        const updateButton = document.createElement('button');
        updateButton.classList.add('update-btn');
        updateButton.textContent = updateButtonText;
        productActions.appendChild(updateButton);
        
        const deleteButtonText = "Borrar"
        const deteleButton = document.createElement('button');
        deteleButton.classList.add('update-btn');
        deteleButton.textContent = deleteButtonText;
        productActions.appendChild(deteleButton);

        newProductDetail.appendChild(productLink);
        newProductDetail.appendChild(productActions);
   }


    return newProductDetail;
};

export function showEmptyProductDetial () {
    return '<h2>No hay productos disponibles</h2>';
}

/*
export const showProductDetail = (productDetail) => {


    const newProductDetail = document.createElement('div');
    newProductDetail.classList.add('product');

    const creationDate = new Date(productDetail.updatedAt);

    const tagsHTML = productDetail.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    const buttonText = productDetail.transaction === "Venta" ? "Comprar" : "Vender";

    const ownerName = productDetail.user?.username || "Usuario desconocido";


    newProductDetail.innerHTML = `
        <img src="/Public/imagen.jpg" alt="Foto del producto" class="product-image">
        <div class="product-details">
            <h4 class="product-name">Producto: ${productDetail.productName}</h4>
            <h5 class="product-postdate">Fecha de publicación: ${creationDate.toLocaleDateString()}</h5>
            <p class="product-owner">Propietario: ${ownerName}</p>
            <p class="product-description">Descripción: ${productDetail.productDescription}</p>
            <p class="product-price">Precio: ${productDetail.price}</p>
             <p class="product-transaction">Transacción: ${productDetail.transaction}</p>
            <div class="product-tags">
                ${tagsHTML}
            </div>
            <div class="product-actions">
                <button class="buy-btn">${buttonText}</button>
            </div>
        </div>
    `;
    return newProductDetail;
};


*/

/*
export const showProductDetail = (productDetail) => {

    const newProductDetail = document.createElement('a');
    newProductDetail.setAttribute("href", `./product-detail.html?id=${productDetail.id}`);
    
    const creationDate  = new Date (productDetail.updatedAt)

    const tagsHTML = productDetail.tags
        .map(tag =>  `<span class="tag">${tag}</span>`)
        .join('');

    newProductDetail.innerHTML = `
        <img src="/Public/imagen.jpg" alt="Foto del producto" class="product-image">
        <div class="product-details">
            <div class="product">
                <h4 class="product-name">Producto : ${productDetail.productName} </h4>
                <h5 class="product-postdate">Fecha de publicacion ${creationDate.toLocaleDateString()} </h5>
                <p class="product-description">Precio: ${productDetail.productDescription}</p>
                <p class="product-price">Precio: ${productDetail.price}</p>
                <p class="product-owner">Propietario: </p>
                <p class="product-transaction">Transaccion: ${productDetail.transaction}</p>
            
                <div class="product-tags">
                    ${tagsHTML}
                </div>
                <div class="product-actions">
                    <button class="buy-btn">Comprar</button>
                </div>
             </div>
        </div>
    `;
    return newProductDetail
}

*/

