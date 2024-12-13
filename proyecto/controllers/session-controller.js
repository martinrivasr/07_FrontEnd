import { checkUserAuthentication } from "../shared/utilities/loginIn.js";
import { buildAuthorizedSession, buildUnauthorizedSession } from "../views/session-view.js";

export function sessionController(sessionContainer) {

  if (checkUserAuthentication()) {
    buildAuthorizedSession();
    const closeSessionButton = sessionContainer.querySelector("button")
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem("jwt")
     sessionController(sessionContainer)
    })
  } else {
     buildUnauthorizedSession()
  }
}