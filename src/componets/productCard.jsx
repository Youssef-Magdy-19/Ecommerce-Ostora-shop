import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux";
import { addcart } from "../Redux/Action";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const ProductCard =({prod})=>{
    const dispatch = useDispatch()
    const x = useNavigate()

    const updateCart =(product)=>{
        dispatch(addcart(product,1))
        toast.success("Product has been added to cart!");
    }
    const reloadPage=()=>{
        window.location.reload()
    }
    // المنتج واستعديه في كل مكان
    return(
        <div className="card">
            <div className="discount-prod d-flex justify-content-end">
                {/* الجزئيه ديه عشان في سكاشن بيظهر فيها الخصم علي المنتجات ومش كل المنتجات عليها خصم */}
                {prod.discount ? <p className="offer">{prod.discount}% OFF</p> : null} 
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <div className="prod-info ps-2">
                <img src={prod.imgUrl} className="w-100 mb-3" height={135} 
                onClick={()=>{
                    x(`/shop/${prod.id}`)
                    reloadPage()
                    }}/>
                <h5 onClick={()=>{
                    x(`/shop/${prod.id}`)
                    reloadPage()
                    }}>{prod.productName}</h5>
                <p>
                    <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                    <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                    <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                    <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                    <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                </p>
                <div className="price-add d-flex justify-content-between pe-3">
                    <p>${prod.price}</p> 
                    <button className="row align-items-center justify-content-center" onClick={()=> updateCart(prod)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard