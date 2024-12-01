

import { notificationController } from "../shared/notification/notifications-controller.js";
import { updatePostController } from "../controllers/listpost-controller.js";
import { renderNav } from "../views/nav-view.js"


document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector(".navbar");
    navbarContainer.innerHTML = renderNav();

    const searchParameter = new  URLSearchParams(window.location.search)
    const productId = searchParameter.get("id")
    
    if (!productId) {
        alert("No se encontró el ID del producto.");
        window.location.href = "./listPost.html"; 
    }

    const productsContainer = document.querySelector(".product-form-container");
    const notificationsContainer = document.querySelector("#notifications-container");

    const notificationInstance = notificationController(notificationsContainer);
    
    updatePostController(productsContainer, notificationInstance, productId)
  
  })

