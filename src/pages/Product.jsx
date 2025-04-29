import Banner from "../componets/Banner";
import { useDispatch } from "react-redux";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { addcart } from "../Redux/Action";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import OtherProduct from "../componets/OtherProduct";
import ProductReviews from "../componets/AddedReview";

const Product =()=>{
    const [active , setActive] = useState("Descipition")
    const addedComments = JSON.parse(localStorage.getItem("productComments")) || []
    
    const handleActive =(name)=>{
        setActive(name)
    }
    const [quantity , setquantity] = useState(1)
    const updateProductQty =(e)=>{
        setquantity(e.target.value)
        console.log(quantity)
    }
    const dispatch = useDispatch()
    const productId = useParams()
    const product = products.find((pro)=> pro.id == productId.id )
    
    const updateCart =(product,qty)=>{
        dispatch(addcart(product,qty))
        toast.success("Product has been added to cart!")
    }
    const showReviwes =()=>{
        let review = document.querySelector(".prod-rev")
        let desc = document.querySelector(".prod-desc")
        review.style.display = "block"
        desc.style.display = "none"
    }
    const showDesc=()=>{
        let review = document.querySelector(".prod-rev")
        let desc = document.querySelector(".prod-desc")
        review.style.display = "none"
        desc.style.display = "block"
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[productId])
        const user = JSON.parse(localStorage.getItem("userInfo"))
        // const handelUserReview=()=>{
        //     if(user){
        //         setCommentsUser([...commentsUser , comment])
        //     }else{
        //         setTimeout(()=>navigate("/login"), 2000)
        //         window.location.href="/Ecommerce-Ostora-shop/login"
        //     }
        //     console.log(commentsUser)
        //     return commentsUser
        // } 
        const [comments, setComments] = useState(() => {
            const stored = localStorage.getItem("productComments");
            return stored ? JSON.parse(stored) : {};
        });
        const commentCount =(addedComments[productId.id] || []).length
    return(
        <section className="product pb-5 mt-5">
            <Banner ProductName={product.productName}/>
            <div className="container">
                <div className="product-details row justify-content-between mt-5 ">
                    <div className="product-image col-md-6 col-12">
                        <img src={product.imgUrl} alt="" className="w-100 mb-4" />
                    </div>
                    <div className="product-info col-md-6 col-12">
                        <h5>{product.productName}</h5>
                        <div className="d-flex justify-content-between col-md-6 col-8">
                            <p>
                                <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                                <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                                <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                                <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                                <FontAwesomeIcon color="gold" className="me-1" icon={faStar}/>
                            </p>
                            <span className="ms-3">{product.reviews[0].rating} Rating</span>
                        </div>
                        <div className="d-flex justify-content-between col-md-6 col-8 mt-1 mb-3 align-items-center">
                            <p className="product-price mb-0">${product.price}</p>
                            <span>Category: {product.category}</span>
                        </div>
                        <p>{product.shortDesc}</p>
                        <input type="number" value={quantity} onChange={(e)=>updateProductQty(e)}/>
                        <button className="btn d-block mt-2" onClick={()=> updateCart(product,quantity)}>Add To Cart</button>
                    </div>
                </div>
                <div className="desc-rev">
                    <div className="buttons-desc-rev mb-3">
                        <span className={active === "Descipition" ? "active me-3" : "me-3"} 
                        onClick={()=>{
                                showDesc()
                                handleActive("Descipition")
                            }}>Descirpition</span>
                        <span className={active === "reviwe" ? "active" : ""} 
                        onClick={()=>{
                            showReviwes()
                            handleActive("reviwe")
                            }}>Reviews({product.reviews.length + commentCount})</span>
                    </div>
                    <div className="prod-desc">
                        <p className="mb-1">{product.description}</p>
                    </div>
                    <div className="prod-rev">
                        <p className="mb-1"><strong>Youssef Magdy</strong></p>
                        <p className="mb-1 text-warning">{product.reviews[0].rating} (rating)</p>
                        <p className="mb-1">{product.reviews[0].text} Rating</p>
                        {product.reviews[1]?
                        <div>
                            <p className="mb-1 mt-4"><strong>Youssef No3man</strong></p>
                            <p className="mb-1 text-warning">{product.reviews[1].rating} (rating)</p>
                            <p className="mb-1">{product.reviews[1].text} Rating</p>
                        </div>: null}
                        <ProductReviews productId={productId.id} comments={comments} setComments={setComments}/>
                    </div>
                </div>
            </div>
            <OtherProduct product={product} />
        </section>
    )
}
export default Product