import { createPostController } from "../controllers/listpost-controller.js";
import { renderNav } from "../views/nav-view.js";
import { homeController } from "../controllers/home-controller.js";
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js"; 

document.addEventListener("DOMContentLoaded", async () => {
    const navbarContainer = document.querySelector(".navbar");

    try {
        
        const currentUser = await getCurrentUserInfo(); 
        const username = currentUser.username || "Usuario"; 
        
      
        navbarContainer.innerHTML = renderNav(username);

        
        const closeContainer = document.querySelector("#account-menu");
        if (closeContainer) {
            homeController(closeContainer);
        } else {
            console.error("El contenedor de la sesión no se encontró.");
        }

    
        const createPostContainer = document.querySelector(".product-form-container");
        createPostController(createPostContainer);
    } catch (error) {
        console.error("Error al cargar el usuario o renderizar la página:", error);
        navbarContainer.innerHTML = renderNav(); 
    }
});
