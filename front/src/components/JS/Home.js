import React from 'react';
import Parallax from './Parallax';

export const Home = () => {
return (
    <div>
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
    </div>
)

}

export default Home;

{/* <section>
        
        <section id="home-slider" class="carousel slide" style="background-image:url('https://www.parkapp.com/assets/themes/default/images/home-main.jpg');">
                                
        <div id="parking-search-form" class="container" role="search" itemscope="" itemtype="https://schema.org/WebSite">
                                <h1>¿DÓNDE QUIERES APARCAR?</h1>
                    
                        
                        <h3>Encuentra el parking que necesitas al mejor precio</h3>
                
                        
                        <meta itemprop="url" content="https://www.parkapp.com/">
                <form id="parking_search_form" action="https://www.parkapp.com/" method="post" autocomplete="off" itemprop="potentialAction" itemscope="" itemtype="https://schema.org/SearchAction">
                    <input type="hidden" id="location_place" name="location_place" value="">
                    <meta itemprop="target" content="https://www.parkapp.com/parkings/{search_term_string}">
                    <div class="controls">
                        <div class="row home-search-line">
        
                                <div id="featured-filters">
                            
                                        <input id="radio_all" type="radio" name="product_types" value="all" checked="" class="auto-load-param">
                    <label class="icoinput clock" for="radio_all"><span>Reservas</span></label>
                                        <input id="radio_subscriptions" type="radio" name="product_types" value="subscriptions" class="auto-load-param">
                    <label class="icoinput calendar" for="radio_subscriptions"><span>Abonos</span></label>
                
                <!--  -->
            
        
        
        
                    
                                           
                     
                    <input id="city" type="radio" class="always-send-me-checkbox auto-load-param" data-real-input="#city-real" name="parking_services" value="city">
                    <label class="icoinput icon-city" for="city"><span>Ciudad</span></label>
                    <input id="city-real" type="hidden" name="parking_services[]" value="">
                                           
                     
                    <input id="airport" type="radio" class="always-send-me-checkbox auto-load-param" data-real-input="#airport-real" name="parking_services" value="airport">
                    <label class="icoinput icon-airport" for="airport"><span>Aeropuerto</span></label>
                    <input id="airport-real" type="hidden" name="parking_services[]" value="">
                                           
                     
                    <input id="port" type="radio" class="always-send-me-checkbox auto-load-param" data-real-input="#port-real" name="parking_services" value="port">
                    <label class="icoinput icon-port" for="port"><span>Puerto</span></label>
                    <input id="port-real" type="hidden" name="parking_services[]" value="">
                                           
                     
                    <input id="train" type="radio" class="always-send-me-checkbox auto-load-param" data-real-input="#train-real" name="parking_services" value="train">
                    <label class="icoinput icon-train" for="train"><span>Tren</span></label>
                    <input id="train-real" type="hidden" name="parking_services[]" value="">
                
                
            
                                            <input id="servicio_lpr" class="always-send-me-checkbox auto-load-param" data-real-input="#servicio_lpr-real" value="servicio_lpr" type="checkbox">
                <label for="servicio_lpr" class="form-check-label icoinput safe"><span>Pago por matrícula</span></label>
                <input id="servicio_lpr-real" type="hidden" name="parking_services[]" value="">
            </div>
                                <div id="saving-label" class="saving-label col">
                <svg class="label-left" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.9 48.8">
                    <path d="M0.3,4.5l9,18.5c0.4,0.9,0.4,1.9,0,2.8l-9,18.5c-1,2.1,0.5,4.6,2.8,4.6h6.8V0H2.6C0.6,0.4-0.6,2.6,0.3,4.5z"></path>
                </svg>
                <div class="saving-label-text"><p>Ahorra <br>hasta el</p><p class="discount">70%</p></div>
                <svg class="visible-xs label-right" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.9 48.8">
                    <path d="M9.6,44.3l-9-18.5c-0.4-0.9-0.4-1.9,0-2.8l9-18.5C10.6,2.4,9.1,0,6.8,0L0,0l0,48.8h7.3C9.3,48.5,10.5,46.3,9.6,44.3z"></path>
                </svg>
            </div>
        
                                                
                                                    <div id="parking_location_wrapper" class="col">
                                                                                                <input id="parking_location" itemprop="query-input" type="text" name="search_term_string" class="form-control geo_autocomplete ui-autocomplete-input" placeholder="Escribe dónde quieres aparcar" required="" data-toggle="tooltip" data-placement="bottom" title="¿En qué zona te gustaría aparcar?" autocomplete="off">
                                                            </div>
                                                <div id="start_wrapper" class="col">
                                <div class="input-group datepicker-group">
                                    <input type="text" class="form-control datepicker date-start picker__input" id="search-start_date" name="start_date" placeholder="Entrada" readonly="" aria-haspopup="true" aria-expanded="false" aria-readonly="false" aria-owns="search-start_date_root"><div class="picker" id="search-start_date_root" aria-hidden="true"><div class="picker__holder" tabindex="-1"><div class="picker__frame"><div class="picker__wrap"><div class="picker__box"><div class="picker__header"><div class="picker__month">Junio</div><div class="picker__year">2023</div><div class="picker__nav--prev picker__nav--disabled" data-nav="-1" role="button" aria-controls="search-start_date_table" title="Mes anterior"> </div><div class="picker__nav--next" data-nav="1" role="button" aria-controls="search-start_date_table" title="Siguiente mes"> </div></div><table class="picker__table" id="search-start_date_table" role="grid" aria-controls="search-start_date" aria-readonly="true"><thead><tr><th class="picker__weekday" scope="col" title="Lunes">Lun</th><th class="picker__weekday" scope="col" title="Martes">Mar</th><th class="picker__weekday" scope="col" title="Miercoles">Mie</th><th class="picker__weekday" scope="col" title="Jueves">Jue</th><th class="picker__weekday" scope="col" title="Viernes">Vie</th><th class="picker__weekday" scope="col" title="Sábado">Sab</th><th class="picker__weekday" scope="col" title="Domingo">Dom</th></tr></thead><tbody><tr><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685329200000" role="gridcell" aria-label="29-05-2023" aria-disabled="true">29</div></td><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685415600000" role="gridcell" aria-label="30-05-2023" aria-disabled="true">30</div></td><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685502000000" role="gridcell" aria-label="31-05-2023" aria-disabled="true">31</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685588400000" role="gridcell" aria-label="01-06-2023" aria-disabled="true">1</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685674800000" role="gridcell" aria-label="02-06-2023" aria-disabled="true">2</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685761200000" role="gridcell" aria-label="03-06-2023" aria-disabled="true">3</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685847600000" role="gridcell" aria-label="04-06-2023" aria-disabled="true">4</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685934000000" role="gridcell" aria-label="05-06-2023" aria-disabled="true">5</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686020400000" role="gridcell" aria-label="06-06-2023" aria-disabled="true">6</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686106800000" role="gridcell" aria-label="07-06-2023" aria-disabled="true">7</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686193200000" role="gridcell" aria-label="08-06-2023" aria-disabled="true">8</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686279600000" role="gridcell" aria-label="09-06-2023" aria-disabled="true">9</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686366000000" role="gridcell" aria-label="10-06-2023" aria-disabled="true">10</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686452400000" role="gridcell" aria-label="11-06-2023" aria-disabled="true">11</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686538800000" role="gridcell" aria-label="12-06-2023" aria-disabled="true">12</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686625200000" role="gridcell" aria-label="13-06-2023" aria-disabled="true">13</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686711600000" role="gridcell" aria-label="14-06-2023" aria-disabled="true">14</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686798000000" role="gridcell" aria-label="15-06-2023" aria-disabled="true">15</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686884400000" role="gridcell" aria-label="16-06-2023" aria-disabled="true">16</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--today picker__day--highlighted" data-pick="1686970800000" role="gridcell" aria-label="17-06-2023" aria-activedescendant="true">17</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687057200000" role="gridcell" aria-label="18-06-2023">18</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687143600000" role="gridcell" aria-label="19-06-2023">19</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687230000000" role="gridcell" aria-label="20-06-2023">20</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687316400000" role="gridcell" aria-label="21-06-2023">21</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687402800000" role="gridcell" aria-label="22-06-2023">22</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687489200000" role="gridcell" aria-label="23-06-2023">23</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687575600000" role="gridcell" aria-label="24-06-2023">24</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687662000000" role="gridcell" aria-label="25-06-2023">25</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687748400000" role="gridcell" aria-label="26-06-2023">26</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687834800000" role="gridcell" aria-label="27-06-2023">27</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687921200000" role="gridcell" aria-label="28-06-2023">28</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1688007600000" role="gridcell" aria-label="29-06-2023">29</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1688094000000" role="gridcell" aria-label="30-06-2023">30</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688180400000" role="gridcell" aria-label="01-07-2023">1</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688266800000" role="gridcell" aria-label="02-07-2023">2</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688353200000" role="gridcell" aria-label="03-07-2023">3</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688439600000" role="gridcell" aria-label="04-07-2023">4</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688526000000" role="gridcell" aria-label="05-07-2023">5</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688612400000" role="gridcell" aria-label="06-07-2023">6</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688698800000" role="gridcell" aria-label="07-07-2023">7</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688785200000" role="gridcell" aria-label="08-07-2023">8</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688871600000" role="gridcell" aria-label="09-07-2023">9</div></td></tr></tbody></table><div class="picker__footer"><button class="picker__button--today" type="button" data-pick="1686970800000" disabled="" aria-controls="search-start_date">Hoy</button><button class="picker__button--clear" type="button" data-clear="1" disabled="" aria-controls="search-start_date">Borrar</button><button class="picker__button--close" type="button" data-close="true" disabled="" aria-controls="search-start_date">Cerrar</button></div></div></div></div></div></div><input type="hidden" name="start_date_submit">
                                    <span class="input-group-addon"><span class="icon-calendar"></span></span>
                                </div>
                            </div>
                            <div id="end_wrapper" class="col ffi ffi-subscriptions-hidden">
                                <div class="input-group datepicker-group">
                                    <input type="text" class="form-control datepicker date-end picker__input" id="search-end_date" name="end_date" placeholder="Salida" readonly="" aria-haspopup="true" aria-expanded="false" aria-readonly="false" aria-owns="search-end_date_root"><div class="picker" id="search-end_date_root" aria-hidden="true"><div class="picker__holder" tabindex="-1"><div class="picker__frame"><div class="picker__wrap"><div class="picker__box"><div class="picker__header"><div class="picker__month">Junio</div><div class="picker__year">2023</div><div class="picker__nav--prev picker__nav--disabled" data-nav="-1" role="button" aria-controls="search-end_date_table" title="Mes anterior"> </div><div class="picker__nav--next" data-nav="1" role="button" aria-controls="search-end_date_table" title="Siguiente mes"> </div></div><table class="picker__table" id="search-end_date_table" role="grid" aria-controls="search-end_date" aria-readonly="true"><thead><tr><th class="picker__weekday" scope="col" title="Lunes">Lun</th><th class="picker__weekday" scope="col" title="Martes">Mar</th><th class="picker__weekday" scope="col" title="Miercoles">Mie</th><th class="picker__weekday" scope="col" title="Jueves">Jue</th><th class="picker__weekday" scope="col" title="Viernes">Vie</th><th class="picker__weekday" scope="col" title="Sábado">Sab</th><th class="picker__weekday" scope="col" title="Domingo">Dom</th></tr></thead><tbody><tr><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685329200000" role="gridcell" aria-label="29-05-2023" aria-disabled="true">29</div></td><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685415600000" role="gridcell" aria-label="30-05-2023" aria-disabled="true">30</div></td><td role="presentation"><div class="picker__day picker__day--outfocus picker__day--disabled" data-pick="1685502000000" role="gridcell" aria-label="31-05-2023" aria-disabled="true">31</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685588400000" role="gridcell" aria-label="01-06-2023" aria-disabled="true">1</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685674800000" role="gridcell" aria-label="02-06-2023" aria-disabled="true">2</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685761200000" role="gridcell" aria-label="03-06-2023" aria-disabled="true">3</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685847600000" role="gridcell" aria-label="04-06-2023" aria-disabled="true">4</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1685934000000" role="gridcell" aria-label="05-06-2023" aria-disabled="true">5</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686020400000" role="gridcell" aria-label="06-06-2023" aria-disabled="true">6</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686106800000" role="gridcell" aria-label="07-06-2023" aria-disabled="true">7</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686193200000" role="gridcell" aria-label="08-06-2023" aria-disabled="true">8</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686279600000" role="gridcell" aria-label="09-06-2023" aria-disabled="true">9</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686366000000" role="gridcell" aria-label="10-06-2023" aria-disabled="true">10</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686452400000" role="gridcell" aria-label="11-06-2023" aria-disabled="true">11</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686538800000" role="gridcell" aria-label="12-06-2023" aria-disabled="true">12</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686625200000" role="gridcell" aria-label="13-06-2023" aria-disabled="true">13</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686711600000" role="gridcell" aria-label="14-06-2023" aria-disabled="true">14</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686798000000" role="gridcell" aria-label="15-06-2023" aria-disabled="true">15</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled" data-pick="1686884400000" role="gridcell" aria-label="16-06-2023" aria-disabled="true">16</div></td><td role="presentation"><div class="picker__day picker__day--infocus picker__day--today picker__day--highlighted" data-pick="1686970800000" role="gridcell" aria-label="17-06-2023" aria-activedescendant="true">17</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687057200000" role="gridcell" aria-label="18-06-2023">18</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687143600000" role="gridcell" aria-label="19-06-2023">19</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687230000000" role="gridcell" aria-label="20-06-2023">20</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687316400000" role="gridcell" aria-label="21-06-2023">21</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687402800000" role="gridcell" aria-label="22-06-2023">22</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687489200000" role="gridcell" aria-label="23-06-2023">23</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687575600000" role="gridcell" aria-label="24-06-2023">24</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687662000000" role="gridcell" aria-label="25-06-2023">25</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687748400000" role="gridcell" aria-label="26-06-2023">26</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687834800000" role="gridcell" aria-label="27-06-2023">27</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1687921200000" role="gridcell" aria-label="28-06-2023">28</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1688007600000" role="gridcell" aria-label="29-06-2023">29</div></td><td role="presentation"><div class="picker__day picker__day--infocus" data-pick="1688094000000" role="gridcell" aria-label="30-06-2023">30</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688180400000" role="gridcell" aria-label="01-07-2023">1</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688266800000" role="gridcell" aria-label="02-07-2023">2</div></td></tr><tr><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688353200000" role="gridcell" aria-label="03-07-2023">3</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688439600000" role="gridcell" aria-label="04-07-2023">4</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688526000000" role="gridcell" aria-label="05-07-2023">5</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688612400000" role="gridcell" aria-label="06-07-2023">6</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688698800000" role="gridcell" aria-label="07-07-2023">7</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688785200000" role="gridcell" aria-label="08-07-2023">8</div></td><td role="presentation"><div class="picker__day picker__day--outfocus" data-pick="1688871600000" role="gridcell" aria-label="09-07-2023">9</div></td></tr></tbody></table><div class="picker__footer"><button class="picker__button--today" type="button" data-pick="1686970800000" disabled="" aria-controls="search-end_date">Hoy</button><button class="picker__button--clear" type="button" data-clear="1" disabled="" aria-controls="search-end_date">Borrar</button><button class="picker__button--close" type="button" data-close="true" disabled="" aria-controls="search-end_date">Cerrar</button></div></div></div></div></div></div><input type="hidden" name="end_date_submit">
                                    <span class="input-group-addon"><span class="icon-calendar"></span></span>
                                </div>
                            </div>
                            <div id="search_wrapper" class="col">
                                <button type="button" id="btn-search" class="btn btn-primary full-width">Buscar</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-lg-10 col-md-10 col-sm-8 col-xs-12">
                                <div class="error-container">
                                    <div id="parking-search-error-message" class="alert alert-warning hidden">Introduce dónde quieres aparcar
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
                <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#home-slider" data-slide-to="0" class="active"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <div class="fill" style="background-image:url('https://www.parkapp.com/assets/themes/default/images/home-main.jpg');"></div>
                    <div class="carousel-caption"></div>
                </div>
            </div>
        </section></section> */}