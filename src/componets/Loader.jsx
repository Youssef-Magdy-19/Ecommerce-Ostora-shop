import { RotateLoader } from "react-spinners";

const Loader =()=>{
    return(
        <section className="loader">
            <RotateLoader 
            color="#0f3460" 
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </section>
    )
}
export default Loader