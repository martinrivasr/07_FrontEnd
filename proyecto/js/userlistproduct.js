import { notificationController } from "../shared/notification/notifications-controller.js";
import { listPostController } from "../controllers/listpost-controller.js";
import { getCurrentUserInfo } from "../shared/utilities/auth-model.js";
import { renderNav } from "../views/nav-view.js";
import { homeController } from "../controllers/home-controller.js";

document.addEventListener("DOMContentLoaded", async () => {
    const navbarContainer = document.querySelector(".navbar");

    try {
        // Obtén el usuario actual
        const currentUser = await getCurrentUserInfo();
        const username = currentUser.username || "Usuario";

        // Renderiza la barra de navegación con el nombre del usuario
        navbarContainer.innerHTML = renderNav(username);

        // Configuración del home controller
        setTimeout(() => {
            const closeContainer = document.querySelector("#account-menu");
            if (closeContainer) {
                homeController(closeContainer);
            } else {
                console.error("El contenedor de la sesión no se encontró.");
            }
        }, 0);

        // Configura el controlador de publicaciones
        const productsContainer = document.querySelector("#products-container");
        const notificationsContainer = document.querySelector("#notifications-container");
        const notificationInstance = notificationController(notificationsContainer);

        const userId = currentUser.id;
        listPostController(productsContainer, notificationInstance, "update", userId);
    } catch (error) {
        console.error("Error al obtener el usuario o al configurar la página:", error);

        // Renderiza el nav-bar con un valor predeterminado en caso de error
        navbarContainer.innerHTML = renderNav();

        // Manejo de errores mediante notificaciones
        const notificationsContainer = document.querySelector("#notifications-container");
        const notificationInstance = notificationController(notificationsContainer);
        notificationInstance.handleError(error.message);
    }
});
