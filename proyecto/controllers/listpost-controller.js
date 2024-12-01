import { createNewProduct, getAllProducts, getProductsByUser, removeProduct, getProduct, updateProduct } from "../models/post-model.js"
import { showProductDetail, showEmptyProductDetial, updatePostDetail,  } from "../views/listpost-view.js"
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
    });

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
            products = await getAllProducts(); 
            notificationInstance.showNotification("¡Las publicaciones se han cargado exitosamente!", "success");
            displayProducts(products, productsContainer, showOption)
        }

           
            const updateButtons = productsContainer.querySelectorAll('.update-btn');
            const deleteButtons = productsContainer.querySelectorAll('.delete-btn');
            console.log(updateButtons)
            updateButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.getAttribute('data-id')
                    
                    console.log("Actualizar registro :", productId)
                    if (productId){
                        handleUpdate(productId);
                       
                    } else{
                        alert("No se pudo obtener el Product ID")
                    }
                   
                });
            });

            deleteButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.getAttribute('data-id')
                    console.log("borrar registro :", productId)
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
async function handleUpdate(productId) {
    window.location.href = `./updatePost.html?id=${productId}`;
}


export async function updatePostController(productsContainer, notificationInstance, productId) {
    try {

        if (!productId){
            alert ("El número de producto debe ser un numero válido")
            console ("El número de producto debe ser un numero válido")
        }
        const product = await getProduct(productId)
        const user = await getCurrentUserInfo()

        let products;
        if (user.id === product.userId) { 
            displayUpdateProducts(product, productsContainer)
            }
        
        const form = productsContainer.querySelector(".product-form");
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const updatedProduct = updateProductDetail(form);
            if (updatedProduct) {
                await updateProduct(productId, updatedProduct);
                alert("Producto actualizado con éxito");
                window.location.href = "./listPost.html";
            } else {
                alert("Existen campos vacíos en el formulario.");
            }
        });

    } catch (error) {
        alert(error)
        console.log(error)
            notificationInstance.handleError(error);
    } 
} 


function displayUpdateProducts(productsDetail, productsContainer){
            productsContainer.innerHTML = updatePostDetail(productsDetail);
    }
    

const updateProductDetail = (createProduct) => {
        try {
            const productElement = createProduct.querySelector("#product-name");
            const descriptionElement = createProduct.querySelector("#product-description");
            const priceElement = createProduct.querySelector("#product-price");
            const photoElement = createProduct.querySelector("#product-photo");
            const transactionElement = createProduct.querySelector("input[name='transaction']:checked");
            const tagsElements = createProduct.querySelectorAll("input[name='tags']:checked");
            
         
            const errors = [];
            if (!productElement.value) errors.push("El nombre del producto es obligatorio.");
            if (!descriptionElement.value) errors.push("La descripción del producto es obligatoria.");
            if (!priceElement.value) errors.push("El precio del producto es obligatorio.");
            if (!transactionElement) errors.push("Selecciona el tipo de transacción (Compra o Venta).");
            if (tagsElements.length === 0) errors.push("Selecciona al menos un tag.");
    
            if (errors.length > 0) {
                alert(errors.join("\n"));
                return null;
            }
    
          
            const productName = productElement.value;
            const productDescription = descriptionElement.value;
            const price = priceElement.value;
            const picture = photoElement.value || null;
            const transaction = transactionElement.value;
            const tags = Array.from(tagsElements).map(tag => tag.value);
    
            return {
                productName,
                productDescription,
                price,
                picture,
                transaction,
                tags,
            };
        } catch (error) {
            console.error("Error al obtener los datos del formulario:", error);
            return null;
        }
    };
    
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


    