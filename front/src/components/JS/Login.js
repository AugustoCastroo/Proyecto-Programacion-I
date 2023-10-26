import { Form, Formik, Field } from 'formik';
import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

export const Login = () => {
  
  const initialValues= {
    email: '',
    password: ''
  } 

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleLogin = async(values) => {
    console.log('values', values)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
      const { role } = response.data
      console.log("role", role)
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'success',
      //     title: 'Inicio de sesion correcto',
      //     showConfirmButton: false,
      //     timer: 1800
      // })
      setUser({
        logged:true,
        role: role
      })
      navigate('/home')
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
        </Form>
      </Formik>
    </div>
  );
}

export default Login;