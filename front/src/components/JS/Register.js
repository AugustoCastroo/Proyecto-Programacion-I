import { Form, Formik, Field } from 'formik';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { navigate } from '@reach/router';

export function Register() {

  const initialValues= {
    name: '',
    email: '',
    password: ''
  } 

  const handleRegister = async(values) => {
    console.log('values', values)
    try {
      const response = await axios.post('http://localhost:5000/auth/register', values)
      console.log(response.data)
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Registro exitoso',
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
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegister}
        >
          <Form>
          <div className='form-group'>
            <label htmlFor='name' className='form-label'>Name</label>
            <Field
              type='text'
              className='form-control'
              id='exampleInputname1'
              name='name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
            <Field 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <Field 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleRegister}>Register</button>
          {/* <label htmlFor="exampleInputEmail1" className="form-label">¡Si Ya Estás Registrado Loguate Aquí!</label> */}
          {/* <Link to="/login">
            <button type="submit" className="btn btn-success" onClick={handleRegister}>Login</button>
          </Link> */}
        </Form>
      </Formik>
    </div>
  )
}

export default Register;