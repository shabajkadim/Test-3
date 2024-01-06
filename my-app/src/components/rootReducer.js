import { combinReducer } from "react";

import creatReducer from './reducers' 


const rootReducder=combinReducer({
    counter:creatReducer
})
export default rootReducder;