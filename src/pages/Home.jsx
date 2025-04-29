import { Fragment } from "react";
import Wrapper from "../componets/Wrapper"
import Section from "../componets/Section"
import { products , discoutProducts } from "../utils/products"
import SliderHome from "../componets/slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Home =()=>{
    // this is important
    // هنا هستدعي كل الكومبونت الموجوده بداخل صفحه هوم منها 3 سكاشن بتوع منتجات هندعي العنوان و لون الخلفيه قيم هنكتبها بنفسنا بعد كده المنتجات هعملها فغلتر بالجاتيجوري علي حسب كل سكشن هيتعرض فيها بس الاول هستدعي المنتجات من صفحه المنتجات
    const newArrivals = products.filter((pro)=> pro.category === "mobile" || pro.category === "wireless")
    const bestSeales = products.filter((pro)=> pro.category === "sofa")
    useWindowScrollToTop()
    return(
        <Fragment>
            <SliderHome/>
            <Wrapper/>
            <Section sectionName="discount" title="Big Discount" bgColor="#f6f9fc" productsItems={discoutProducts}/>
            <Section sectionName="arrivals" title="New Arrivals" bgColor="#fff" productsItems={newArrivals}/>
            <Section sectionName="best-sales" title="Best Sales" bgColor="#f6f9fc" productsItems={bestSeales}/>
        </Fragment>
    )
}
export default Home