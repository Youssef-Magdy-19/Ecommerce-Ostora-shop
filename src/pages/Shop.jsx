import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../componets/Banner";
import { products } from "../utils/products";
import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductCard from "../componets/productCard";
import Select from 'react-select';
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Shop =()=>{
    const [filter , setFilter] = useState(products)
    const [category , setCategory] = useState("sofa")
    const [ active , setActive] = useState("")
    const [selectCategory , setSelectCategory] = useState("Filter By Category")
    
    const handleFilter=(category)=>{
        let newFilter = products.filter((pro)=> pro.category === category) 
        setFilter(newFilter)
    }
    // حته حلوه لازم نستخدم التاثير عشان كل ما قيمه كاتيجوري تتغير علي طول يشغل الفانكشن ديه فمش هتحتاج تدوس مرتين علي الزرار
    useEffect(()=> handleFilter(category), [category])
    const search =(productName)=>{
        /* هنا استخدم امر انكلودس عشان اقدر اقوله اي منتج اسمه لما تحوله حروف صغيره لو بداخله اي حرف 
        من الحروف المستخدم بيدخلها في البحث متلخصه في البارمتر هتجيبه الامر ده مهم جدا في البحث */
        let searchedProducts = products.filter((pro)=> pro.productName.toLowerCase().includes(productName.toLowerCase()))
        setFilter(searchedProducts)
    }
    useWindowScrollToTop()
    const handleSelect=()=>{
        let dropdown = document.querySelector(".dropdown")
        if(!dropdown.style.display || dropdown.style.display === "none"){
          return  dropdown.style.display = "block"
        }else{
          return  dropdown.style.display = "none"
        }
    }
    // مهم
    const handleDropdown=()=>{
        document.addEventListener("click",(event)=>{
            let dropdown = document.querySelector(".dropdown")
            let selectBtn = document.querySelector(".sele-btn")
            if(dropdown && !dropdown.contains(event.target) && event.target !== selectBtn){
                dropdown.style.display = "none"
            }
        })
    }
    handleDropdown()
    return(
        <section className="shop pb-5 mt-5">
            <Banner ProductName="Products"/>
            <div className="container">
                <div className="filter row justify-content-between mb-5">
                    {/* ملحوظه مهمه جدا تاج الاوبشن مش بياخد حدث الضغط فعشان كده انا اقدر 
                     استخدم حدث التغيير  مع تاج السليكت واعمل فانشكن ديه بتاخد القيمه الموجوده 
                     في تاج الاوبشن وده هيكون الكاتيجوري بتاعي وعن طريقه هروح افلتر المنتجات باستخدام 
                     البارامتر القيمه وخزن الفلتر ده في متغير بعد كده هعمل تعديل لستيت بتاع الفلتر  */}
                    {/* <select className="col-md-3 col-6" onChange={(e)=> handleFilter(e.target.value)}> */}
                        {/* ملحوظه مهمه عشان كل ده يشتغل لازم اكون مستخدم خاصيه الفاليو وحاطط فيها جاتيجوري */}
                    <div className="select ms-2 col-md-3 col-6">
                        <div className="sele d-flex justify-content-between align-items-center">
                            <button className="sele-btn" onClick={()=>handleSelect()}>{selectCategory}</button>
                            <div className="d-flex align-items-center justify-content-between">
                                <span></span>
                                <FontAwesomeIcon icon={faArrowDown} className="sele-icon"/>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className={active === "sofa" ? "active" : ""} 
                            onClick={()=>{
                                setCategory("sofa")
                                setSelectCategory("Sofa")
                                setActive("sofa")
                                console.log(active)
                                
                            }} >Sofa</button>
                            <button className={active === "chair" ? "active" : ""} 
                            onClick={()=>{
                                setCategory("chair")
                                setSelectCategory("Chair")
                                setActive("chair")
                            console.log(active)
                        }
                            } >Chair</button>
                            <button className={active === "watch" ? "active" : ""} 
                            onClick={()=>{
                                setCategory("watch")
                                setSelectCategory("Watch")
                                setActive("watch")
                                console.log(active)
                            }}>Watch</button>
                            <button className={active === "mobile" ? "active" : ""} 
                            onClick={()=>{
                                setCategory("mobile")
                                setSelectCategory("Mobile")
                                setActive("mobile")
                            console.log(active)}
                            }>Mobile</button>
                            <button className={active === "wireless" ? "active" : ""} 
                            onClick={()=>{
                                setCategory("wireless")
                                setSelectCategory("Wireless")
                                setActive("wireless")
                                console.log(active)
                            }}>
                                
                                Wireless</button>
                        </div>
                    </div>

                    {/*  هنا استخدمنا مكتبه سيلكت وفرت علينا بنكتب داخل خاصيه اوبشن الاوبجكت الهيكون شايل كا الاوبشن كشكل كاي وقيمه 
                    نفس الكلام الاستيلات ونحط القيمه الديفولت ده البيكون ظاهر وواخد خاصيه الاخفاء */}
                    {/* ملحوظه مهمه الاختلاف الوحيد في الكود بتاع اللوجيك بين المكتبه وتاج سيلكت ان 
                    انا في حدث التغيير مش محتاج اقوله كل ما القيمه تتغير غير لا هي متعرفه بلت ان في المكتبهط
                    احط الفانكشن علي طول من اغير اقواس البارمتر وهو علي طول تلقائيا هيبعت البارمتر لوحده */}

                    {/* <Select className="select ms-2 col-md-3 col-6"
                    options={options} 
                    defaultValue={{ value: "", label: "Filter By Category" }}
                    styles={customStyles}
                    onChange={handleFilter}
                    /> */}
                    <div className="search d-flex justify-content-between align-items-center col-md-8 col-11">
                        <input type="text" placeholder="Search by Name" onChange={(e)=> search(e.target.value)}/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
            <div className="filter-products discount-products containr row justify-content-center">
                    {filter && filter.length > 0?
                        filter.map((pro)=>{
                            return(
                                <div className="space col-lg-4 col-md-6 col-12 mb-4">
                                    <ProductCard prod={pro}/>
                                </div>
                            )
                        })
                        : 
                        <div className="text-center">
                            <h2>Product Not Found !!</h2>
                        </div> 
                    }
            </div>
        </section>
    )
}
export default Shop