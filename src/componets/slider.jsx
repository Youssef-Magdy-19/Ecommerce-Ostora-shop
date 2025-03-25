import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SliderData } from "../utils/products";
import SliderCard from "./sliderCard";
import { Container } from "react-bootstrap";

const SliderHome =()=>{
    const settings = {
        nav:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      }
    return(
        <section className="slider-home">
            <Container>
                <Slider {...settings}>
                    {SliderData.map((ele,id)=>{
                        return(
                        <SliderCard key={id} cover={ele.cover} desc={ele.desc} offer={ele.title}/>
                        )
                    })}
                </Slider>
            </Container>
        </section>
    )
}
export default SliderHome