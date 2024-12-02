export const showProductDetail = (productDetail, showOption="detail", currentUserId = 0) => {

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
        <img src="/assets/imagen.jpg" alt="Foto del producto" class="product-image">
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

    const productActions = document.createElement("div");
    productActions.classList.add("product-actions");

    // Botón Comprar/Vender
    if (showOption === "detail") {
        const buttonText = productDetail.transaction === "Venta" ? "Comprar" : "Vender";
        const actionButton = document.createElement("button");
        actionButton.classList.add("transaction-btn");
        actionButton.textContent = buttonText;

        productActions.appendChild(actionButton);
    }

  
    if (currentUserId && productDetail.userId === currentUserId) {
        const updateButton = document.createElement("button");
        updateButton.classList.add("update-btn");
        updateButton.textContent = "Modificar";
        updateButton.setAttribute("data-id", productDetail.id);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Borrar";
        deleteButton.setAttribute("data-id", productDetail.id);

        productActions.appendChild(updateButton);
        productActions.appendChild(deleteButton);
    }

    newProductDetail.appendChild(productLink);
    newProductDetail.appendChild(productActions);

    return newProductDetail;
};


export function showEmptyProductDetial () {
    return '<h2>No hay productos disponibles</h2>';
}

export const updatePostDetail = (productDetail) => {
    return `
        <div class="product-detail">
            <h2>Modificar un Producto</h2>
            <form class="product-form">
                <!-- Product Name -->
                <label for="product-name">Nombre del producto:</label>
                <input type="text" id="product-name" name="product" placeholder="Nombre del producto" value= "${productDetail.productName}" required>
    
                <label for="product-description">Descripcion:</label>
                <input type="text" id="product-description" name="product" placeholder="Descripción del producto" value="${productDetail.productDescription}" required>
    
                <!-- Price -->
                <label for="product-price">Precio:</label>
                <input type="number" id="product-price" name="precio" placeholder="Precio en USD" min="0" value= ${productDetail.price} required>
    
                <!-- Product Photo -->
                <label for="product-photo">Foto del producto:</label>
                <input type="file" id="product-photo" name="picture" accept="image/*" required>
    
                <!-- Product transation -->
                
                <div class="transation">
                    <label>
                        <input type="radio" name="transaction" value="Compra" ${productDetail.transaction === 'Compra' ? 'checked' : ''}> Compra
                    </label>
                    <label>
                        <input type="radio" name="transaction" value="Venta" ${productDetail.transaction === 'Venta' ? 'checked' : ''}> Venta
                    </label>
                </div>

                <!-- Product Tags -->
                <label for="product-tags">Tags del producto:</label>
                <div class="tag-options">
                    <label>
                        <input type="checkbox" name="tags" value="work" ${productDetail.tags.includes('work') ? 'checked' : ''}> Work
                    </label>
                    <label>
                        <input type="checkbox" name="tags" value="lifestyle" ${productDetail.tags.includes('lifestyle') ? 'checked' : ''}> Lifestyle
                    </label>
                    <label>
                        <input type="checkbox" name="tags" value="motor" ${productDetail.tags.includes('motor') ? 'checked' : ''}> Motor
                    </label>
                    <label>
                        <input type="checkbox" name="tags" value="mobile" ${productDetail.tags.includes('mobile') ? 'checked' : ''}> Mobile
                    </label>
                </div>
        
                <!-- Submit Button -->
                <button type="submit" class="submit-btn">Modificar Producto</button>
                <button type="button" class="cancel-btn">Cancelar</button>
            </form>
        </div>
    `;
};
