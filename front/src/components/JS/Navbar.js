import React from 'react'
//import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        {/* <nav className="navbar">
            {/* <Link to="/header">Inicio</Link>
            <Link to="/service">Servicio</Link>
            <Link to="/price">Precios</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> */}
            {/* <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <Link to="/header">Inicio</Link>
                <Link to="/service">Servicio</Link>
                <Link to="/price">Precios</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link> */}
                {/* <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              {/* </ul> */}
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/home">AparClick</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div>
                    <ul class="navbar-nav">
                      <Link to="/price">Precios</Link>
                      <Link to="/contact">Contacto</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/register">Register</Link>
                    </ul>
                  </div>
                </div>
              </nav>
          </div>

  )
}

{/* export default Navbar

// import React from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => { */}
{/* //   return (
//     <div>
//         <nav className="navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
//             <a className="navbar-braknd" href="/#" > <img src={require(`../imagenes/um.png`) }  alt="" width="70px" height="70px" /></a> 
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
            
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/home">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" exact='true' to="/login">Login</Link>
//                 </li>
//             </ul>
//         </div>
//         </nav>
//     </div>
//   )
// } */}