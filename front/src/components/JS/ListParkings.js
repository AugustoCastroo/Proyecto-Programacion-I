import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Swal from 'sweetalert2';

export const ListParkings = () => {

    const { user } = useContext(UserContext);

    const [parkings, setParkings] = useState([]);

    const [editedParking, setEditedParking] = useState({ id: 0, name: '', price: '', disponibility:'' });


    useEffect(() => {
        fetchParkings();
    }, []);

    const fetchParkings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/parkings');
            console.log(response);
            setParkings(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onAddReservation = async (parking_id) => {

        const values = {
            user_id: user.id,
            parking_id: parking_id
        }
        console.log('values', values)
        try {
            const response = await axios.post('http://localhost:5000/reserves', values);
            console.log(response.data)
        }
            catch (error) {
            console.error(error);
        }
    };

    //Eliminar reserva

    const onDeleteParking = async (parking_id) => {
        console.log('reserve_id ondelete', parking_id)
        try {
            await axios.delete(`http://localhost:5000/parkings/${parking_id}`);
            fetchParkings();
        }
        catch (error) {
            console.error(error);
        }
    };

    //Editar reserva

    //Carga los "valores" del trabajo en la ventana modal (name, price, disponibility)
    const onEditParking = (parking) => {
        setEditedParking(parking);
    };
    
    // Actualiza los campos que se editaron dentro de la ventana modal
    //[e.target.name] es nombre del campo que sufrio un cambio 
    // e.target.value es valor ingresado por el usuario. 
    const handleInputChange = (e) => {
        console.log('valor de e.target.name', e.target.name)
        console.log('valor de e.target.value', e.target.value)
        setEditedParking({ ...editedParking, [e.target.name]: e.target.value });
    };


    //Envia al back la nueva actualizacion
const handleUpdateParking = async () => {

    try {
        await axios.put(`http://localhost:5000/parkings/${editedParking.id}`, editedParking);
        fetchParkings();
        setEditedParking({ id: 0, name: '', price: '', disponibility:''});
        Swal.fire({
        icon: 'success',
        title: 'Editado correctamente',
        showConfirmButton: false,
        timer: 1800
        })
    } catch (error) {
        console.error(error);
    }
};

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-light table-striped table-bordered border-black'>
                        <thead className='subtitle'>
                            <tr>
                                <th scope="col">Tipo de plaza</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Disponibilidad</th>
                            </tr>
                        </thead>
                        <tbody className='pgph'>
                            {
                                parkings.map(parking => (
                                    <tr key={parking.id}>
                                        <td>{parking.name}</td>
                                        <td>{parking.price}</td>
                                        <td>{parking.disponibility}</td>
                                        {
                                            user.role === '2' ? (
                                                <div>
                                                    <td>
                                                        <button type="button" className="btn btn-success" onClick={() => onAddReservation(parking.id)}>Reservar</button>
                                                    </td>
                                                </div>
                                            ) : (
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editJobModal" onClick={() => onEditParking(parking)}> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger"  onClick={() => onDeleteParking(parking.id)}>Eliminar</button>
                                                    </td> 
                                                </div>
                                            )
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade" id="editJobModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar trabajo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-4'>
                                <label>Tipo de Plaza</label><br></br>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedParking.name}
                                    onChange={handleInputChange}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Precio</label><br></br>
                                <input
                                    type="text"
                                    name="price"
                                    value={editedParking.price}
                                    onChange={handleInputChange}
                                    placeholder="Descripción"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Disponibilidad</label><br></br>
                                <input
                                    type="text"
                                    name="disponibility"
                                    value={editedParking.disponibility}
                                    onChange={handleInputChange}
                                    placeholder="Experiencia"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdateParking}> Editar </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ListParkings