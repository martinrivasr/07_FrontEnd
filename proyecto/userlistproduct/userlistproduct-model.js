export async function getProductsDetail(){

    try {
        const response = await fetch("http://localhost:8000/api/tweets?_expand=user");
        const productsDetail = await response.json();

       
        if (!response.ok){
            throw new Error("No existe el recurso solicitado");
        }

        return productsDetail

    } catch (error) {

        throw new Error(error.message)
    }
}