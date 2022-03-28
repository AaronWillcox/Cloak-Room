import React from 'react'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">The Cloakroom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Order From Our Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact and Event Hire</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar