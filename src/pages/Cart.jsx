import { faMinus, faPlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector , useDispatch } from "react-redux"
import { addcart, deletecart, removecart } from "../Redux/Action"
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
import { Link } from "react-router-dom"

const Cart =()=>{
    const state = useSelector((state)=> state.Reducer)
    const dispatch = useDispatch()
    const handleCart =(product)=>{
        dispatch(addcart(product))
    }
    const updateCart =(product)=>{
        dispatch(deletecart(product))
    }
    const RemoveCart =(product)=>{
        dispatch(removecart(product))
    }
    let totalPrice = 0
    let prodPrice = 0
    let qtyProducts = 0
    state.map((pro)=>{
        prodPrice = pro.price * pro.qty
        totalPrice += prodPrice
        qtyProducts += pro.qty
    })
    useWindowScrollToTop()
    return(
        <section className="cart pb-4 mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="added-prods col-md-8 col-11">
                        {state.length == 0 ? <div className="cart-empty p-3 mb-2">No Items are add in Cart</div>:
                            state.map((pro)=>{
                                return(
                                    <div className="added-prod row justify-content-between ">
                                        <div className="prod-image col-sm-4 col-8">
                                            <img src={pro.imgUrl} className="w-100" height={150}/>
                                        </div>
                                        <div className="prod-info col-sm-5 col-10">
                                            <h4>{pro.productName}</h4>
                                            <div className="prod-price mb-2">
                                                <span className="me-3">${pro.price}*{pro.qty}</span>
                                                <span className="total-price-prod">${pro.price * pro.qty}</span>
                                            </div>
                                        </div>
                                        <div className="card-icons justify-content-end align-items-end col-3">
        
                                            <div className="d-flex  pb-4">
                                                <button className="plus me-2" onClick={()=> handleCart(pro)}><FontAwesomeIcon icon={faPlus}/></button>
                                                <button className="minus" onClick={()=> updateCart(pro)}><FontAwesomeIcon icon={faMinus}/></button>
                                            </div>
                                        </div>
                                        <button className="icon-close" onClick={()=> RemoveCart(pro)}><FontAwesomeIcon icon={faXmark}/></button >
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="checkout ps-3 col-md-4 col-sm-6 col-9 ">
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
                                <Link to="/checkout" className="btn button-checkout w-100">Go To Checkout</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart 