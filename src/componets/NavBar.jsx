import { faBagShopping, faCartShopping, faList, faList12 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState , useRef , useEffect} from "react";
import {Nav , Container , Navbar} from "react-bootstrap"
import { Link , useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { motion , AnimatePresence } from "framer-motion";
import { faSun , faMoon , faClose} from "@fortawesome/free-solid-svg-icons";

const NavBar =()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const [sideBar , setSideBar] = useState(false)
    const [active , setActive] = useState("Home")
    const [isFixed , setisFixed] = useState(false)
    const sidebarRef = useRef(null);
    const store = useSelector((store)=> store.Reducer)
    const location = useLocation()
    const scrollCheck =()=>{
        if(window.scrollY >= 100){
            setisFixed(true)
        }else if(window.scrollY <= 50){
            setisFixed(false)
        }
    }
    window.addEventListener("scroll" , scrollCheck)
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (sidebarRef.current &&!sidebarRef.current.contains(event.target)) {
            setSideBar(false)
          }
        };
    
        if (sideBar) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        // Cleanup
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [sideBar]);
      useEffect(()=>{setSideBar(false)},[location])
    

      const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "light")
      const [currentUserInfo , setCurrentUserInfo] = useState(false)
      useEffect(()=>{
        if(theme != "light"){
          document.body.classList.remove("light")
          document.body.classList.add(theme)
        }else{
          document.body.classList.remove("dark")
          document.body.classList.add("light")
        }
      },[theme])
     
      useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("userInfo"))
        console.log(user)
        if(user){
          setCurrentUserInfo(true)
        }
      },[])
      const updateNavBar =()=>{
        let user = JSON.parse(localStorage.getItem("userInfo"))
        console.log(user)
        if(user){
          localStorage.removeItem("userInfo")
          localStorage.removeItem("name")
          setCurrentUserInfo(false)
        }
      }
    return(
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-brand d-flex col-md-3 align-items-center">
                        <FontAwesomeIcon className="icon-bag" fontSize={22.5} icon={faBagShopping}/><h1 className="title ms-2 d-inline pt-2">OUR STORE</h1>
                    </div>
                    <div className="icon-moon-or-sun d-flex align-items-center">
                        <button className="button-icon" onClick={()=>{
                            localStorage.setItem("currentMode",theme === "dark" ? "light" : "dark")
                            setTheme(localStorage.getItem("currentMode"))}}>
                            {theme === "dark" ? <FontAwesomeIcon icon={faMoon}/> :<FontAwesomeIcon className="sun" icon={faSun}/>}
                        </button>
                    </div>
                    <nav className="nav me-auto col-md-9 justify-content-end text-center">
                        <ul className="d-flex justify-content-end ">
                            <li className="ms-5"><Link className="text-decoration-none " to="/">Home</Link></li>
                            <li className="ms-5"><Link className="text-decoration-none " to="/shop">Shop</Link></li>  
                            {currentUserInfo ? <li className="ms-5"><Link to="/login" id="logout" className="text-decoration-none " onClick={()=>{ updateNavBar();
                                setCurrentUserInfo(localStorage.setItem("currentUser",false));
                                }}> Logout</Link></li>:
                                <> <li className="ms-5"><Link className="text-decoration-none " to="/login">Login</Link></li>
                                 <li className="ms-5"><Link className="text-decoration-none " to="/register">Register</Link></li></>
                            } 
                            <li className="ms-5 me-3"><Link to="/cart" className="icon-link text-decoration-none">Cart <FontAwesomeIcon icon={faCartShopping}/><span>{store.length}</span></Link></li>
                        </ul>
                    </nav>
                    <div className="navbar-toggle h-50 d-none"onClick={()=> {setSideBar(true)}}>
                        <FontAwesomeIcon icon={faList} style={{fontSize:"25px"}}/>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                { sideBar &&
                        <motion.div className="sideBar" ref={sidebarRef} initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:0.3}}>
                            <div className="icon" onClick={()=> setSideBar(false)}>
                                <button><FontAwesomeIcon icon={faClose} className="close-icon"/></button>
                            </div>
                            <nav className="side-nav me-auto col-md-9 justify-content-end">
                                <ul className="d-flex justify-content-end p-0">
                                    { user ? <h5 className="w-100 text-center">Welcome {user.name}</h5> : null}
                                    <li className={active === "Home" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                        setSideBar(false)
                                        setActive("Home")}}
                                    >
                                        <Link className="icon-link py-3 text-decoration-none w-100" to="/">Home</Link>
                                    </li>
                                    <li className={active === "Shop" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                            setSideBar(false)
                                            setActive("Shop")}}
                                    >
                                        <Link className="icon-link py-3 text-decoration-none w-100"to="/shop">Shop</Link>
                                    </li>
                                    {currentUserInfo === true ? <li className={active === "Logout" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                            setSideBar(false)
                                            setActive("Logout")}}><Link to="/login" id="logout" className="icon-link py-3 text-decoration-none w-100" onClick={()=>{ updateNavBar();
                                        setCurrentUserInfo(localStorage.setItem("currentUser",false));
                                        }}> Logout</Link></li>:
                                        <>
                                        <li className={active === "Login" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                            setSideBar(false)
                                            setActive("Login")}}
                                        >
                                            <Link className="icon-link py-3 text-decoration-none w-100" to="/login">Login</Link>
                                        </li>
                                        <li className={active === "Register" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                            setSideBar(false)
                                            setActive("Register")}}
                                        >
                                            <Link className="icon-link py-3 text-decoration-none w-100" to="/register">Register</Link>
                                        </li>
                                        </>
                                    } 
                                    <li className={active === "Cart" ? "active-link ps-3" : "ps-3"} onClick={()=>{
                                        setSideBar(false)
                                        setActive("Cart")}}
                                    >
                                        <Link to="/cart" className="icon-link py-3 text-decoration-none w-100" onClick={()=>setSideBar(false)}>Cart <FontAwesomeIcon icon={faCartShopping}/><span>{store.length}</span></Link>
                                    </li>    
                                </ul>
                            </nav>
                        </motion.div>
                }
            </AnimatePresence>
        </header>
    )
}
export default NavBar