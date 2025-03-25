import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const PageNotFound=()=>{
    return(
        <section className="page-not-found d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h2>Page Not Found</h2>
                <Link to="/"><FontAwesomeIcon icon={faArrowLeft}/> Go To Home</Link>
            </div>
        </section>
    )
}
export default PageNotFound