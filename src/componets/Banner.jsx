
const Banner =({ProductName})=>{
    return(
        <section className="banner">
            <div className="background">
                <div className="overlay d-flex justify-content-center align-items-center">
                    <h2 className="text-white mt-5 mb-5 text-center">{ProductName}</h2>
                </div>
            </div>
        </section>
    )
}
export default Banner