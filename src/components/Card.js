import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            
            <img  src={require(`./${props.img}.jpg`)} className="card-img" />  
           
           
           
            <div className="card-stats">
                <img src={require("../images/start1.png")} className="card-rate" />
                <span>{props.rating}</span> <br/>
                <span className="gray">{props.location}</span>            
                <p className="card-title">{props.title}</p>

              </div>  
            <p><span className="card-price">From ${props.price}</span> / person</p>
        </div>
    )
}



  
