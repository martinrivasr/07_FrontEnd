import { notificationController } from "../shared/notification/notifications-controller.js";
import { homeController } from "../controllers/home-controller.js";
import { listPostController } from "../controllers/listpost-controller.js";
import { renderNav } from "../views/nav-view.js";
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js"; // Importa la función para obtener el usuario actual

document.addEventListener("DOMContentLoaded", async () => {
    const navbarContainer = document.querySelector(".navbar");
    const productsContainer = document.querySelector("#products-container");
    const notificationsContainer = document.querySelector("#notifications-container");

    const notificationInstance = notificationController(notificationsContainer);

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

        
        listPostController(productsContainer, notificationInstance, "detail");
    } catch (error) {
        console.error("Error al cargar el usuario o renderizar la página:", error);
        navbarContainer.innerHTML = renderNav(); 
    }
});