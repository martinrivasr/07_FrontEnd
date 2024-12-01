
import { createPostController } from "../controllers/listpost-controller.js"
import { renderNav } from "../views/nav-view.js"
import { homeController } from "../controllers/home-controller.js";

document.addEventListener("DOMContentLoaded", () =>{

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

    const createPostContainer = document.querySelector(".product-form-container");
    
    createPostController(createPostContainer);
})