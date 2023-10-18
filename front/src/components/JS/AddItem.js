import axios from 'axios';
import { Field, Form, Formik } from 'formik'
// import { useState } from 'react';
// import Swal from 'sweetalert2'



export const AddItem = () => {


    const initialValues = {
        name: '',
        disponibility: '',
        price: ''
    }

    const handleSubmit = async (values) => {
        try {
        const response = await axios.post('http://localhost:5000/parking', values)
        console.log(response.data)
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
                                <th>Precio/hora</th>
                                <th>Precio/día</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='pgph'>
                                <td>Cubierta</td>
                                <td>$2.00</td>
                                <td>$10.00</td>
                            </tr>
                            <tr className='pgph'>
                                <td>Descubierta</td>
                                <td>$1.50</td>
                                <td>$8.00</td>
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
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Agregar Parking</button>
                </Form>
            </Formik>
            </div>
        </div> 
    </div>
)
}

export default AddItem