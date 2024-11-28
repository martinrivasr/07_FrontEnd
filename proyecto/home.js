import { notificationController } from "./notification/notifications-controller.js";
import { homeController } from "./home/home-controller.js";
import { productsController } from "./userlistproduct/userlistproduct-controller.js";






document.addEventListener("DOMContentLoaded", () => {
   const productsContainer = document.querySelector("#products-container");
    const notificationsContainer = document.querySelector("#notifications-container");
    const closeContainer = document.querySelector("#account-menu");
    
    homeController(closeContainer)
    productsController(productsContainer)
    const { showNotification } = notificationController(notificationsContainer)
  
  productsContainer.addEventListener("loading-tweets-info", (event) => {
      showNotification(event.detail.message, event.detail.type);
    })
  })

