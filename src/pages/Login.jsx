import React,{useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Login =()=>{
    const navigate = useNavigate()
    const [currentUserInfo , setCurrentUserInfo] = useState(localStorage.getItem("currentUser") ?? false)
    const [user,setuser] = useState({
            email:"",
            password:""
    })
    
    const {
            register,
            handleSubmit,
            formState :{errors},
        } = useForm()
            
        const onSubmit =(data)=>{
            console.log(data , "the data sent")
        }
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const check =()=>{
        if(user.email && user.password != ""){
            if(userInfo.email == user.email && userInfo.password == user.password){
                toast.success("signed in")
                setTimeout(()=>navigate("/"), 2000)
                window.location.href="/Ecommerce-Ostora-shop/"
            }else{
                if(user.password.length < 6){
                    console.log(user.password.length)
                }else{
                    toast.error("The Email or Password Is false")
                }
                
            }
        }
    }
    useWindowScrollToTop()
    return(
        <>
        <section id="login">
            <form className="login hero m-auto align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="login-title mb-4">
                    <h2 className="mb-2 text-center">Login</h2>
                    <div className="login-line line bg-dark m-auto"></div>
                </div>
                <div class="mb-3 col-md-9 col-10">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={user.email} required autoComplete="off"
                        {...register("email", {
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email format",
                        },
                        })}                        
                        onChange={(e)=> setuser({...user , email:e.target.value})} class="form-control" placeholder="name@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp"
                    />
                    {errors.email && <p className="m-0 p-0">{errors.email.message}</p>}
                    <span id="emailHelp" class="form-text"></span>
                </div>
                <div class="mb-3 col-md-9 col-10">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" value={user.password} required autoComplete="off"
                         {...register("password", {
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters long.",
                        },
                        })}
                        onChange={(e)=> setuser({...user , password:e.target.value})} placeholder="Enter Password" id="exampleInputPassword1"
                    />
                    {errors.password && <p className="m-0 p-0">{errors.password.message}</p>}
                </div>
                <div class="mb-3 form-check col-md-9 col-10">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">New Here? </label>
                    <Link to="/register" className="link-register"> Register</Link>
                </div>
                <div className="btn-login text-center mt-3">
                    <button  type="submit" class="btn-link btn" onClick={()=>{check();setCurrentUserInfo(localStorage.setItem("currentUser" , true))}}>Login</button>
                </div>
            </form>
            {/* localStorage.setItem("currentUser" , currentUserInfo === false ? true : false) */}
        </section>
        </>
    )
}
export default Login