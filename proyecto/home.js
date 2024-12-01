import { notificationController } from "../shared/notification/notifications-controller.js";
import { homeController } from "../controllers/home-controller.js";
import { listPostController } from "../controllers/listpost-controller.js";

import { renderNav } from "../views/nav-view.js"

document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector(".navbar");
    navbarContainer.innerHTML = renderNav();
    const productsContainer = document.querySelector("#products-container");
    const notificationsContainer = document.querySelector("#notifications-container");
 

    const notificationInstance = notificationController(notificationsContainer);

    setTimeout(() => {
      const closeContainer = document.querySelector("#account-menu");
      if (closeContainer) {
          homeController(closeContainer);
      } else {
          console.error("El contenedor de la sesión no se encontró.");
      }
  }, 0);

    listPostController(productsContainer, notificationInstance, "detail")
  
  })

