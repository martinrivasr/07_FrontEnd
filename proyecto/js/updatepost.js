import { notificationController } from "../shared/notification/notifications-controller.js";
import { updatePostController } from "../controllers/listpost-controller.js";
import { renderNav } from "../views/nav-view.js";
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js";

document.addEventListener("DOMContentLoaded", async () => {
    const navbarContainer = document.querySelector(".navbar");

    try {
       
        const currentUser = await getCurrentUserInfo();
        const username = currentUser.username || "Usuario";

        
        navbarContainer.innerHTML = renderNav(username);

        const searchParameter = new URLSearchParams(window.location.search);
        const productId = searchParameter.get("id");

        if (!productId) {
            alert("No se encontró el ID del producto.");
            window.location.href = "./listPost.html"; 
            return;
        }

       
        const productsContainer = document.querySelector(".product-form-container");
        const notificationsContainer = document.querySelector("#notifications-container");
        const notificationInstance = notificationController(notificationsContainer);

        updatePostController(productsContainer, notificationInstance, productId);
    } catch (error) {
        console.error("Error al obtener el usuario o al configurar la página de actualización:", error);

        
        navbarContainer.innerHTML = renderNav();

        
        const notificationsContainer = document.querySelector("#notifications-container");
        const notificationInstance = notificationController(notificationsContainer);
        notificationInstance.handleError(error.message);
    }
});
