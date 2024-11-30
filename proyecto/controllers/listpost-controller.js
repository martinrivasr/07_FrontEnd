import { createNewProduct, getAllProducts, getProductsByUser, removeProduct, getProduct } from "../models/post-model.js"
import { showProductDetail, showEmptyProductDetial, createPostDetail } from "../views/listpost-view.js"
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js"

/** new product functions */

export function createPostController(createProduct){
        createProduct.addEventListener("submit", (event) =>{
        event.preventDefault();
        const productElement = createProduct.querySelector("#product-name")
        const descriptionElement = createProduct.querySelector("#product-description")
        const priceElement = createProduct.querySelector("#product-price")
        const photoElement = createProduct.querySelector("#product-photo")
        const transactionElement = createProduct.querySelector("input[name='transaction']:checked");

        if (!transactionElement) {
            alert("Por favor, selecciona el tipo de transacción (Compra o Venta)");
            return;
        }
        const tagsElements = createProduct.querySelectorAll("input[name='tags']:checked");
        
        if (tagsElements.length === 0) {
            alert("Por favor, selecciona al menos un tag.");
            return;
        }

        const productName = productElement.value;
        const productDescription = descriptionElement.value;
        const price = priceElement.value;
        const picture = photoElement.value;
        const transaction = transactionElement.value;
        const tags = Array.from(tagsElements).map(tag => tag.value);

        handleProductCreation({
            productName,
            productDescription,
            price,
            picture,
            transaction,
            tags,
        });
    })

    async function handleProductCreation(newProduct) {
        try {    
            await createNewProduct(newProduct);
            window.location.href = "./listPost.html";

        } catch (error) {
            alert(error.message);
        }
    }
}


/** retrieve product functions */

function displayProducts(productsDetail, productsContainer, displayOption="detail"){

    if(!productsDetail.length){
       
        productsContainer.innerHTML = showEmptyProductDetial();
    } else {
        
        productsDetail.forEach(product => {
            
            const newProduct = showProductDetail(product, displayOption);

            productsContainer.appendChild(newProduct)
        });
   
    }
}

export async function listPostController(productsContainer, notificationInstance, showOption="detail", userId=0) {

    const spinner = document.querySelector('.spinner')
    productsContainer.innerHTML = "";
    spinner.classList.toggle('hidden');
    
    try {

        let products;
        if (userId) {
            products = await getProductsByUser(userId); 
            notificationInstance.showNotification("¡Las publicaciones del usuario se han cargado exitosamente!", "success");
            displayProducts(products, productsContainer,showOption)
            
        } else {
            products = await getAllProducts(); // Obtener todos los productos
            notificationInstance.showNotification("¡Las publicaciones se han cargado exitosamente!", "success");
            displayProducts(products, productsContainer, showOption)
        }

           
            const updateButtons = productsContainer.querySelectorAll('.update-btn');
            const deleteButtons = productsContainer.querySelectorAll('.delete-btn');
    
            updateButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.getAttribute('data-id')
                    if (productId){
                        handleUpdate(productId);
                    } else {
                        alert ("No se pudo obtener el Producto ID")
                    }
                });
            });
    
            deleteButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.getAttribute('data-id')
                    if (productId){
                        handleDelete(productId);
                    } else{
                        alert("No se pudo obtener el Product ID")
                    }
                   
                });
            });


    } catch (error) {
        notificationInstance.handleError(error);
    } finally {
        spinner.classList.toggle('hidden');
      } 
} 


/** update product functions */
function handleUpdate(productId) {

    console.log(`Actualizar producto con ID: ${productId}`);

    window.location.href = `edit-product.html?id=${productId}`;
}

/** Delete product functions */
async function handleDelete(productId) {
    try {

        const product = await getProduct(productId)
        const user = await getCurrentUserInfo()

        if (user.id === product.userId){
            const confirmDelete = confirm(`¿Estás seguro de que quieres borrar el producto con ID: ${product.productName}?`);
            if (confirmDelete) {
        
                await removeProduct(product.id);

                alert('Producto eliminado con éxito');
                
                location.reload();
            }
        } else {
            alert("La publicación no pertence al usuario actual")
        }

    } catch (error) {
        console.error('Error eliminando el producto:', error);
        alert('Hubo un problema al intentar eliminar el producto.');
    }
}

