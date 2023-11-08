import React from 'react';
import Parallax from './Parallax';
import '../CSS/Login.css';
import '../CSS/Home.css';

export const Home = () => {
return (
        <header>
            <h2 className="subtitle">
            Bienvenidos AparClick
            </h2>
                <p>
                    En AparClick ofrecemos nuesteo servicio web el cuál diseñamos para ofrecer de forma donde los ususarios puedan buscar,
                    reservar y pagar por plazas de estacionamiento en diferentes lugares.
                    Esta página permite a los conductores encontrar fácilmente un lugar de estacionamiento disponible en tiempo real y reservarlo de forma anticipada para evitar el estrés y la pérdida de tiempo que a menudo implica la búsqueda de estacionamiento en lugares concurridos.
                    Además en AparClick podemos proporcionar información útil sobre la ubicación de los parkings, los precios,
                    y los servicios adicionales que ofrecemos.
                    En resumen lo que buscamos es es mejorar la experiencia de estacionamiento para los conductores.
                </p>
            <Parallax />
            <div>
                <h2 className="subtitle">
                Servicio
                </h2>
                    <p>
                        Nuestro parking ofrece una amplia variedad de servicios para satisfacer las necesidades de nuestros clientes. Estamos ubicados en una zona estratégica de la ciudad, lo que facilita el acceso y la comodidad para nuestros usuarios.
                    </p>
                <h2 className='step-title'>
                    ¿CÓMO FUNCIONAN NUESTRAS RESERVAS?
                </h2>
                <div className='container'>
                    <div className='card'>
                        <div className='step-subtitle'>
                            <h3>
                                1. Encuentra tu parking
                            </h3>
                            <figure>
                            <img src={require("../../img/pasos_1.png" )}alt="Paso 1" />
                            </figure>
                            <p className='pgph'>
                                Reserva el parking que más se adapte a tus necesidades de precio, ubicación o tipo.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='step-subtitle'>
                            <h3>
                                2. Presenta el justificante al entrar
                            </h3>
                            <figure>
                            <img src={require("../../img/pasos_2.png" )}alt="Paso 2" />
                            </figure>
                            <p className='pgph'>
                                Presenta tu reserva en el parking o accede con el teléfono móvil si el parking lo permite.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='step-subtitle'>
                            <h3>
                                3. ¡Y ahorra!
                            </h3>
                            <figure>
                            <img src={require("../../img/pasos_3.png" )}alt="Paso 3" />
                            </figure>
                            <p className='pgph'>
                                ¡Gracias a nuestras ofertas podrás gastar mucho menos!
                            </p>
                        </div>   
                    </div>
                </div>
            </div>
        </header>
)

}

export default Home;