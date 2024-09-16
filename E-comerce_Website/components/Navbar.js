// Navbar Component
const Navbar = () => {
  let isLogin = localStorage.getItem('isLogin') || false;
  let username = localStorage.getItem('username');

  return `
  <nav class="navbar navbar-expand-lg navbar-light my-3" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://www.zarla.com/images/zarla-shop-stock-1x1-2400x2400-20220124-xq4kmxrq9xqmxpw7dfbq.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" height="50">
      </a>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item mx-3">
            <a class="nav-link active text-danger px-3 fw-bolder" aria-current="page" href="/E-comerce_Website/index.html">Home</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/productPage.html">Product</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" aria-current="page" href="/E-comerce_Website/Pages/addProductPage.html">Add Product</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder" href="/E-comerce_Website/Pages/cartPage.html">Cart</a>
          </li>
        </ul>
        <form class="d-flex " role="search" id="searching">
              <input
                class="form-control me-2 border border-danger"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button class="bg-white text-danger px-3 fw-bolder border border-danger" type="submit">
                Search
              </button>
              </form>
              <div ></div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-3">
            <a id="auth-link" class="nav-link text-danger px-3 fw-bolder" href="#">
              ${isLogin ? "Logout" : "Login"}
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-danger px-3 fw-bolder border border-danger" href="/E-comerce_Website/Pages/signUpPage.html">
              ${isLogin ? username : "Signup"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;
};

// Render Navbar and attach the event listener
document.addEventListener("DOMContentLoaded", () => {
  
  // Handle logout functionality
  if (localStorage.getItem('isLogin')) {
    document.getElementById("auth-link").addEventListener("click", () => {
      localStorage.removeItem('isLogin');
      localStorage.removeItem('username');
      window.location.href = "/E-comerce_Website/Pages/loginPage.html";
    });
  } else {
    document.getElementById("auth-link").addEventListener("click", () => {
      window.location.href = "/E-comerce_Website/Pages/loginPage.html";
    });
  }
});

export default Navbar;
