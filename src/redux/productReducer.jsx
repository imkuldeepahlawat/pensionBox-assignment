const initialState = {
    productList:[],
    categoryFilter:null,
    priceRangeFilter:null,
    searchQuery:"",
    sortBy:null,
}

const productReducer = (state =initialState,action)=>{
    switch(action.type){
        case "SET_PRODUCT_LIST":
            return {...state,productList:action.payload};
        case "SET_CATEGORY_FILTER":
            return {...state,categoryFilter:action.payload};
        case "SET_PRICE_RANGE_FILTER":
            return {...state,priceRangeFilter:action.payload};
        case "SET_SEARCH_QUERY":
            return {...state,searchQuery:action.payload};
        case "SET_SORT_BY":
            return {...state,sortBy:action.payload};
        default:
                return state;
    }
}


export default productReducer;