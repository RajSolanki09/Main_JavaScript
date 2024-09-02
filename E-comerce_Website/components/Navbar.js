const Navbar = () => {
  return   `
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container w-50 ps-5 d-flex">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/Pages/productPage.html">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/Pages/addProductPage.html"
                >Add Product</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/Pages/cartPage.html">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/Pages/loginPage.html">Log in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/E-comerce_Website/Pages/signUpPage.html">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
}
export default Navbar