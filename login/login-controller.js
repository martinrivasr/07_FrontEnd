export function loginController(loginForm) {
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
    
      const userEmailElement = loginForm.querySelector("#email");
      const passwordElement = loginForm.querySelector("#password");
      
      const userEmail = userEmailElement.value;
      const password = passwordElement.value;
      
  
      // 2- validar el mail
      const emailRegExp = new RegExp(REGEXP.mail);
      if (!emailRegExp.test(userEmail)) {
        alert('formato de mail incorrecto')
      } else {
        handleLoginUser(userEmail, password)
      }
  
    })
  }
  