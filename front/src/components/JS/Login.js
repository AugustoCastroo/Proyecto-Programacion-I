import { Form, Formik, Field } from 'formik'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import { navigate } from '@reach/router'


export const Login = () => {
  
  const initialValues= {
    email: '',
    password: ''
  } 

  const handleLogin = async(values) => {
    console.log('values', values)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Inicio de sesion correcto',
      //   showConfirmButton: false,
      //   timer: 1800
      // })
      // navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='login-form'>
      <h2 className='subtitle'>Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
            <Field 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              name="email"
              />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <Field 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password"
              />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
          {/* <label htmlFor="exampleInputEmail1" className="form-label">¿No estás Logueado? ¡Registrate Aquí!</label> */}
          {/* <Link to="/register">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Register</button>
          </Link> */}
        </Form>
      </Formik>
    </div>
  );
}

export default Login;