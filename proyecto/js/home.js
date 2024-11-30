import { notificationController } from "../shared/notification/notifications-controller.js";
import { homeController } from "../controllers/home-controller.js";
import { listPostController } from "../controllers/listpost-controller.js";


document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.querySelector("#products-container");
    const notificationsContainer = document.querySelector("#notifications-container");
    const closeContainer = document.querySelector("#account-menu");

    const notificationInstance = notificationController(notificationsContainer);
    
    homeController(closeContainer)
    listPostController(productsContainer, notificationInstance, "detail")
  
  })

