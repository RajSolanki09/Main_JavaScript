export const navbar=()=>{
  return`
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtons" aria-controls="navbarButtons" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
          
                <div class="collapse navbar-collapse justify-content-center" id="navbarButtons">
                  <div class="d-flex mx-auto gap-3">
                   <a href="/final exam/home.html"><button class="btn btn-primary me-2" id="home" type="button">Home</button></a> 
                   <a href="/final exam/pages/Add_ques.html"> <button class="btn btn-secondary" id="addData" type="button">Question</button></a>
                  </div>
                </div>
              </div>
            </nav>
  `
}
