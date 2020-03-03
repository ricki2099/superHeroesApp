export const addItem = Hero=>{
    return{
        type:"ADD_ITEM",
        Hero
    }
}
export const setfilter = filter=>{
    return{
        type:"SET_VISIBILITY_FILTER",
        filter
    }
}

