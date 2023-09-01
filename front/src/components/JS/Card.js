import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <h2></h2>

        <div className='card' style={{width: "18rem"}}>
            <img src={require(`../../img/${props.image}`)} className="card-img-top" alt={props.title} style={{height: "300px", width: "300px"}}/>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {props.title} </h5>
                    <p className="card-text"> {props.text} </p>
                    <a href="#" className="btn btn-primary"> {props.button} </a>
                </div>
            </div>
        </div>
    </div>

)
}

export default Card
// import React from 'react';

// export const Card = (props) => {
//   return (
//     <div>
//       <div>
//           <div className="card" style={{ width: "15rem" }}>
//               <img src={require(`../../img/${props.imagen}`) } 
//                     class="card-img-top" alt="..." 
//                     style={{height:"235px", width: "235px"}}  
//               />
//               <div class="card-body">
//                   <h5 class="card-title">{props.titulo}</h5>
//                   <p class="card-text">{props.descripcion}</p>
//               </div>
//           </div>
//       </div>
//       <div className='row'>
//         <div className='col-md-4'>
//           <div>
//             <h2></h2>
//             <div className='card' style={{width: "18rem"}}>
//               <img src={require(`../../img/auto.png`)} className="card-img-top" alt="Auto" style={{height: "300px", width: "300px"}}/>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Auto</h5>
//                   <p className="card-text">Descripción del auto</p>
//                   <a href="#" className="btn btn-primary">Ver más</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='col-md-4'>
//           <div>
//             <h2></h2>
//             <div className='card' style={{width: "18rem"}}>
//               <img src={require(`../../img/moto2.png`)} className="card-img-top" alt="Moto" style={{height: "300px", width: "300px"}}/>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Moto</h5>
//                   <p className="card-text">Descripción de la moto</p>
//                   <a href="#" className="btn btn-primary">Ver más</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='col-md-4'>
//           <div>
//             <h2></h2>
//             <div className='card' style={{width: "18rem"}}>
//               <img src={require(`../../img/camioneta.png`)} className="card-img-top" alt="Camioneta" style={{height: "300px", width: "300px"}}/>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Camioneta</h5>
//                   <p className="card-text">Descripción de la camioneta</p>
//                   <a href="#" className="btn btn-primary">Ver más</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from 'react'

// export const Card = (props) => {
//   return (
//     <div>
//         <div className="card" style={{ width: "15rem" }}>
//             <img src={require(`../../img/${props.imagen}`) } 
//                   class="card-img-top" alt="..." 
//                   style={{height:"235px", width: "235px"}}  
//             />
//             <div class="card-body">
//                 <h5 class="card-title">{props.titulo}</h5>
//                 <p class="card-text">{props.descripcion}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card;


