// Navbar Component
const Navbar = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-white" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-3">
              <a class="nav-link active text-warning fw-bolder" aria-current="page" href="/Final_Exam_2/pages/home.html">Home</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-warning fw-bolder" href="/Final_Exam_2/pages/add.html">Add Product</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-warning fw-bolder" aria-current="page" href="/Final_Exam_2/pages/login.html">Login</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-warning fw-bolder" href="/Final_Exam_2/pages/signin.html">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};

export default Navbar;
