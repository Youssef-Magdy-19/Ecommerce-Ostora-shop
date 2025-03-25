import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../componets/Banner";
import { products } from "../utils/products";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useState } from "react";
import ProductCard from "../componets/productCard";
import Select from 'react-select';
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const options = [
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};


const Shop =()=>{
    // const sofaCategory = products.filter((pro)=> pro.category === "sofa")
    const [filter , setFilter] = useState(products)

    const handleFilter=(category)=>{
        let newFilter = products.filter((pro)=> pro.category === category.value) 
        // 
        setFilter(newFilter)
    }

    const search =(productName)=>{
        /* هنا استخدم امر انكلودس عشان اقدر اقوله اي منتج اسمه لما تحوله حروف صغيره لو بداخله اي حرف 
        من الحروف المستخدم بيدخلها في البحث متلخصه في البارمتر هتجيبه الامر ده مهم جدا في البحث */
        let searchedProducts = products.filter((pro)=> pro.productName.toLowerCase().includes(productName.toLowerCase()))
        setFilter(searchedProducts)
    }
    useWindowScrollToTop()
    return(
        <section className="shop pb-5">
            <Banner ProductName="Products"/>
            <div className="container">
                <div className="filter row justify-content-between mb-5">
                    {/* ملحوظه مهمه جدا تاج الاوبشن مش بياخد حدث الضغط فعشان كده انا اقدر 
                     استخدم حدث التغيير  مع تاج السليكت واعمل فانشكن ديه بتاخد القيمه الموجوده 
                     في تاج الاوبشن وده هيكون الكاتيجوري بتاعي وعن طريقه هروح افلتر المنتجات باستخدام 
                     البارامتر القيمه وخزن الفلتر ده في متغير بعد كده هعمل تعديل لستيت بتاع الفلتر  */}
                    {/* <select className="col-md-3 col-6" onChange={(e)=> handleFilter(e.target.value)}> */}
                        {/* ملحوظه مهمه عشان كل ده يشتغل لازم اكون مستخدم خاصيه الفاليو وحاطط فيها جاتيجوري */}
                        {/* <option value="" className="hidden" hidden>Filter by Category</option>
                        <option value="sofa" >Sofa</option>
                        <option value="chair" >Chair</option>
                        <option value="watch">Watch</option>
                        <option value="mobile">Mobile</option>
                        <option value="wireless">Wireless</option>
                    </select> */}

                    {/*  هنا استخدمنا مكتبه سيلكت وفرت علينا بنكتب داخل خاصيه اوبشن الاوبجكت الهيكون شايل كا الاوبشن كشكل كاي وقيمه 
                    نفس الكلام الاستيلات ونحط القيمه الديفولت ده البيكون ظاهر وواخد خاصيه الاخفاء */}
                    {/* ملحوظه مهمه الاختلاف الوحيد في الكود بتاع اللوجيك بين المكتبه وتاج سيلكت ان 
                    انا في حدث التغيير مش محتاج اقوله كل ما القيمه تتغير غير لا هي متعرفه بلت ان في المكتبهط
                    احط الفانكشن علي طول من اغير اقواس البارمتر وهو علي طول تلقائيا هيبعت البارمتر لوحده */}

                    <Select className="select ms-2 col-md-3 col-6"
                    options={options} 
                    defaultValue={{ value: "", label: "Filter By Category" }}
                    styles={customStyles}
                    onChange={handleFilter}
                    />
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