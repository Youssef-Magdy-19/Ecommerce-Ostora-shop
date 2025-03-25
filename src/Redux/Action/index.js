

export const addcart =(pro,qty)=>{
    return{
        type: "addcart",
        ele: pro,
        num: qty
    }
}

export const deletecart =(pro)=>{
    return{
        type: "deletecart",
        ele: pro
    }
}

export const removecart =(pro)=>{
    return{
        type: "removecart",
        ele: pro
    }
}