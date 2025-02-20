import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/home">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to="/student_table">student table</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/student_card">student card</Link>
        </li>
      </ul>   
    </div>
  </div>
</nav>
            {/* <Link to='/'>Faculty</Link>
            <Link to='/product'>Product</Link> */}

        </>
    )
}
export default Navbar