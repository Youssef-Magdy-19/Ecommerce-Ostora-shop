
const StateHandle =()=>{
    const statedcart = localStorage.getItem("cart")
    return statedcart ? JSON.parse(statedcart) : []
}
const Reducer =(state = StateHandle() , action)=>{
    let product = action.ele
    let qtyProduct = action.num
    console.log(qtyProduct)
    let updateCart 

    switch(action.type){
        case "addcart" :
            const ele = state.find((prod)=> product.id === prod.id)
            if(ele){
                updateCart = state.map((pro)=>{
                   return pro.id === product.id ? {...pro , qty : pro.qty + 1} : pro
                })
            }else{
                updateCart = [...state , {...product , qty : qtyProduct}]
            }
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart
        
        case "deletecart" :
            const eleDle = state.find((pro)=> pro.id === product.id)
            if(eleDle.qty > 1){
                updateCart = state.map((pro)=>{
                   return pro.id === product.id ? {...pro , qty : pro.qty - 1} : pro
                })
            }else{
                updateCart = state.filter((pro)=>{
                    return eleDle.id != pro.id
                })
            }
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart

        case "removecart" :
            const eleRem = state.find((pro)=> pro.id === product.id)
            updateCart = state.filter((pro)=>{ return pro.id != eleRem.id})
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart

        default:
            return state
    }
}

export default Reducer