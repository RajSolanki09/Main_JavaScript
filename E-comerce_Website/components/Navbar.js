const Navbar = () => {
  let isLogin = localStorage.getItem('isLogin') || false
  let username = localStorage.getItem('username')
  return `    
  <nav class="navbar navbar-expand-lg navbar-light bg-dark my-3">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://1000logos.net/wp-content/uploads/2021/02/Shopee-logo.png" alt="Logo" height="50">
      </a>      
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item mx-3">
            <a class="nav-link active text-danger px-3 fw-bolder" aria-current="page" href="/E-comerce_Website/index.html">Home</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/productPage.html">Product</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link active text-danger px-3 fw-bolder" aria-current="page" href="/E-comerce_Website/Pages/addProductPage.html">Add Product</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/cartPage.html">Cart</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/loginPage.html"> ${isLogin ? "Logout" : "Login"}</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/signUpPage.html">${isLogin ? username : "signup"}</a>
          </li>         
        </ul>    
         <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>            
      </div>
    </div>
  </nav>
  `
}
export default Navbar