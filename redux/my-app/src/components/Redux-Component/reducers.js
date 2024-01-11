const initialstate ={count:0}

const counterReducer=(state=initialstate ,action)=>{
    switch(action.type){
        case "Increment":
            return {...state,count:state.count+1}
        case "Decrement":
            return {...state,count:state.count-1}
            default:
                return state;    
    }
}
export default counterReducer;