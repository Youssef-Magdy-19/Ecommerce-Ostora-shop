import { products } from "../utils/products"
import ProductCard from "./productCard"

const OtherProduct =({product})=>{
    let otherProduct = products.filter((pro)=> product.category === pro.category)
    otherProduct = otherProduct.filter((pro)=> pro !== product)
    return(
        <section className="other-product">
            <div className="container mb-5">
                <h2>You might also like</h2>
            </div>
            <div className="filter-products discount-products containr row justify-content-center">
                {otherProduct.map((pro)=>{
                    return(
                        <div className="space col-lg-4 col-md-6 col-12 mb-4">
                            <ProductCard prod={pro}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default OtherProduct