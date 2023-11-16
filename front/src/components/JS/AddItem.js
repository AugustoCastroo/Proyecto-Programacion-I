import axios from 'axios';
import { Field, Form, Formik } from 'formik'
// import { useState } from 'react';
import Swal from 'sweetalert2'



export const AddItem = () => {


    const initialValues = {
        name: '',
        price: '',
        disponibility: '',
    }

    const handleSubmit = async (values) => {
        try {
        const response = await axios.post('http://localhost:5000/parkings', values)
        console.log(response.data)
        Swal.fire({
            icon: 'success',
            title: 'Agregado correctamente',
            showConfirmButton: false,
            timer: 1800
        })
        } catch (error) {
        console.log(error)
        }

    }
    return (
        <div>
            <div className='row justify-content-center'> 
            <div className='col-md-6'>
            <h1 className='title'>Reservar Parking</h1>
            <div>
                <article className="contain">
                    <h2 class="subtitle">Precios</h2>
                    <p>Nuestros precios son muy competitivos y ofrecemos una amplia variedad de opciones para satisfacer las necesidades de nuestros clientes.</p>
                    <table className='table table-light table-striped table-bordered border-black'>
                        <thead>
                            <tr className='subtitle'>
                                <th>Tipo de plaza</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='pgph'>
                                <td>Cubierta</td>
                                <td>$5.00</td>
                            </tr>
                            <tr className='pgph'>
                                <td>Descubierta</td>
                                <td>$2.50</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form> 
                    <div className="form-floating">
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingName" 
                        placeholder="Parking" 
                        name='name'
                        />
                        <label htmlFor="floatingName">Parking</label>
                    </div>
                    <div className="form-floating">
                        <Field 
                        type= "text"
                        className="form-control"
                        id="floatingInput" 
                        placeholder="Precio"
                        name='price'
                        />
                        <label htmlFor="floatingInput">Precio</label>
                    </div>
                    <div className="form-floating">
                        <Field 
                        type="text" 
                        className="form-control"
                        id="floatingInput" 
                        placeholder="Disponibilidad"
                        name='disponibility'
                        />
                        <label htmlFor="floatingInput">Disponibilidad</label>
                    </div>
                    <button className="btn btn-success" type="submit" onClick={handleSubmit}>Agregar Parking</button>
                </Form>
            </Formik>
            </div>
        </div> 
    </div>
)
}

export default AddItem