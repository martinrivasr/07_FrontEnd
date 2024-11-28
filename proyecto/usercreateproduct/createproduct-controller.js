import { createNewProduct } from "./createproduct-model.js"

export function createProductController(createProduct){
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
            window.location.href = "./userlistproduct.html";

        } catch (error) {
            alert(error.message);
        }
    }
}


