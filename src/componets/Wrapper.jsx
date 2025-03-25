import { Container  } from "react-bootstrap";
import { serviceData } from "../utils/products";

const Wrapper =()=>{
    return(
        <section className="wrapper">
            <Container>
                <div className="services row justify-content-center">
                    {serviceData.map((ele,id)=>{
                        return(
                        <div className="space col-md-3 col-sm-6 col-9">
                            <div className="serivce pt-3 pb-2 ps-2 pe-2 mb-3 text-center" style={{backgroundColor:ele.bg}}>
                                <div className="service-icon row align-items-center justify-content-center mb-1">{ele.icon}</div>
                                <h5 className="product-title d-flex justify-content-center align-items-center">{ele.title}</h5>
                                <p className="mb-3">{ele.subtitle}</p>
                            </div>  
                        </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
export default Wrapper