import { createNewProduct } from "./createproduct-model.js "
import { getCurrentUserInfo  } from "../auth/auth-model.js"

export function createProductController(createProduct){
    createProduct.addEventListener("submit", (event) =>{
        event.preventDefault();
        const productElement = createProduct.querySelector("#product-name")
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
        const priceName = priceElement.value;
        const photoName = photoElement.value;
        const transactionName = transactionElement.value;
        const tagsName = Array.from(tagsElements).map(tag => tag.value);

        handleProductCreation({
            productName,
            priceName,
            photoName,
            transactionName,
            tagsName,
        });
    })

    async function handleProductCreation(newProduct) {
        try {    
            
            await createNewProduct(newProduct);
            window.location.href = "/";
        } catch (error) {
            alert(error.message);
        }
    }
}


