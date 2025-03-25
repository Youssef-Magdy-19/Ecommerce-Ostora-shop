
import ProductCard from "./productCard";

const Section =({title , bgColor , productsItems})=>{
    


    // هنا اهم حته وفكره جامده انك عندك اكتر من سكشن متكرر فيه المنتجات ينفس الشكل اروح اعمل زي ما عملت مع المنتج بالظبط هاخد العنوان سكشن و لون الخلفيه و المنتجات الهتكون في السكشن ده واروح استدعيهم فغي الصفحه بتاعت هوم
    return(
        // خد بالك من طريقه وضع الخصائص ستايل 
        <section class="discount mt-5 pt-5" style={{backgroundColor:bgColor}}> 
            <div className="containr">
                <h1 className="discount-title text-center mb-4">{title}</h1>
                <div className="discount-products row justify-content-center">
                    {productsItems.map((prod)=>{
                        return(
                            <div className="space col-lg-4 col-md-6 col-11 mb-4">
                                <ProductCard prod={prod}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Section