import {React,useState,useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Check=()=>{
    const state = useSelector((state)=> state.Reducer)
    useEffect(()=>{
        localStorage.setItem("cart" , JSON.stringify(state))
    },[state])
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address1: "",
        address2: "",
        zip: "",
        country:"",
        state:"",
        cardName: "",
        cardNumber: "",
        expiration: "",
        cvv: ""
      });
    const navigate = useNavigate()
    
    let totalPrice = 0
    let qtyProducts = 0
    state.map((pro)=>{
        let pricePro = pro.qty * pro.price
        totalPrice += pricePro
    })
    state.map((pro)=>{
        qtyProducts += pro.qty
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      
        for (const key in formData) {
        
            const isFormValid = Object.values(formData).every(val =>
                typeof val === 'string' ? val.trim() !== '' : val !== ''
            );
            
            if (!isFormValid) {
                toast.error("Please fill in all information.");
                return;
            }
            }
            dispatch({type:"clearcart"})
            navigate("/order-success");
        };
    useWindowScrollToTop()
        return(
            <>
            <section id="check" className="m-auto">
                <div className="container">
                    <div className="check-title ">
                        <h2 className="text-center">Checkout</h2>
                        <div className="check-line line bg-dark m-auto mt-2 mb-4"></div>
                    </div>
                    <div className="prods-check checkout row justify-content-between">
                        <div className="prods-cart p-3 m-auto card col-md-8 col-11">
                            <div className="p-0 m-0">
                                <h4 className="mb-0">Billing address</h4>
                                <hr />
                            </div>
                            <div className="p-0 m-0">
                                <form class=" g-3" onSubmit={handleSubmit}>
                                    <div className="name row mb-1">
                                        <div class="col-md-6">
                                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                            <input  type="text" name="firstName" value={formData.firstName} onChange={(e)=>handleChange(e)} className="form-control" id="inputFirstName" required autoComplete="off"/>
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="inputLastName"   className="form-label">Last Name </label>
                                            <input required autoComplete="off" type="text" name="lastName" value={formData.lastName} onChange={(e)=>handleChange(e)} className="form-control" id="inputLastName" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-1">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input required autoComplete="off" name="email" value={formData.email} onChange={(e)=>handleChange(e)} type="email" className="form-control" id="inputEmail4" placeholder="you@example.com"/>
                                    </div>
                                    <div class="col-12 mb-1">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <input required autoComplete="off" name="address1" value={formData.address1} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div class="col-12 mb-1 ">
                                        <label for="inputAddress2" class="form-label">Address 2</label>
                                        <input required autoComplete="off" name="address2" value={formData.address2} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="country row">
                                        <div class="col-md-6">
                                            <label for="inputCountry" class="form-label">Country</label>
                                            <select id="inputCountry" class="form-select" name="country" value={formData.country} onChange={(e)=>handleChange(e)}>
                                                <option selected value="">Choose...</option>
                                                <option value="Egypt">Egypt</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputState" class="form-label">State</label>
                                            <select id="inputState" class="form-select" name="state" value={formData.state} onChange={(e)=>handleChange(e)}>
                                                <option selected value="">Choose...</option>
                                                <option value="Cairo">Cairo</option>
                                                <option value="Giza">Giza</option>
                                                <option value="Alex">Alex</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label for="inputZip" class="form-label">Zip</label>
                                            <input required autoComplete="off" name="zip" value={formData.zip} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="payment">
                                        <h5>Payment</h5>
                                        <div className="name-card row mb-1">
                                            <div class="col-md-6">
                                                <label htmlFor="inputNameCard" className="form-label">Name on card</label>
                                                <input required autoComplete="off" name="cardName" value={formData.cardName} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputNameCard" />
                                            </div>
                                            <div class="col-md-6">
                                                <label htmlFor="inputCardNum"   className="form-label">Credit card number </label>
                                                <input required autoComplete="off" name="cardNumber" value={formData.cardNumber} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputCardNum" />
                                            </div>
                                        </div>
                                        <p>Full name as displayed on card</p>
                                        <div className="m-0 card-info row mb-1">
                                            <div class="col-sm-3 col-6">
                                                <label htmlFor="inputNameCard" className="form-label">Expiration</label>
                                                <input required autoComplete="off" name="expiration" value={formData.expiration} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="inputNameCard" />
                                            </div>
                                            <div class="col-sm-3 col-6">
                                                <label htmlFor="inputCardNum"   className="form-label">CVV</label>
                                                <input required autoComplete="off" name="cvv" min="0" max="999" value={formData.cvv} onChange={(e)=>handleChange(e)} type="number" className="form-control" id="inputCardNum" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <button type="submit" class="cotinue-check btn col-12">Make payment</button>
                                </form>
                            </div>
                        </div>
                        <div className="checkout ps-3 m-0 col-md-4 col-sm-6 col-9 ">
                            <div className="card p-3">
                                <div className="p-0 m-0 text-center">
                                    <h5>Order Summary</h5>
                                    <hr/>
                                </div>                                                  
                                <div className="m-0 p-0 card-body ">
                                    <div className="price-prods d-flex justify-content-between">
                                        <p>Products({qtyProducts})</p>
                                        <p>{Math.floor(totalPrice)}$</p>
                                    </div>
                                    <div className="price-ship d-flex justify-content-between">
                                        <p>shipping </p>
                                        <p>30$</p>
                                    </div>
                                    <div className="price-total d-flex justify-content-between">
                                        <p>Total : </p>
                                        <p>{Math.floor(totalPrice) + 30}$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
    export default Check