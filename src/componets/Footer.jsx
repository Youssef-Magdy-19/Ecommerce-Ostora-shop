import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBagShopping, faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"

const Footer =()=>{
    return(
        <section className="footer pt-5 pb-5">
            <Container>
                <div className="footer-info row justify-content-center">
                    <div className="col-md-3 col-sm-5 col-10 ">
                        <h2 className="text-white mb-3"><FontAwesomeIcon className="bag-icon me-1" icon={faBagShopping}/>MULTIMART</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem? Quidem quos incidunt obcaecati ducimus at, suscipit saepe officia velit quaerat, expedita ex sequi magnam.</p>
                    </div>
                    <div className="col-md-3 col-sm-5 col-10 ps-md-5">
                        <h4 className="text-white mb-3 ">About Us</h4>
                        <div className="footer-links">
                            <p className="mb-2 p-0">Careers</p>
                            <p className="mb-2 p-0">Our Stores</p>
                            <p className="mb-2 p-0">Our Cares</p>
                            <p className="mb-2 p-0">Terms & Conditions</p>
                            <p className="mb-2 p-0">Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-5 col-10">
                        <h4 className="text-white mb-3">Customer Care</h4>
                        <div className="custorme-care">
                            <p className="mb-2 p-0">Help Center</p>
                            <p className="mb-2 p-0">How to Buy</p>
                            <p className="mb-2 p-0">Track Your Order</p>
                            <p className="mb-2 p-0">Corporate & purchasing</p>
                            <p className="mb-2 p-0">Returns & Refunds</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-5 col-10">
                        <h4 className="text-white mb-3">Contact Us</h4>
                        <div className="my-info">
                            <p className="mb-2 p-0">70 Washington Square South, New York, NY 10012, United States</p>
                            <p className="mb-2 p-0">Email : youssefostora1155@gmail.com</p>
                            <p className="mb-2 p-0">Phone : +201121099489</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
} 
export default Footer