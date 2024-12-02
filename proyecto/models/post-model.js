
import { BASE_URL } from "../shared/utilities/constants.js"

export async function createNewProduct(newProduct) {
  const token = localStorage.getItem('jwt');

  try {
      const response = await fetch(`${ BASE_URL }/api/tweets`, {
          method: "POST",
          body: JSON.stringify(newProduct), 
          headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${token}`,
          },
      });

      if (!response.ok) {
          const errorData = await response.json(); 
          throw new Error(errorData.message || "Error creando producto"); 
      }

      return await response.json(); 

  } catch (error) {
      console.error("Error creando producto:", error.message); 
      throw error; 
  }
}


export async function getAllProducts() {
    try {

        const response = await fetch(`${ BASE_URL }/api/tweets?_expand=user`);  
        
        if(!response.ok) {
            throw new Error ("No se pudieron obtener la lista de los productos");
        }
        
        const data = await response.json()
        if(!data.length) throw new Error ("No existen publicaciones")
    
        return data;

    } catch (error) {
        throw error; 
    }

}

export async function getProductsByUser( userId) {

    try {

        if(!userId || typeof userId !== "number"){
            throw new Error("El Usuario debe ser un numero válido")
        };

        const allProducts = await getAllProducts();
        
        const filteredProducts = allProducts.filter(product => product.userId === userId);
       
        if(!filteredProducts.length) {
            throw new Error ("No existen publicaciones del usuario actual");
        }
            
        return filteredProducts;

    } catch (error) {
        throw error;
    }
}


export async function removeProduct(productId) {
    const token = localStorage.getItem('jwt');
  
    try {
      const response = await fetch(`${ BASE_URL }/api/tweets/${productId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error("Recurso no existente");
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  export async function getProductbyID(productId) {
  
    try {
      const response = await fetch(`${ BASE_URL }/api/tweets/${productId}?_expand=user`);
      console.log(`${ BASE_URL }/api/tweets/${productId}?_expand=user`)
      const product = await response.json();
      
      if (!response.ok) {
        throw new Error("Recurso no existente");
      }
      return product;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  export async function updateProduct(productId, updateproduct) {
    const token = localStorage.getItem('jwt');
  
    try {
      const response = await fetch(`${ BASE_URL }/api/tweets/${productId}`, {
        method: "PUT",
        body: JSON.stringify(updateproduct), 
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Error desconocido al actualizar.");
    }
    
    } catch (error) {
      throw new Error(error.message)
    }
  }