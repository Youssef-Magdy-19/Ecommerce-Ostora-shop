import { faBagShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {Nav , Container , Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar =()=>{
    const [isFixed , setisFixed] = useState(false)
    const store = useSelector((store)=> store.Reducer)
    const scrollCheck =()=>{
        if(window.scrollY >= 100){
            setisFixed(true)
        }else if(window.scrollY <= 50){
            setisFixed(false)
        }
    }
    window.addEventListener("scroll" , scrollCheck)
    return(
        <Navbar expand="md" class="bg-body-tertiary" className={isFixed ? "fixed navbar" : "navbar"}>
            <Container className="navbar-container">
                    <div className="d-flex justify-content-between col-md-3 col-12">
                        <Navbar.Brand to="/" >
                            <FontAwesomeIcon color="#0f3460" fontSize={22.5} icon={faBagShopping}/><h1 className="title ms-2 d-inline">OUR STORE</h1>
                        </Navbar.Brand>
                        <div className="d-flex">
                            <div className="market-icon ">
                                <Link to="/cart" className="icon-link text-decoration-none ms-5"><FontAwesomeIcon icon={faCartShopping}/><span className="row justify-content-center align-items-center me-2">{store.length}</span></Link>
                            </div>
                            <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav">
                                <span></span>
                                <span></span>
                                <span></span>
                            </Navbar.Toggle>
                        </div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="nav me-auto col-12 justify-content-end mt-3 text-center">
                        <Link className="text-decoration-none ms-5 mb-3" to="/">Home</Link>
                        <Link className="text-decoration-none ms-5 mb-3" to="/shop">Shop</Link>
                        <Link className="text-decoration-none ms-5 mb-3" to="/cart">Cart</Link>
                        <Link to="/cart" className="icon-link text-decoration-none ms-5"><FontAwesomeIcon icon={faCartShopping}/><span>{store.length}</span></Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar