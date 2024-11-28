import { getProductsDetail } from "./userlistproduct-model.js"
import { showProductDetail, showEmptyProductDetial } from "./userlistproduct-view.js"

function displayProducts(productsDetail, productsContainer){

    if(!productsDetail.length){
       
        productsContainer.innerHTML = showEmptyProductDetial();
    } else {
        
        productsDetail.forEach(product => {
            
            const newProduct = showProductDetail(product, "update");

            productsContainer.appendChild(newProduct)
        });
   
    }
}

function loadEvent(message, type, element){
  
    const customEvent = new CustomEvent("loading-Products-information", {
        detail: {
            message,
            type
        }
    });

    element.dispatchEvent(customEvent);

}

export async function productsController(productsContainer) {


    productsContainer.innerHTML = "";
    try {
 
        const products = await getProductsDetail();
        loadEvent("productos Cargados Correctamente", "Sucess", productsContainer)
        displayProducts(products, productsContainer)
    } catch (error) {
        loadEvent(error.message), "error", productsContainer;
    } 
} 