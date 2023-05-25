import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <h2></h2>

        <div className='card' style={{width: "18rem"}}>
            <img src={require(`../img/${props.image}`)} className="card-img-top" alt={props.title} style={{height: "300px", width: "300px"}}/>
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