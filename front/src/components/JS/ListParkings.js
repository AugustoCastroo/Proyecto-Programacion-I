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

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Tipo de plaza</th>
                                <th scope="col">Precio por hora</th>
                                <th scope="col">Precio por día</th>
                                <th scope="col">Reservado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parkings.map(parking => (
                                    <tr key={parking._id}>
                                        <td>{parking.name}</td>
                                        <td>{parking.price}</td>
                                        <td>{parking.disponibility}</td>
                                        {
                                            user.role === '2' ? (
                                                <td><Link to={`/additem/${parking._id}`}>Reservar</Link></td>
                                            ) : (
                                                <td><Link to={`/additem/${parking._id}`}>Editar</Link></td>
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