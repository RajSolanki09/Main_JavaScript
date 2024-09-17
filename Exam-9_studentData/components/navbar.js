const Navbar = () => {
  
    return `
    <nav class="navbar navbar-expand-lg navbar-light my-3" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div class="container">
       
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav mr-auto">
           <li class="nav-item mx-3">
              <a class="nav-link text-dark px-3 fw-bolder" aria-current="page" href="/Exam-9_studentData/page/homepage.html">Home</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-dark px-3 fw-bolder" href="/Exam-9_studentData/page/addstudent.html">Student Data</a>
            </li>
          </ul>
           <form class="d-flex " role="search" id="searching">
              <input
                class="form-control me-2 border border-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button class="bg-white text-dark px-3 fw-bolder border border-dark" type="submit">
                Search
              </button>
              </form>
          </ul>
        </div>
      </div>
    </nav>
    `;
  };
  

  export default Navbar;
