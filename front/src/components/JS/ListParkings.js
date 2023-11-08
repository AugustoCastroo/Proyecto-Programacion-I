import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const ListParkings = () => {

    const { user } = useContext(UserContext);

    const [parkings, setParkings] = useState([]);


    useEffect(() => {
        fetchParkings();
    }, []);

    const fetchParkings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/parking');
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
                                                    <td><Link to={`/additem/${parking._id}`}>Editar</Link></td>
                                                    <td><Link to={`/additem/${parking._id}`}>Eliminar</Link></td>
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
        </div>
    )
};


export default ListParkings