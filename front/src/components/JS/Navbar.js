import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import '../CSS/Navbar.css'


export const Navbar = () => {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(false)
    console.log("salir")
    }
  
  return (
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/home" > 
            <img src={require("../../img/LogoA.png")}alt="Logo AparClick" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div>
            {
                //administrador
                user.role === '1' ? (
                  <ul class="navbar-nav">
                    <Link to="/additem">Añadir Reservas</Link>
                    <Link to="/listparkings">Lista Parkings</Link>
                    <Link to="/myparkings">Mis Reservas</Link>
                    <Link to="/home" onClick={handleLogout}>Exit</Link>
                  </ul>
                //usuario
                ) : user.role === '2' ? (
                  <ul class="navbar-nav">
                    <Link to="/listparkings">Lista Parkings</Link>
                    <Link to="/myparkings">Mis Reservas</Link>
                    <Link to="/additem">Añadir Reservas</Link>
                    <Link to="/home" onClick={handleLogout}>Exit</Link>
                  </ul>
                ) : (
                  <ul class="navbar-nav">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </ul>
                )
              }
            </div>
          </div>
        </nav>
      </div>

  )
}

export default Navbar