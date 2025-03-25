import { faMinus, faPlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector , useDispatch } from "react-redux"
import { addcart, deletecart, removecart } from "../Redux/Action"
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
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
    state.map((pro)=>{
        prodPrice = pro.price * pro.qty
        totalPrice += prodPrice
    })
    useWindowScrollToTop()
    return(
        <section className="cart pb-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="added-prods col-md-8 col-11">
                        {state.length == 0 ? <div className="cart-empty p-3 mb-5">No Items are add in Cart</div>:
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
                    <div className="check-out d-flex justify-content-end col-md-4 col-11 mb-4">
                        <div  className="p-3">
                            <h6 className="mb-2">Cart Summary</h6>
                            <hr className="m-auto mt-2 mb-3"/>
                            <p className="mb-1">Total Price : </p>
                            <p className="totalPrice m-0 p-0">${totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart 