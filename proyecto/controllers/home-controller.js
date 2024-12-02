import { checkUserAuthentication } from "../shared/utilities/loginIn.js";
import { buildAuthorizedSession, buildUnauthorizedSession } from "../views/session-view.js";


export function homeController(sessionContainer) {
    if (checkUserAuthentication()) {
      const closeSessionButton = sessionContainer.querySelector(".logout-btn")
      console.log(closeSessionButton)
      closeSessionButton.addEventListener("click", () => {
        localStorage.removeItem("jwt")
        homeController(sessionContainer)
      })
    } else {
      buildUnauthorizedSession()
    }
  }