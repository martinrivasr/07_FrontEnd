

export function renderNav(username = "Usuario"){


return `
 <div class="navbar-container">

            <a class="navbar-brand" href="/">
                
                MarketPop.!!!
            </a>
            <div class="pagination-controls">
                <div class="records-per-page">
                    <label for="records-per-page">Registros por página:</label>
                    <select id="records-per-page" name="limit">
                        <option value="25" >25</option>
                        <option value="50" >50</option>
                        <option value="75" >75</option>
                    </select>
                </div>
        
                <div class="sort-by">
                    <label for="sort">Ordenar por:</label>
                    <select id="sort" name="sort" onchange="updateSorting()">
                        <option value="product" >Nombre</option>
                        <option value="precio" >Precio</option>
                        <option value="createdAt" >Fecha de creación</option>
                        <option value="owner" >Usuario</option>
                        <option value="tags" >Tags</option>
                    </select>
                </div>
        
                <div class="sort-direction">
                    <label for="direction">Dirección:</label>
                    <select id="direction" name="direction" onchange="updateSorting()">
                        <option value="asc" >Ascendente</option>
                        <option value="desc" >Descendente</option>
                    </select>
                </div>
            </div>
        
            <div class="page-controls">
                <button class="page-btn" >« Anterior</button>
                <span class="page-info">Página </span>
                <button class="page-btn" >Siguiente »</button>
            </div>
        
            <div class="total-records">
                Total de registros: 99
            </div>
            
            <div class="home-icon">
                <a href="/home.html">
                    <img src="/assets/home-icon.svg" alt="Home" class="home-icon" href="/" />
                 </a>
            </div>

            <div class="account-menu" id="account-menu">
                <span class="username-label">Hola  ${username} bienvenido</span>
                    <button id="logout-button" class="logout-btn">Logout</button>
                
                <div class="dropdown">
                    <button class="dropbtn">Mi cuenta</button>
                    <div class="dropdown-content">
                        <a href="/user-data">Configuración</a>
                        <a href="/listPost.html">Mis productos</a>
                        <a href="/createPost.html">Alta de producto</a>
                        <a href="#">Salir</a>
                    </div>
                </div>
            </div>
        </div>
`
}