import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Swal from 'sweetalert2';

export const MyParkings = () => {

    const { user } = useContext(UserContext);

    const userIdReserved = user.id;

    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetchMyReserves();
    }, []);

    const fetchMyReserves = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/reserves/${userIdReserved}`);
            console.log('Info', response.data);
            setReserves(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onDeleteReserve = async (reserveId) => {
        console.log('reserveId en ondelete', reserveId)
        try {
            await axios.delete(`http://localhost:5000/reserves/${reserveId}`);
            Swal.fire({
                icon: 'success',
                title: 'Eliminado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            fetchMyReserves();
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
                                <th scope="col">Plaza</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Disponibilidad</th>
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
                                            <button type="button" className="btn btn-danger" onClick={() => onDeleteReserve(reserve.id)}>Eliminar Reserva</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


export default MyParkings;