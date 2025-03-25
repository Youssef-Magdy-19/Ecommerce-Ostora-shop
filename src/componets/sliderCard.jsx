import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const SliderCard =({cover , desc , offer})=>{
    return(
        <div className="slider-card">
            <div className="container">
                <div className="card-slider row">
                    <div className="card-info col-md-6">
                        <h1>{offer}</h1>
                        <p>{desc}</p>
                        <NavLink to="/shop" className="text-decoration-none">View Collections <FontAwesomeIcon className="ms-1" icon={faArrowRight}/></NavLink>
                    </div>
                    <div className="card-cover col-md-6 col-12 m-auto">
                        <img src={cover} alt="" className="text-center m-auto w-75"  height={300}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderCard