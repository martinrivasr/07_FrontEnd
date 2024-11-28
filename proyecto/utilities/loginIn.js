export const checkUserAuthentication  = () => {
    const token = localStorage.getItem('jwt');
    
    // transformación a 
    return !!token;
    
  }
  