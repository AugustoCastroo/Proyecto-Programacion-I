import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Swal from 'sweetalert2';

export const MyParkings = () => {

    const { user } = useContext(UserContext);

    const user_id_reserved = user.id;

    const [reserves, setReserves] = useState([]);

    //almaceno los valores que se muestran en la ventana modal
    const [editedReserve, setEditedReserve] = useState({ id: 0, name: '', price: '', disponibility:'' });


    useEffect(() => {
        fetchMyReserves();
    }, []);

    const fetchMyReserves = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/reserve/${user_id_reserved}`);
            console.log('Info', response.data);
            setReserves(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    //Eliminar reserva

    const onDeleteReserve = async (reserve_id) => {
        console.log('reserve_id ondelete', reserve_id)
        try {
            await axios.delete(`http://localhost:5000/reserve/${reserve_id}`);
            fetchMyReserves();
        }
        catch (error) {
            console.error(error);
        }
    };

    //Editar reserva

    //Carga los "valores" del trabajo en la ventana modal (name, price, disponibility)
    const onEditReserve = (reserve) => {
        setEditedReserve(reserve);
    };
    
    // Actualiza los campos que se editaron dentro de la ventana modal
    //[e.target.name] es nombre del campo que sufrio un cambio 
    // e.target.value es valor ingresado por el usuario. 
    const handleInputChange = (e) => {
        console.log('valor de e.target.name', e.target.name)
        console.log('valor de e.target.value', e.target.value)
        setEditedReserve({ ...editedReserve, [e.target.name]: e.target.value });
    };


    //Envia al back la nueva actualizacion
const handleUpdateReserve = async () => {

    try {
        await axios.put(`http://localhost:5000/reserve/${edited_reserve}`, editedReserve);
        fetchMyReserves();
        setEditedReserve({ id: 0, name: '', price: '', disponibility:''});
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
                                <th scope="col">Precio por hora</th>
                                <th scope="col">Precio por día</th>
                                <th scope="col">Reservado</th>
                            </tr>
                        </thead>
                        <tbody className='pgph'>
                            {
                                reserves.map(reserve => (
                                    <tr key={reserve.id}>
                                        <td>{reserve.name}</td>
                                        <td>{reserve.price}</td>
                                        <td>{reserve.disponibility}</td>
                                        <td> 
                                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editJobModal" onClick={() => onEditReserve(reserve)}> Editar </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => onDeleteReserve(reserve.id)}>Eliminar Reserva</button>
                                        </td>
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
                                    value={editedReserve.name}
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
                                    value={editedReserve.price}
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
                                    value={editedReserve.disponibility}
                                    onChange={handleInputChange}
                                    placeholder="Experiencia"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdateReserve}> Editar </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default MyParkings;