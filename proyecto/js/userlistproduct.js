import { notificationController } from "../shared/notification/notifications-controller.js";
import { listPostController } from "../controllers/listpost-controller.js";
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js"
import { renderNav } from "../views/nav-view.js"


document.addEventListener("DOMContentLoaded", async () => {

  const navbarContainer = document.querySelector(".navbar");
  navbarContainer.innerHTML = renderNav();

  setTimeout(() => {
    const closeContainer = document.querySelector("#account-menu");
    if (closeContainer) {
        homeController(closeContainer);
    } else {
        console.error("El contenedor de la sesión no se encontró.");
    }
}, 0);
  
  const productsContainer = document.querySelector("#products-container");
  const notificationsContainer = document.querySelector("#notifications-container");
  const notificationInstance = notificationController(notificationsContainer);
  
  try {    
      const currentUser = await getCurrentUserInfo(); 
      const userId = currentUser.id;
      
      listPostController(productsContainer, notificationInstance, "update", userId);
  } catch (error) {
      console.error("Error al obtener el usuario:", error.message);
      const notificationsContainer = document.querySelector("#notifications-container");
      const notificationInstance = notificationController(notificationsContainer);
      notificationInstance.handleError(error);
  }
});