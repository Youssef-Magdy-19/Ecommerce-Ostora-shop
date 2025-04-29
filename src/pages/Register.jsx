import React,{useState} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Register =()=>{
    
    const navigate = useNavigate()
    const [user,setuser] = useState({
            name:"",
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
        const check =()=>{
            if(user.name && user.email && user.password.length >= 6){
                toast.success("signed up")
                const userInfo = localStorage.setItem("userInfo", JSON.stringify(user))
                const Name = localStorage.setItem("name" , JSON.stringify(user.name))
                setTimeout(()=>navigate("/login"),2000)
            }
        }
        useWindowScrollToTop()
    return(
        <>
        <section id="register">
            <form className="register hero m-auto align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="register-title mb-4">
                    <h2 className="mb-2 text-center">Register</h2>
                    <div className="register-line line bg-dark m-auto"></div>
                </div>
                <div class="mb-3 col-md-9 col-10">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" required class="form-control" value={user.name} autoComplete="off" onChange={(e)=> setuser({...user,name:e.target.value})} placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 col-md-9 col-10">
                    <label for="exampleInputEmail3" class="form-label">Email address</label>
                    <input type="email" class="form-control" autoComplete="off" required value={user.email} 
                        {...register("email", {
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                        },
                        })}
                        onChange={(e)=> setuser({...user,email:e.target.value})} placeholder="name@gmail.com" id="exampleInputEmail3" aria-describedby="emailHelp"
                    />
                    {errors.email && <p className="m-0 p-0 pt-1">{errors.email.message}</p>}
                </div>
                <div class="mb-3 col-md-9 col-10">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" required autoComplete="off" value={user.password} 
                        {...register("password", {
                            minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long.",
                        },
                        })}
                        onChange={(e)=> setuser({...user,password:e.target.value})} placeholder="Enter Password" id="exampleInputPassword1"
                    />
                    {errors.password && <p className="m-0 p-0 pt-1">{errors.password.message}</p>}
                </div>
                <div class="mb-3 form-check col-md-8 col-10">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Already has an account? </label>
                    <Link to="/login" className="link-login"> Login</Link>
                </div>
                <div className="btn-login text-center mt-3">
                    <button  type="submit" class="btn-link btn" onClick={()=>check()}>Register</button>
                </div>
            </form>
        </section>
        </>
    )
}
export default Register